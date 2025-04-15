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
    const nameUserH1 = document.querySelector('.nameUserH1');

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';

    form = modal.querySelector('form');

    element.append(modal);

    showModal();

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if(validarName() === false) return;
                
        const formData = new FormData(form);
        //console.log(formData.get('nameUser'));
        const name = formData.get('nameUser');
        nameUserH1.innerText = name;
        localStorage.setItem('nameUser', name);
        hideModal();
    });

    form.querySelector('#nameUser').addEventListener('input', () => {
        const errorText = document.getElementById('error');
        errorText.textContent = '';
    });
}

const validarName = () => {
    const nameUser  = document.getElementById('nameUser');
    const errorText = document.getElementById('error');

    if (nameUser.value.trim() === "") {
        errorText.textContent = 'Este campo no puede estar vacío';
        return false;
    }

    errorText.textContent = '';
    return true;
}
