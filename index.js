quotes = [
  "When you have a dream, you have got to grab it and never let go.",
  "Nothing is impossible. The word itself says I am possible.",
  "There is nothing impossible to they who will try.",
  "The bad news is time flies. The good news is you are the pilot.",
  "Life has got all those twists and turns. You have got to hold on tight and off you go.",
  "Keep your face always toward the sunshine, and shadows will fall behind you.",
];
const timerEl = document.getElementById("timer");
const sampleTextEl = document.querySelector(".sample-text");
const wpmEl = document.getElementById("wpm-div");
const cpmEl = document.getElementById("cpm-div");
const wpmCountEl = document.getElementById("wpm-count");
const cpmCountEl = document.getElementById("cpm-count");
sampleTextEl.innerHTML =
  "Click on the area below to start the Typing speed test";
let typedTextEl = document.querySelector(".input-text");
let errorEl = document.getElementById("error-count");
let accuracyEl = document.getElementById("accuracy-count");
let timeLimit = 60;
let totalTime = timeLimit;
let timeLeft = totalTime;
let timeConsumed = 0;
let timer = 0;
let total;
let sampleTextNo = 0;
let selectedTextCharArr;
let totalSampleTextChar = 0;
let totalErrors = 0;
let totalTypedChar = 0;
let typedChar = 0;

let startTest = () => {
  getSampleText();
  clearInterval(timer);
  timer = setInterval(startTimer, 1000);
};

// start the timer
let startTimer = () => {
  if (timeLeft > 0) {
    timeLeft--;
    timeConsumed++;
    timerEl.innerText = timeLeft;
  } else {
    endTest();
  }
};

// end the test
let endTest = () => {
  clearInterval(timer);
  typedTextEl.disabled = true;

  sampleTextEl.textContent = "Refresh the page to restart the test again";
  cpm = Math.round((totalTypedChar / timeConsumed) * 60);
  wpm = Math.round((totalTypedChar / 5 / timeConsumed) * 60);
  wpmCountEl.textContent = wpm;
  cpmCountEl.textContent = cpm;
  wpmEl.style.display = "block";
  cpmEl.style.display = "block";
};
// getting tex to display on for typing
const getSampleText = () => {
  console.log(`start at ${sampleTextNo}`);
  totalSampleTextChar = 0;
  sampleTextEl.textContent = null;

  let st = quotes[sampleTextNo];
  selectedTextCharArr = st.split("");

  totalSampleTextChar = selectedTextCharArr.length;
  sampleTextNo++;

  selectedTextCharArr.forEach((char) => {
    const charSpan = document.createElement("span");
    charSpan.innerText = char;
    sampleTextEl.appendChild(charSpan);
  });
};

// on every input in the input box this code will run
let testProcess = () => {
  typedChar++;
  let EnteredText = typedTextEl.value;
  let EnteredTextArr = EnteredText.split("");
  let totalEnteredChar = EnteredTextArr.length;

  errors = 0;

  // checking errors
  quoteSpanArray = sampleTextEl.querySelectorAll("span");
  quoteSpanArray.forEach((char, index) => {
    let typedChar = EnteredTextArr[index];

    if (typedChar == null) {
      char.classList.remove("correct_char");
      char.classList.remove("incorrect_char");
    } else if (typedChar === char.innerText) {
      char.classList.add("correct_char");
      char.classList.remove("incorrect_char");
    } else {
      char.classList.add("incorrect_char");
      char.classList.remove("correct_char");

      errors++;
    }
  });
  // counting errors and accuracy
  errorEl.textContent = totalErrors + errors;
  let correctChar = totalTypedChar - (totalErrors + errors);
  let accuracy = (correctChar / totalTypedChar) * 100;
  accuracyEl.textContent = Math.round(accuracy);

  if (totalEnteredChar === totalSampleTextChar) {
    typedTextEl.value = "";
    totalErrors += errors;
    getSampleText();
  }

  totalTypedChar++;
};
