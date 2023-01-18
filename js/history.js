const histories = document.getElementById("histories");

function addHistory(questionText, timeTaken, typeSpeed, errorCount) {
  // unnecessary code removed

  let previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];
  previousTests.push({ questionText, timeTaken, typeSpeed, errorCount });
  localStorage.setItem("testHistory", JSON.stringify(previousTests));

  displayHistory();
}

function displayHistory() {
  histories.innerHTML = "";
  const previousTests = JSON.parse(localStorage.getItem("testHistory")) || [];

  for (let i = previousTests.length - 1; i >= 0; i--) {
    const newRow = document.createElement("div");
    newRow.classList.add("card");

    newRow.innerHTML = `
  <h3>${previousTests[i].questionText}</h3>
    <p>You took : <span class="bold orange">${previousTests[i].timeTaken}</span> seconds</p>
    <p>Speed : <span class="bold green">${previousTests[i].typeSpeed}</span> letters / second</p>
    <p>You made <span class="bold red">${previousTests[i].errorCount}</span> mistakes</p>
  `;

    histories.appendChild(newRow);
  }
}
