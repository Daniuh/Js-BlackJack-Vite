import './blackjack/index.js';
import { renderModal } from './blackjack/presentation/user-configuration/modal-user.js';
import { renderModalAlert } from './blackjack/presentation/user-modal-alert/user-modal-alert.js';
import { modalRecord } from './blackjack/presentation/user-modal-history/user-modal-record.js';
import './style.css';

const element  = document.querySelector('#app');

renderModal(element);
renderModalAlert(element);
modalRecord(element);