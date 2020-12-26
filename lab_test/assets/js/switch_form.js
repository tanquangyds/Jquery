var chosenRegister = document.getElementById('chosenRegister');
var chosenLogin = document.getElementById('chosenLogin');
var form1 = document.getElementById('form-1');
var form2 = document.getElementById('form-2');
var buttonReg = document.querySelector('.button__register');
var buttonLog = document.querySelector('.button__login');
chosenLogin.onclick = function() {
    form2.classList.add('display__block');
    form1.classList.remove('display__block');
    buttonLog.classList.add('form__active');
    buttonReg.classList.remove('form__active');
}
chosenRegister.onclick = function() {
    form1.classList.add('display__block');
    form2.classList.remove('display__block');
    buttonLog.classList.remove('form__active');
    buttonReg.classList.add('form__active');
}
