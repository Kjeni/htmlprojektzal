let isCalculating = false;
const button = document.querySelector('#button');

function calculateBMR(weight, height, age, gender) {
  if (gender === 'male') {
    return 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
} else if (gender === 'female') {
    return 655 + (9.6 * weight) + (1.8 * height) - (4.7 * age);
}}
function calculateCaloricIntake(activityLevel, BMR) {
    if (activityLevel === 'sedentary') {
      return BMR * 1.2;
    } else if (activityLevel === 'lightly active') {
      return BMR * 1.375;
    } else if (activityLevel === 'moderately active') {
      return BMR * 1.55;
    } else if (activityLevel === 'very active') {
      return BMR * 1.725;
    } else if (activityLevel === 'extra active') {
      return BMR * 1.9;
    }
  }
  
  const calculateCaloricIntakeFunction = function() {
    if (isCalculating) return;
    isCalculating = true;
  
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const activityLevel = document.getElementById('activity-level').value;
  
    const BMR = calculateBMR(weight, height, age, gender);
    const caloricIntake = calculateCaloricIntake(activityLevel, BMR);
    document.getElementById('result').innerHTML = `Your caloric intake should be ${caloricIntake} calories.`;
  };
  
button.addEventListener('click', calculateCaloricIntakeFunction);
const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', function() {
    document.getElementById('form').reset();
});