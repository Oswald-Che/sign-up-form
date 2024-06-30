function match(){
  const password = document.querySelector('#password');
  const confirmPassword = document.querySelector('#confirm-password');
  const container = document.querySelector('.password-container')
  if (password.value !== confirmPassword.value){
    password.setCustomValidity("Invalid field.");
    confirmPassword.setCustomValidity("Invalid field.");
    const error = document.createElement('div')
    container.appendChild(error)
    error.textContent = '*Passwords do not match'
    error.classList.add('error')
    return false ;
  }
  return true;
}

const password = document.querySelector('#password');
password.addEventListener('keydown', (e) =>{
  console.log(e);
})