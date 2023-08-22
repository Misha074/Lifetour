let questionsForm = document.querySelector('.questions__form');
let inputName = questionsForm.querySelector('[type="text"]');
let inputTel = questionsForm.querySelector('[type="tel"]');
let submitButton = questionsForm.querySelector('[type="submit"]');

function resetInputs() {
  inputName.value = '';
  inputTel.value = '';
}

function inputValidate() {
  submitButton.addEventListener('click', () => {
    if (!inputName.value) {
      inputName.classList.add('questions__input--invalid');
    } else {
      inputName.classList.remove('questions__input--invalid');
    }

    if (!inputTel.value) {
      inputTel.classList.add('questions__input--invalid');
    } else {
      inputTel.classList.remove('questions__input--invalid');
    }

    if ((!inputName.value) || (!inputTel.value)) {
      event.preventDefault();
    }

    if ((inputName.value) && (inputTel.value)) {
      setTimeout(resetInputs, 500);
    }


  });

  inputName.oninput = function () {
    inputName.value = inputName.value.replace(/[^a-zA-Zа-яА-Я,' ',-]/g, '');
    if (inputName.value.length < 1) {
      inputName.classList.add('questions__input--invalid');
    } else {
      inputName.classList.remove('questions__input--invalid');
    }
  };

  inputTel.oninput = function () {
    inputTel.value = inputTel.value.replace(/[^0-9,+,(),-]/g, '');
    if (inputTel.value.length < 1) {
      inputTel.classList.add('questions__input--invalid');
    } else {
      inputTel.classList.remove('questions__input--invalid');
    }
  };
}

export {inputValidate};
