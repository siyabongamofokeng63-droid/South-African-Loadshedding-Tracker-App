const API_KEY = "YOUR_API_KEY_HERE";

function checkSchedule() {
  const area = document.getElementById("area").value;
  const stageSelect = document.getElementById("stage");
  const stage = stageSelect.value;
  const result = document.getElementById("result");

  if (area === "" || stage === "") {
    result.innerHTML = "Please enter your area and stage.";
    result.classList.add("active");
    return;
  }

  let message = "";
  let critical = false;

  if (stage == 1) {
    message = "Your area may experience outages twice a day.";
  } else if (stage == 2) {
    message = "Your area may experience outages up to 3 times a day.";
  } else if (stage == 3) {
    message = "Expect frequent power cuts today.";
  } else if (stage >= 4) {
    message = "Severe loadshedding expected today!";
    critical = true; // highlight critical stages
  }

  result.innerHTML = `
    <h3>${area}</h3>
    <p class="${critical ? "stage-critical" : ""}">Loadshedding Stage: ${stage}</p>
    <p>${message}</p>
  `;

  // Add animation class
  result.classList.remove("active");
  void result.offsetWidth; // Trigger reflow for restart animation
  result.classList.add("active");
}