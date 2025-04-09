import modalHtml from './modal-user.html?raw';
import './modal-user.css';

let modal, form;

export const showModal = () => {
    modal?.classList.remove('hide-modal');
}

export const hideModal = () => {
    modal?.classList.add('hide-modal');
    form?.reset();
}

export const renderModal = (element) => {
    if(modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';

    form = modal.querySelector('form');

    showModal();

    /* modal.addEventListener('click', (event) => {
        if(event.target.className === 'modal-container'){
            hideModal();
        }
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(form);

        hideModal();
    }); */

    element.append(modal);
}