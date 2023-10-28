import { formData } from './js/utils/formData.utils.js';
const formulario = document.getElementById('loginForm');

const login = (e) => {
  e.preventDefault();
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const inputs = document.querySelectorAll('#loginForm input');
  const button = document.querySelector('btn');
  const data = formData(e);
  console.log(data);
};

formulario.addEventListener('submit', login);
