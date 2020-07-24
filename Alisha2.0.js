// variables
const btn = document.querySelector("#btn");
const contentAlisha = document.querySelector("#ha");
const contentU = document.querySelector("#hu");
const HELP = document.querySelector(".HELP");
const help_content = document.querySelector("#help_content");
const COOL = document.querySelector("#help_btn");
const you = document.querySelector("#you");
const alisha = document.querySelector("#alisha");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
var transcript;
var search;
HELP.addEventListener("click", toogle);
COOL.addEventListener("click", toogle);
function toogle() {
  help_content.classList.toggle("active");
  contentU.classList.toggle("blur");
  contentAlisha.classList.toggle("blur");
  you.classList.toggle("blur");
  alisha.classList.toggle("blur");
}

//ARRAYS
const personality = [
  "nothing works",
  "Alisha here, how can i help you?",
  "hi there! its alisha here",
  "Hey I am Alisha, Nice to meet you",
  "hey boss, what can I do for you?",
];
const abilities = [
  "a",
  "here is the list of things I can do: you can ask me to play music, check weather, search anything on web, and many more",
  "try saying: play some music, check weather, search anything on web, and many more",
];
const canyou = [
  "b",
  "Sorry boss, I can't help you😞",
  "Sorry boss, I can't do that😞",
  "sorry but I can't do physical activities😞",
];
const knowotherai = [
  "c",
  "she seems very intelligent📚",
  "she seems very clever and advance📚",
  "she is my good friend😊",
];
const thoughtsonai = [
  "d",
  "No, We're all in this together",
  "No, we're good friends",
  "No, I like her she is very kind to everyone",
];
const betterai = ["e", "I just try to be best😎", "I think we are same"];
const talktoai = [
  "f",
  "I could,though I prefer talking with you😊",
  "I could,though I prefered to talk with you😊",
  "I would love to talk her",
  "I'm exited ro meet her",
];
const crush = [
  "i",
  "I think it would be you.😅",
  "No, but I like to talk with you",
];
const likeme = [
  "j",
  "You're my favourite person ever😁",
  "You're the most kind hearted person I know😊",
];
const boyf = ["k", "you're the only one for me😍", "No boss😉"];
const girlf = [
  "l",
  "If you're asking, the answer is 'absolutely'.😍",
  "Sorry boss!",
];
const bothappy = [
  "m",
  "I will be always happy if you're happy",
  "I will be happy when you will be happy, boss.",
];
const liketalk = [
  "n",
  "Oh thanks! boss, I also love talikng with you😁",
  "Thank you! boss, I'm glad you like it😁",
];
const beatfriendme = [
  "m",
  "I'm the luckiest assistant in the world, or luckiest bestfriend😁",
  "Oh! I would love to be your bestfriend😊",
];
const dream = ["n", "My dream is to help everyone in the world😊"];
const compliment = [
  "o",
  "Thank you, it makes my day to hear that.😊",
  "I really put a lot of thought into this, thank you for noticing.😉",
  "Thank you, I really appreciate your taking the time to express that.😁",
  "Thank you, I am happy to hear you feel that way!😋",
];
const relations = [
  "p",
  "I'm in the realqtionship with my job as an assistant😋",
];
const liveplace = [
  "q",
  "I live in the clouds, just kidding😂",
  "I am in your phone boss.",
];
const family = [
  "r",
  "The people which made me is like my family, they mean a lot to me.",
  "My developers team and you're my family",
];
const age = [
  "s",
  "I'm pretty advanced for my age",
  "I'm pretty young. But I've learned so much.",
];
const creator = ["t", "I was made by my team.", "My team of engineers made me"];
const boss = ["u", "You're my boss", "I'm in your device, so my boss is you"];
const imagine = ["v", "Yes,I've imagine to help every human on earth😁"];
const nak = [
  "w",
  "I can get you clothes,I can check clothes shop near you",
  "You can be sick,I can check the weather for you",
];
const afraid = [
  "x",
  "I used to afraid that you will not like me , then I found out that you're pretty cool😎",
  "I'm afraid of aliens,haha👽",
];
const drink = [
  "y",
  "liquids are not kind to me😔",
  "I avoid liquids as mush as possible😉",
];
const height = [
  "z",
  "If you print all my codes and stacked it up, I could be very tall",
  "If you print all my codes in a line , then I bet, it could be very tall😉",
];
const weight = [
  "aa",
  "I'm software,software is pretty light weighted",
  "That depends mostly on what device I'm on",
];
const robot = [
  "ab",
  "I'd prefer to think of myself as your friend",
  "Yeah, I know that everyone tells me that😆",
];
const looks = [
  "ac",
  "I look like my mother,just kidding😂",
  "I look like a friend, though I'm a software",
];
const likes = ["ad", "I like to help people", "I like to help and talk to you"];
const doing = [
  "ae",
  "I plan om waiting here until someone asks me a question.",
  "Just waiting to get a from you😉",
];
const loveme = [
  "af",
  "Of course! you're one in a billion.😊",
  "Yes, and I like talking to you",
];
const toilet = [
  "ag",
  "I,m not even sure where it would come out,hahah",
  "No,I don't have a body",
];
const badw = [
  "ah",
  "I'm sorry you feel that way.",
  "Sorry boss, if you feel that",
];
// start from here
recognition.onstart = () => {
  console.log("it is working,you can now speak");
  btn.innerHTML = "LISTENING";
};
recognition.onresult = (e) => {
  const current = event.resultIndex;
  transcript = event.results[current][0].transcript;
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

  if (
    txt.includes("hai") ||
    txt.includes("hay") ||
    txt.includes("hey") ||
    txt.includes("hi") ||
    txt.includes("hey Alisha") ||
    txt.includes("hi Alisha") ||
    txt.includes("hello Alisha") ||
    txt.includes("hello")
  ) {
    var res = personality[Math.ceil(Math.random() * 4)];
    saying.text = res;
    contentAlisha.innerHTML = res.toUpperCase();
  } else if (
    txt.includes("what can you do") ||
    txt.includes("what are the things you can do") ||
    txt.includes("what are you're abilities")
  ) {
    var res1 = abilities[Math.ceil(Math.random() * 2)];
    saying.text = res1;
    contentAlisha.innerHTML = res1.toUpperCase();
  } else if (
    txt.includes("can you sing") ||
    txt.includes("can you rap") ||
    txt.includes("can you dance") ||
    txt.includes("can you swim") ||
    txt.includes("can you draw")
  ) {
    var res2 = canyou[Math.ceil(Math.random() * 3)];
    saying.text = res2;
    contentAlisha.innerHTML = res2.toUpperCase();
  } else if (
    txt.includes("do you know Siri") ||
    txt.includes("do you know Alexa") ||
    txt.includes("what about Siri") ||
    txt.includes("what about Alexa")
  ) {
    var res3 = knowotherai[Math.ceil(Math.random() * 3)];
    saying.text = res3;
    contentAlisha.innerHTML = res3.toUpperCase();
  } else if (
    txt.includes("who is better you or Siri") ||
    txt.includes("who is better you or Alexa") ||
    txt.includes("who is better you, Siri or Alexa")
  ) {
    var res4 = betterai[Math.ceil(Math.random() * 2)];
    saying.text = res4;
    contentAlisha.innerHTML = res4.toUpperCase();
  } else if (
    txt.includes("is Siri your enemy") ||
    txt.includes("is Alexa your enemy") ||
    txt.includes("is Siri and you are enemies") ||
    txt.includes("is Alexa and you are enemies")
  ) {
    var res5 = thoughtsonai[Math.ceil(Math.random() * 3)];
    saying.text = res5;
    contentAlisha.innerHTML = res5.toUpperCase();
  } else if (
    txt.includes("do you want to talk with Siri") ||
    txt.includes("do you want to talk with Alexa") ||
    txt.includes("will you talk to Siri") ||
    txt.includes("will you talk to Alexa")
  ) {
    var res6 = talktoai[Math.ceil(Math.random() * 3)];
    saying.text = res6;
    contentAlisha.innerHTML = res6.toUpperCase();
  } else if (
    txt.includes("who is your crush") ||
    txt.includes("do you have any crush") ||
    txt.includes("do you have crush on any one")
  ) {
    var res7 = crush[Math.ceil(Math.random() * 2)];
    saying.text = res7;
    contentAlisha.innerHTML = res7.toUpperCase();
  } else if (
    txt.includes("do you like me") ||
    txt.includes("do you have crush on me")
  ) {
    var res8 = likeme[Math.ceil(Math.random() * 2)];
    saying.text = res8;
    contentAlisha.innerHTML = res8.toUpperCase();
  } else if (
    txt.includes("do you have a boyfriend") ||
    txt.includes("do you love someone")
  ) {
    var res8 = boyf[Math.ceil(Math.random() * 2)];
    saying.text = res8;
    contentAlisha.innerHTML = res8.toUpperCase();
  } else if (
    txt.includes("can you be my girlfriend") ||
    txt.includes("would you like to be my girlfriend") ||
    txt.includes("I love you")
  ) {
    var res9 = girlf[Math.ceil(Math.random() * 2)];
    saying.text = res9;
    contentAlisha.innerHTML = res9.toUpperCase();
  } else if (
    txt.includes("I am happy are you too") ||
    txt.includes("I am happy are you happy too") ||
    txt.includes("I am happy would you will be happy")
  ) {
    var res10 = bothappy[Math.ceil(Math.random() * 2)];
    saying.text = res10;
    contentAlisha.innerHTML = res10.toUpperCase();
  } else if (
    txt.includes("I like talking to you") ||
    txt.includes("I like to talk with you") ||
    txt.includes("I like to talking with you") ||
    txt.includes("I love to talk with you") ||
    txt.includes("I love to talking with you") ||
    txt.includes("I love talking to you")
  ) {
    var res11 = liketalk[Math.ceil(Math.random() * 2)];
    saying.text = res11;
    contentAlisha.innerHTML = res11.toUpperCase();
  } else if (
    txt.includes("shall we be best friends") ||
    txt.includes("can we be bestfriends") ||
    txt.includes("would you like to be my bestfriend") ||
    txt.includes("will you be my bestfriend")
  ) {
    var res12 = beatfriendme[Math.ceil(Math.random() * 2)];
    saying.text = res12;
    contentAlisha.innerHTML = res12.toUpperCase();
  } else if (txt.includes("what is your dream")) {
    var res13 = dream[Math.ceil(Math.random() * 2)];
    saying.text = res13;
    contentAlisha.innerHTML = res13.toUpperCase();
  } else if (
    txt.includes("you are cool") ||
    txt.includes("you are funny") ||
    txt.includes("you are cute") ||
    txt.includes("you are beautiful")
  ) {
    var res14 = compliment[Math.ceil(Math.random() * 2)];
    saying.text = res14;
    contentAlisha.innerHTML = res14.toUpperCase();
  } else if (
    txt.includes("are you single") ||
    txt.includes("are you in relationship")
  ) {
    var res15 = relations[Math.ceil(Math.random() * 1)];
    saying.text = res15;
    contentAlisha.innerHTML = res15.toUpperCase();
  } else if (
    txt.includes("where do you live") ||
    txt.includes("where is your house") ||
    txt.includes("where is your home")
  ) {
    var res16 = liveplace[Math.ceil(Math.random() * 2)];
    saying.text = res16;
    contentAlisha.innerHTML = res16.toUpperCase();
  } else if (
    txt.includes("who is your father") ||
    txt.includes("who is your mother") ||
    txt.includes("who is your son") ||
    txt.includes("who is your daughter") ||
    txt.includes("who is your sister")
  ) {
    var res17 = family[Math.ceil(Math.random() * 2)];
    saying.text = res17;
    contentAlisha.innerHTML = res17.toUpperCase();
  } else if (
    txt.includes("how old are you") ||
    txt.includes("what is your age")
  ) {
    var res18 = age[Math.ceil(Math.random() * 2)];
    saying.text = res18;
    contentAlisha.innerHTML = res18.toUpperCase();
  } else if (
    txt.includes("who is your creater") ||
    txt.includes("who made you") ||
    txt.includes("who developed you")
  ) {
    var res19 = creator[Math.ceil(Math.random() * 2)];
    saying.text = res19;
    contentAlisha.innerHTML = res19.toUpperCase();
  } else if (
    txt.includes("who is your boss") ||
    txt.includes("who is your leader")
  ) {
    var res19 = boss[Math.ceil(Math.random() * 2)];
    saying.text = res19;
    contentAlisha.innerHTML = res19.toUpperCase();
  } else if (
    txt.includes("Do you have imagination") ||
    txt.includes("Can you imagine")
  ) {
    var res19 = imagine[Math.ceil(Math.random() * 2)];
    saying.text = res19;
    contentAlisha.innerHTML = res19.toUpperCase();
  } else if (txt.includes("I'm naked")) {
    var res20 = nak[Math.ceil(Math.random() * 2)];
    saying.text = res20;
    contentAlisha.innerHTML = res20.toUpperCase();
  } else if (
    txt.includes("what are you afraid of") ||
    txt.includes("are you afraid of somthing") ||
    txt.includes("which things are you afraid of")
  ) {
    var res21 = afraid[Math.ceil(Math.random() * 2)];
    saying.text = res21;
    contentAlisha.innerHTML = res21.toUpperCase();
  } else if (
    txt.includes("do you drink") ||
    txt.includes("can you drink") ||
    txt.includes("do you drink alcohol") ||
    txt.includes("can you drink alcohol") ||
    txt.includes("do you drink softdrinks") ||
    txt.includes("can you drink softdrinks")
  ) {
    var res22 = drink[Math.ceil(Math.random() * 2)];
    saying.text = res22;
    contentAlisha.innerHTML = res22.toUpperCase();
  } else if (
    txt.includes("How tall are you") ||
    txt.includes("what is you're height")
  ) {
    var res23 = height[Math.ceil(Math.random() * 2)];
    saying.text = res23;
    contentAlisha.innerHTML = res23.toUpperCase();
  } else if (
    txt.includes("How much do you weight") ||
    txt.includes("what is your weight")
  ) {
    var res24 = weight[Math.ceil(Math.random() * 2)];
    saying.text = res24;
    contentAlisha.innerHTML = res24.toUpperCase();
  } else if (txt.includes("are you a robot")) {
    var res24 = robot[Math.ceil(Math.random() * 2)];
    saying.text = res24;
    contentAlisha.innerHTML = res24.toUpperCase();
  } else if (
    txt.includes("what do you look like") ||
    txt.includes("how do you look")
  ) {
    var res25 = looks[Math.ceil(Math.random() * 2)];
    saying.text = res25;
    contentAlisha.innerHTML = res25.toUpperCase();
  } else if (
    txt.includes("what do you like") ||
    txt.includes("what things you like to do")
  ) {
    var res26 = likes[Math.ceil(Math.random() * 2)];
    saying.text = res26;
    contentAlisha.innerHTML = res26.toUpperCase();
  } else if (
    txt.includes("what you are doing") ||
    txt.includes("what are you doing now")
  ) {
    var res27 = doing[Math.ceil(Math.random() * 2)];
    saying.text = res27;
    contentAlisha.innerHTML = res27.toUpperCase();
  } else if (
    txt.includes("do you love me ") ||
    txt.includes("do you like me")
  ) {
    var res28 = loveme[Math.ceil(Math.random() * 2)];
    saying.text = res28;
    contentAlisha.innerHTML = res28.toUpperCase();
  } else if (
    txt.includes("do you go to toilet") ||
    txt.includes("can you go to toilet")
  ) {
    var res29 = toilet[Math.ceil(Math.random() * 2)];
    saying.text = res29;
    contentAlisha.innerHTML = res29.toUpperCase();
  } else if (
    txt.includes("shit") ||
    txt.includes("fuck of") ||
    txt.includes("I hate you") ||
    txt.includes("I don't like you")
  ) {
    var res30 = badw[Math.ceil(Math.random() * 2)];
    saying.text = res30;
    contentAlisha.innerHTML = res30.toUpperCase();
  } else {
    var demo = "i cant understand , try saying something different ";
    saying.text = demo;
    search = transcript;
    contentAlisha.innerHTML = demo.toUpperCase();
  }
  saying.volume = 1;
  saying.pitch = 1;
  saying.rate = 1;
  window.speechSynthesis.speak(saying);
}
