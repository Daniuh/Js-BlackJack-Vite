import modalHtml from './user-modal-record.html?raw';
import './user-modal-record.css';

let modal;

export const showModal = () => {
    modal?.classList.remove('hide-modal');
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
}

export const modalRecord = (element) => {
    const button = document.querySelector('#btnRecord');

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';

    element.append(modal);

    button.addEventListener('click', () =>{
        showModal();
    });

    modal.addEventListener('click', (event) => {
        if(event.target.className === 'modal-container' || event.target.className === 'span-x'){
            hideModal();
        }
    });
}