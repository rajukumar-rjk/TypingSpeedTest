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
sampleTextEl.innerHTML =
  "Click on the area below to start the Typing speed test";
const typedTextEl = document.querySelector(".input-text");
let timeLimit = 5;
let totalTime = timeLimit;
let timeLeft = totalTime;
let timeConsumed = 0;
let timer = 0;

let sampleTextNo = 0;
let totalSampleTextChar = 0;

const resetTest = () => {
  totalTime = timeLimit;
  timeLeft = totalTime;
  timeConsumed = 0;
  timer = 0;
};

const startTest = () => {
  clearInterval(timer);
  timer = setInterval(startTimer, 1000);
};

const startTimer = () => {
  if (timeLeft > 0) {
    console.log(timeLeft);
    timeLeft--;
    timeConsumed++;
    timerEl.innerText = timeLeft;
  } else {
    endTest();
  }
};

const endTest = () => {
  console.log("end");
  clearInterval(timer);
};

const getSampleText = (sampleTextNo) => {
  totalSampleTextChar = 0;
  let st = quotes[sampleTextIndexNo];
  totalSampleTextChar = st.split("").length;
  sampleTextNo++;
  sampleTextEl.
};

const testProcess = () => {
  let EnteredText = typedTextEl.value;
  let totalEnteredChar = EnteredText.split("").length;

  if (totalEnteredChar === totalSampleTextChar) {
    getSampleText();
  }
};

getSampleText(1);
