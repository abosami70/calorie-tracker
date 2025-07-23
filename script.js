const form = document.getElementById("meal-form");
const nameInput = document.getElementById("meal-name");
const calInput = document.getElementById("meal-calories");
const list = document.getElementById("meal-list");
const remaining = document.getElementById("remaining");

let total = 2000;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const mealName = nameInput.value;
  const mealCalories = parseInt(calInput.value);

  const li = document.createElement("li");
  li.textContent = `${mealName} - ${mealCalories} سعرة`;

  list.appendChild(li);

  total -= mealCalories;
  remaining.textContent = total;

  nameInput.value = "";
  calInput.value = "";
});