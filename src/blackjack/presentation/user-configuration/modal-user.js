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

    const nameUserH1 = document.querySelector('.nameUserH1');

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';

    form = modal.querySelector('form');

    showModal();

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(form);
        //console.log(formData.get('nameUser'));
        nameUserH1.innerText = formData.get('nameUser');
        hideModal();
    });

    element.append(modal);
}
