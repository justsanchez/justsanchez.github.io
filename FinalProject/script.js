function calculateBMI() {
  let height = parseFloat(document.getElementById("height").value);
  let weight = parseFloat(document.getElementById("weight").value);
  let bmi = (weight / ((height/100) * (height/100))).toFixed(1);

  let result = document.getElementById("result");

  if (isNaN(bmi)) { //if no input is not given
    result.innerHTML = "Please enter valid values for height and weight.";
  } else {
    result.innerHTML = `Your BMI is ${bmi}.`;

    if (bmi < 18.5) {
      result.innerHTML += " You need to add calories to your diet.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.innerHTML += " You have a healthy weight.";
    } else if (bmi >= 25 && bmi <= 29.9) {
      result.innerHTML += " Maintain your calories little better.";
    } else if (bmi >= 30) {
      result.innerHTML += " Consider maintaining your calorie intake";
    }
  }
}

// putting event listeners onto the weight and height inputs for
// the BMI calculator

let weightInput = document.getElementById("weight");

weightInput.addEventListener("focus", function() {
  weightInput.classList.add("highlight");
});

weightInput.addEventListener("blur", function() {
  weightInput.classList.remove("highlight");
});

let heightInput = document.getElementById("height");

heightInput.addEventListener("focus", function() {
  heightInput.classList.add("highlight");
});

heightInput.addEventListener("blur", function() {
  heightInput.classList.remove("highlight");
});

let printBtn = document.getElementById("print-btn");
printBtn.addEventListener("click", () => {
  window.print();
});