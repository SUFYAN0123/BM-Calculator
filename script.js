function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
  const bmi = weight / (height * height);
  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `Your BMI is ${bmi.toFixed(1)}`;
}
