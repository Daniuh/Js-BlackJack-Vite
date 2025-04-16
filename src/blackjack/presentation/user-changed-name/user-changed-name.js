import modalHtml from './user-changed-name.html?raw';
import './user-changed-name.css';

let modal, btnChanged;

export const showModalChanged = () => {
    modal?.classList.remove('hide-modal-changed');
}

export const hideModalChanged = () => {
    modal?.classList.add('hide-modal-changed');
    btnChanged?.reset();
}


export const renderModalChangedName = (element) => {
    const btnChangedName = document.querySelector('#btnCambiarName');
    const nameUserH1 = document.querySelector('.nameUserH1');

    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container-changed hide-modal-changed';

    btnChanged = modal.querySelector('form');

    element.append(modal);

    modal.addEventListener('click', (event) => {
        if (event.target.className === 'modal-container-changed' || event.target.className === 'spanX') {
            hideModalChanged();
        }
    });

    btnChangedName.addEventListener('click', () => {
        showModalChanged();
    });

    btnChanged.addEventListener('submit', (event) => {
        event.preventDefault();

        if (validarName() === false) return;

        const formData = new FormData(btnChanged);
        //console.log(formData.get('nameUserChanged'));
        const name = formData.get('nameUserChanged');
        nameUserH1.innerText = name;
        localStorage.setItem('nameUser', name);
        hideModalChanged();
    });

    btnChanged.querySelector('#nameUserChanged').addEventListener('input', () => {
        const errorText = document.getElementById('error');
        errorText.textContent = '';
    });
}

const validarName = () => {
    const nameUser  = modal.querySelector('#nameUserChanged');
    const errorText = modal.querySelector('#error');
    

    if (nameUser.value.trim() === "") {
        errorText.textContent = 'Este campo no puede estar vacío';
        return false;
    }

    errorText.textContent = '';
    return true;
}

