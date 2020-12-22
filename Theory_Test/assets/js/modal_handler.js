//   Get the modal
var modal = document.getElementById('logInModal');
var modalOverlay = document.getElementById('modal__overlay');
var modalBody = document.getElementById('modalBody');
// get the button
var loginBtn= document.getElementById('logInBtn');

// function open modal
var openModal = function (){
    modal.classList.add('display-flex');
    modalBody.classList.remove('modal__body--slideDown');
    modalOverlay.classList.remove('modal__overlay--fadeOut');
};
// function close modal
var closeModal = function (){
    modalBody.classList.add('modal__body--slideDown');
    modalOverlay.classList.add('modal__overlay--fadeOut');
    setTimeout(function() {
        modal.classList.remove('display-flex');
    }, 300)
};
