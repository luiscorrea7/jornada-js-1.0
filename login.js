const email = document.getElementById('email');
const password = document.getElementById('password');
const formulario = document.getElementById('loginForm');
const button = document.querySelector('btn');

const validateForm = () => {
  if (email == '' && password == '') {
    alert('completa los campos requeridos');
  }
};

const getData = () => {
  const datos = new FormData(formulario);
  const datosCompletos = Object.fromEntries(datos.entries());
  console.log(datosCompletos);
  formulario.reset();
  return datosCompletos;
};

button.addEventListener('submit', (e) => {
  e.preventDefault();
});
