let score = 0;

const questions = [
  {
    question: "Who wrote Hamlet?",
    options: ["Arthur Miller", "William Shakespeare", "Tennessee Williams"],
    answer: "William Shakespeare"
  },
  {
    question: "Who wrote Death of a Salesman?",
    options: ["Arthur Miller", "August Wilson", "Lorraine Hansberry"],
    answer: "Arthur Miller"
  }
];

let current = 0;

function loadQuestion() {
  let q = questions[current];
  document.getElementById("question").textContent = q.question;
  
  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.options.forEach(option => {
    let btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[current].answer) {
    score++;
    document.getElementById("result").textContent = "🎉 Correct!";
  } else {
    document.getElementById("result").textContent = "❌ Wrong!";
  }

  document.getElementById("score").textContent = score;
  current++;

  if (current < questions.length) {
    setTimeout(loadQuestion, 1000);
  } else {
    document.getElementById("question").textContent = "Quiz Complete!";
    document.getElementById("answers").innerHTML = "";
  }
}

loadQuestion();
function saveScore() {
  let name = prompt("Enter your name:");
  let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  leaderboard.push({ name, score });
  leaderboard.sort((a,b) => b.score - a.score);
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}