import { IsValid } from "./validation/Isvalid.js";

const queryElements = {
    weight: document.querySelector('#weight'),
    height: document.querySelector('#height'),
    btn: document.querySelector('button'),
    result: document.querySelector('.result-input'),
    weightError: document.querySelector('.wrapper-error-weight'),
    heightError: document.querySelector('.wrapper-error-height')
}

queryElements.btn.addEventListener('click', () => {
    let isError = false;

    queryElements.result.innerHTML = '';
    queryElements.weightError.innerHTML = '';
    queryElements.heightError.innerHTML = '';

    if (IsValid.weight(queryElements.weight.value)[0]) {
        queryElements.weightError.innerHTML = IsValid.weight(queryElements.weight.value)[1];
        isError = true;
    }
    if (IsValid.height(queryElements.height.value)[0]) {
        queryElements.heightError.innerHTML = IsValid.height(queryElements.height.value)[1];
        isError = true;
    }

    if (!isError) {
        const bmi = (queryElements.weight.value / queryElements.height.value / queryElements.height.value * 10000).toFixed(2);
        queryElements.result.innerHTML = bmi;
    }
})