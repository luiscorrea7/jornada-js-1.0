import { formData } from './js/utils/formData.utils.js';
import { getUsersByEmail } from './js/utils/requestUser.utils.js';
const formulario = document.getElementById('loginForm');

const login = async (e) => {
  e.preventDefault();
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const inputs = document.querySelectorAll('#loginForm input');
  const button = document.querySelector('btn');
  const data = formData(e);
  console.log(data);
  try {
    const [user] = await getUsersByEmail(data.email);
    if (user) {
      location.href('/index.html');
    } else {
      alert('Usuario no registrado');
    }
  } catch (error) {
    console.log(error);
  }
};

formulario.addEventListener('submit', login);
