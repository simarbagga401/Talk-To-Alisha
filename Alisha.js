// variables
const alisha = document.querySelector(".alisha");
const btn = document.querySelector("#btn");
const contentAlisha = document.querySelector("#ha");
const contentU = document.querySelector("#hu");
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const personality = [
  "nothing works",
  "Alisha here how can i help you",
  "hi there ,its alisha here",
  "Hey I am Alisha, Nice to meet you",
];
const demoarray = [
  "s",
  "this is a demo",
  "this is just a demo",
  "dont take it seriously",
];

// start from here
recognition.onstart = () => {
  console.log("it is working,you can now speak");
  btn.innerHTML = "LISTENING";
};
recognition.onresult = (e) => {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  console.log(e);
  contentU.innerHTML = transcript.toUpperCase();
  speakItLoud(transcript);
  btn.innerHTML = "TALK";
};

// event listeners
btn.addEventListener("click", () => {
  recognition.start();
});
function speakItLoud(txt) {
  const saying = new SpeechSynthesisUtterance();

  if (txt.includes("hai") || txt.includes("hay")) {
    var res = personality[Math.ceil(Math.random() * 3)];
    saying.text = res;
    contentAlisha.innerHTML = res.toUpperCase();
  } else if (
    txt.includes("say demo array") ||
    txt.includes("introduce demo array")
  ) {
    var res1 = demoarray[Math.ceil(Math.random() * 3)];
    saying.text = res1;
    contentAlisha.innerHTML = res1.toUpperCase();
  } else {
    text = "I cant understand what you just said";
    saying.text = text;
    contentAlisha.innerHTML = text.toUpperCase();
  }
  btn.innerHTML = "SPEAKING";
  saying.volume = 1;
  saying.pitch = 1;
  saying.rate = 1;

  window.speechSynthesis.speak(saying);
}
