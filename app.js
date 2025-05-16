let round = 0;
let startTime;
let A, B, ans;

function startGame() {
  startTime = performance.now();
  nextQuestion();

  // Add an event listener to the input field to detect the "Enter" key
  document.getElementById('answer').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      submitAnswer();
    }
  });
}

function endGame() {
    A = Math.floor(Math.random() * 10);
    B = Math.floor(Math.random() * 10);
    document.getElementById('question1').textContent = A;
    document.getElementById('question2').textContent = B;
    document.getElementById('answer').value = '';
    document.getElementById('answer').focus();
}

function nextQuestion() {
  if (round >= 3) {
    const endTime = performance.now();
    const timeSpent = (endTime - startTime);
    document.getElementById('question1').textContent = '';
    document.getElementById('question2').textContent = '';
    document.getElementById('equal').textContent = '';
    document.getElementById('plus').textContent = '';
    document.getElementById('result').textContent = 'Game over. Time spent: ' + timeSpent + ' ms';
    document.getElementById('answer').style.display = 'none';
    return;
  } else {
    endGame();
  }
}

function submitAnswer() {
  // Retrieve the user's input and parse it as a number
  ans = parseInt(document.getElementById('answer').value, 10);

  if (ans === A + B) {
    round++;
    nextQuestion();
  } else {
    endGame();
  }
}

// Start the game when the page finishes loading
window.addEventListener('DOMContentLoaded', startGame);
