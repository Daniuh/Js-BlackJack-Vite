import modalHtml from './user-modal-alert.html?raw';
import './user-modal-alert.css';

let modal;

export const showModal = () => {
    modal?.classList.remove('hide-modal-alert');
}

export const hideModal = () => {
    modal?.classList.add('hide-modal-alert');
}

export const renderModalAlert = (element) => {
    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container-alert hide-modal-alert';

    element.append(modal);
}

export const showModalAlert = (whoWinAnswer) => {
    const whoWin = document.querySelector('.whoWin');
    const form   = document.querySelector('.button-modal-alert')

    whoWin.innerText = whoWinAnswer;

    showModal();

    form.addEventListener('click', (event) => {
        event.preventDefault();
        hideModal();
    });
}
