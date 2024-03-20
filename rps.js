const options = ['rock', 'paper', 'scissors'];

document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', () => {
    const playerChoice = option.id;
    const computerChoice = options[Math.floor(Math.random() * options.length)];

    const result = getResult(playerChoice, computerChoice);
    displayResult(playerChoice, computerChoice, result);
  });
});

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

function displayResult(playerChoice, computerChoice, result) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <p>You chose <strong>${playerChoice}</strong>.</p>
    <p>Computer chose <strong>${computerChoice}</strong>.</p>
    <h2>${result}</h2>
  `;
}
