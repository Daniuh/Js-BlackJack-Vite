import modalHtml from './user-modal-record.html?raw';
import './user-modal-record.css';

let modal;

export const showModal = () => {
    modal?.classList.remove('hide-modal-record');
}

export const hideModal = () => {
    modal?.classList.add('hide-modal-record');
}

export const modalRecord = (element) => {
    const button     = document.querySelector('#btnRecord');
    
    modal = document.createElement('div');
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container-record hide-modal-record';

    element.append(modal);

    button.addEventListener('click', () =>{
        if(!sessionStorage.getItem('counterUser') && !sessionStorage.getItem('counterComputer')){
            sessionStorage.setItem('counterUser', 0);
            sessionStorage.setItem('counterComputer', 0);
        }

        const userRecord = modal.querySelector('.nameUserRecord');
        const nameUserR = localStorage.getItem('nameUser');
        userRecord.innerText = nameUserR;
        counterModal();
        showModal();
    });

    modal.addEventListener('click', (event) => {
        if(event.target.className === 'modal-container-record' || event.target.className === 'spanX'){
            hideModal();
        }
    });
}

const counterModal = () => {
    const counterUserR     = document.querySelector('.counterUserR');
    const counterComputerR = document.querySelector('.counterComputerR');

    counterUserR.innerText     = sessionStorage.getItem('counterUser');
    counterComputerR.innerText = sessionStorage.getItem('counterComputer');
}