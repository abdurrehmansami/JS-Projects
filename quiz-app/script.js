const quizDB = [
  {
    question: "What is the full form of CSS",
    a: "css",
    b: "cfs",
    c: "cds",
    d: "cxs",
    ans: "ans1",
  },
  {
    question: "What is the full form of HTML",
    a: "css",
    b: "cfs",
    c: "cds",
    d: "cxs",
    ans: "ans1",
  },
  {
    question: "What is the full form of JS",
    a: "css",
    b: "cfs",
    c: "cds",
    d: "cxs",
    ans: "ans1",
  },
  {
    question: "What is the full form of JSX",
    a: "css",
    b: "cfs",
    c: "cds",
    d: "cxs",
    ans: "ans1",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");

const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");

const showScore = document.querySelector("#showScore");
let questionCount = 0;
let score = 0;

const loadQuestion = () => {
  //   console.log(quizDB[0].a);
  const questionList = quizDB[questionCount];
  question.innerText = questionList.question;
  option1.innerHTML = questionList.a;
  option2.innerHTML = questionList.b;
  option3.innerHTML = questionList.c;
  option4.innerHTML = questionList.d;
};

loadQuestion();

const getCheckedAnswer = () => {
  let answer;

  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id;
    }
  });
  return answer;
};
const deselectAll = () => {
  answers.forEach((curAnsElem) => {
    curAnsElem.checked = false;
  });
};

submit.addEventListener("click", () => {
  const checkedAnswer = getCheckedAnswer();
  console.log(checkedAnswer);

  if (checkedAnswer === quizDB[questionCount].ans) {
    score++;
  }
  questionCount++;
  //   answers.style.checked = false;
  deselectAll();
  if (questionCount < quizDB.length) {
    loadQuestion();
  } else {
    showScore.innerHTML = `
      <h3>You Scored ${score}/${quizDB.length} </h3>
      <button class='btn' onclick='location.reload()'>Play Again</button> `;
    showScore.classList.remove("scoreArea");
  }
});
