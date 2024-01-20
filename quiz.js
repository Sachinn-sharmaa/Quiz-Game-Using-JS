const quesJSON = [
  {
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "Atlanta United",
    options: [
      "Atlanta United",
      "Atlanta Impact",
      "Atlanta Bulls",
      "Atlanta Stars",
    ],
    question: "Which of these is a soccer team based in Atlanta?",
  },
  {
    correctAnswer: "A Nanny",
    options: ["A Sow", "A Lioness", "A Hen", "A Nanny"],
    question: "A female goat is known as what?",
  },
  {
    correctAnswer: "P. L. Travers",
    options: [
      "J. R. R. Tolkien",
      "P. L. Travers",
      "Lewis Carroll",
      "Enid Blyton",
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];

let score = 0;
let currentquestion = 0;
const questionField = document.getElementById("question");

const optionsField = document.getElementById("options");

const scoreField = document.getElementById("score");

const nextbtn = document.getElementById("next");

nextbtn.addEventListener("click", () => {
  scoreField.textContent = `Score : ${score}`;
  nextQuestion();
});

showQuestions();
function showQuestions() {
  const { correctAnswer, options, question } = quesJSON[currentquestion];
  const suffledoptions = shuffleOptions(options);

  questionField.textContent = question;

  //populating options field with options
  suffledoptions.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    optionsField.appendChild(btn);

    //Event handler on btn
    btn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score = score + 1;
      } else {
        score = score - 0.25;
      }

      scoreField.textContent = `Score ${score}`;
      nextQuestion();
    });
  });
}
//shuffling the options
function shuffleOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

function nextQuestion() {
  currentquestion++;
  optionsField.textContent = "";
  if (currentquestion >= quesJSON.length) {
    questionField.textContent = "Quiz Completed";
    nextbtn.remove();
  } else {
    showQuestions();
  }
}

// for (let i = 0; i < questionObj.options.length; i++) {
//   const btn = optionsField.createElement("button");
//   btn.textContent = questionObj.options[i];
// }
