const steps = document.querySelectorAll('.step');
const stepNumbers = document.querySelectorAll('.step__number');
const stepNames = document.querySelectorAll('.step__name');
const bar = document.querySelector('.bar');

let generalProgress = 0;

function listenEachStepClick() {
  stepNumbers.forEach((stepNumber, index) => {
    stepNumber.addEventListener('click', () => {
      updateGeneralProgress(index);
      updateStepsUI(index);
      updateProgressBar(generalProgress);
    });
  });
}

function updateGeneralProgress(progress) {
  generalProgress = progress + 1;
}

function updateStepsUI(index) {
  steps.forEach((step, stepIndex) => {
    const isActive = stepIndex <= index;

    stepNumbers[stepIndex].classList.toggle('step__number--active', isActive);
    stepNames[stepIndex].classList.toggle('step__name--active', isActive);
  });
}

function updateProgressBar(progress) {
  bar.value = (progress / steps.length) * 100;
}

document.addEventListener('DOMContentLoaded', listenEachStepClick);
