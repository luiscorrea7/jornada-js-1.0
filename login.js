const loginUser = (e) => {
  e.preventDefault();
  const messageForm = document.getElementById('message');
  // messageForm.textContent = '';

  const formData = getFormData(e);

  const userExist = users.find((user) => user.email === formData.email);
  if (!userExist) {
    return (messageForm.textContent = messages.userNotExist);
  }
  if (
    userExist.email === formData.email &&
    userExist.password === formData.password
  ) {
    const userToJson = JSON.stringify(userExist);
    localStorage.setItem('userLog', userToJson);
    window.location.href = './registrado.html';
  } else {
    messageForm.textContent = messages.emailOrPasswordBad;
  }
};

document
  .getElementById('loginForm')
  .addEventListener('submit', loginUser, false);
