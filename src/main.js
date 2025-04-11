import './blackjack/index.js';
import { renderModal } from './blackjack/presentation/user-configuration/modal-user.js';
import { renderModalAlert } from './blackjack/presentation/user-modal-alert/user-modal-alert.js';
import './style.css';

const element  = document.querySelector('#app');
const element1 = document.querySelector('#app2');

renderModal(element);
renderModalAlert(element1);