const emailText = document.querySelector('#user-email-phone');
const btnLogIn = document.querySelector('#button-login');
btnLogIn.addEventListener('click', () => {
  alert(emailText.value);
});

function testRadioChecked () {
  if (document.querySelector('#feminino').checked == false && 
      document.querySelector('#masculino').checked == false &&
      document.querySelector('#personalizado').checked == false) {
        alert('Campos inválidos')
      }
}

const inputsForm = document.querySelectorAll('.validaForm')
document.querySelector('#facebook-register').addEventListener('click', () => {
  testRadioChecked();
  for(let i = 0; i <= inputsForm.length -1; i ++) {
    console.log(inputsForm[i].value)
    if(inputsForm[i].value == '') {
      alert('Campos Inválidos')
    }
  }
})



document.querySelector('#personalizado').addEventListener('focus', enableInputGenderOption)

function enableInputGenderOption () {
  const personalChecked = document.querySelector('#personal')
  personalChecked.setAttribute('type', 'text')
}
