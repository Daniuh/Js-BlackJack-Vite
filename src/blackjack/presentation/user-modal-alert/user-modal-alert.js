import './user-modal-alert.css';
import modalHtml from './user-modal-alert.html?raw';

let modal;

export const showModal = () => {
    modal?.classList.remove('hide-modal');
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
}

export const renderModalAlert = (element) => {
    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';

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
