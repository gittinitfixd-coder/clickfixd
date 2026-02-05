const analyzeBtn = document.getElementById('analyzeBtn');
const photoInput = document.getElementById('photoInput');
const resultDiv = document.getElementById('result');

analyzeBtn.addEventListener('click', async () => {
  const file = photoInput.files[0];
  if (!file) {
    alert("Please upload a photo first!");
    return;
  }

  resultDiv.innerHTML = "Analyzing problem...";

  // Placeholder AI response
  resultDiv.innerHTML = `
    <h3>AI Analysis:</h3>
    <p>Problem identified: Leaking pipe under sink</p>
    <h4>Materials Needed:</h4>
    <ul>
      <li>Replacement pipe</li>
      <li>Wrench</li>
      <li>Pipe tape</li>
    </ul>
  `;
});
