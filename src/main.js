import './blackjack/index.js';
import { renderModal } from './blackjack/presentation/user-configuration/modal-user.js';
import './style.css';

const element = document.querySelector('#app');

renderModal(element);