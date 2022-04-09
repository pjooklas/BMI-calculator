const queryElements = {
    weight: document.querySelector('#weight'),
    height: document.querySelector('#height'),
    btn: document.querySelector('button'),
    result: document.querySelector('.result-input')
}

queryElements.btn.addEventListener('click', () => {
    queryElements.result.innerHTML = '';
    const bmi = (queryElements.weight.value / queryElements.height.value / queryElements.height.value * 10000).toFixed(2);
    queryElements.result.innerHTML = bmi;
})