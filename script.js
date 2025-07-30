const voteForm = document.getElementById('voteForm');
const resultsDiv = document.getElementById('results');

// Object to store vote counts
const voteCounts = {
  Alice: 0,
  Bob: 0,
  Charlie: 0
};

voteForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const selected = document.querySelector('input[name="candidate"]:checked');
  if (selected) {
    const candidate = selected.value;
    voteCounts[candidate]++;
    showResults();
  } else {
    alert("Please select a candidate before submitting.");
  }
});

function showResults() {
  resultsDiv.innerHTML = `
    <h2>Current Results:</h2>
    <ul>
      <li>Alice: ${voteCounts.Alice} votes</li>
      <li>Bob: ${voteCounts.Bob} votes</li>
      <li>Charlie: ${voteCounts.Charlie} votes</li>
    </ul>
  `;
}
const voteButton = document.querySelector('button[type="submit"]');

voteButton.addEventListener('mouseenter', function () {
  const role = roleSelect.value;
  const candidateValue = candidateSelect.value;

  if (role && candidateValue) {
    voteButton.textContent = 'Ready to Vote!';
    voteButton.style.backgroundColor = '#4CAF50';
    voteButton.style.color = 'white';
  } else {
    voteButton.textContent = 'Vote';
    voteButton.style.backgroundColor = '';
    voteButton.style.color = '';
  }
});

voteButton.addEventListener('mouseleave', function () {
  voteButton.textContent = 'Vote';
  voteButton.style.backgroundColor = '';
  voteButton.style.color = '';
});