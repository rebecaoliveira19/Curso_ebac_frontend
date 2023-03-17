const form = document.getElementById('form');
const username = document.getElementById('username');
const campoA = document.getElementById('number');
const campoB = document.getElementById('numero');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs()

});

function checkInputs() {

    const usernameValue = username.value.trim()
    const campoAValue = campoA.value.trim()
    const campoBValue = campoB.value.trim()
    
    if (username.value === '') {
        errorValidation(username, 'Isto esta ivalido')
        
    } else {
        successValidation(username)
    } 
    if (campoA.value === '') {
        errorValidation(campoA, 'Isto esta ivalido')
        
    }else {
        successValidation(campoA)
    }
    if(campoB.value === ''){
        errorValidation(campoB, 'Isto esta ivalido')
    } else {
        successValidation(campoB)
    }
}

function errorValidation(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function successValidation(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    const small = formControl.querySelector('small');
    small.innerText = '';
}