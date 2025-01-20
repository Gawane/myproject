// choix des variables
const question = [
    "What's the capital of France?",
    "Who painted the Mona Lisa?"
  ];
  const choices = [
    ["Paris", "Lyon", "Marseille", "Nice"],
    ["Earth", "Mars", "Jupiter", "Saturn"],
  ];
  const correctAnswer = ["Paris", "Jupiter"];
  let currQuestionIndex = 0;
  let score = 0;
  //fonction pour afficher la question
  function displayQuestion() {
    if (currQuestionIndex < question.length) {
      const h2 = document.querySelector("h2");
      h2.innerHTML = question[currQuestionIndex];
      for (let i = 0; i < 4; i++) {
       const btn = document.getElementById(`but${i+1}`);
              btn.innerHTML = choices[currQuestionIndex][i];
              btn.value = choices[currQuestionIndex][i];
      }
    } else {
        const p = document.querySelector("p");
        p.innerHTML = `You scored ${score} out of ${question.length}`;
        const h2 = document.querySelector("h2");
        h2.innerHTML = "";
        const butn = document.getElementsByClassName("flex");
        butn[0].innerHTML = "";
    }
  }
  
  
  //fonction pour verifier la reponse
  function checkAnswer(btn) {
    if (btn.value === correctAnswer[currQuestionIndex]) {
      score++;
    }
      currQuestionIndex++;
      displayQuestion();
  }
  displayQuestion();
  