/*
************************
### GLOBAL VARIABLES ###
************************
*/

var timeout;
var form = document.getElementById('form')
var fullName = document.getElementById('fullName')
var email = document.getElementById('email')
var age = document.getElementById('age')
var subject = document.getElementById('subject')
var message = document.getElementById('message')

/*
************************
  ### FUNCTIONS ###
************************
*/

function formError(input, message) {
    let formControl = input.parentElement;
    let small = formControl.querySelector('small')
    small.innerText = message
    formControl.className = 'form-control error'
  }
  
  function formSuccess(input) {
    let formControl = input.parentElement;
    formControl.className = 'form-control success'
  }
  
  function clearForm(){
    alert("Thanks for contacting us. Your form has been sent successfully.")
    formControl = fullName.parentElement;
    formControl.className = 'form-control clear'
    formControl = email.parentElement;
    formControl.className = 'form-control clear'
    formControl = age.parentElement;
    formControl.className = 'form-control clear'
    formControl = subject.parentElement;
    formControl.className = 'form-control clear'
    formControl = message.parentElement;
    formControl.className = 'form-control clear'
    document.getElementById('form').value='';
    document.getElementById('fullName').value='';
    document.getElementById('email').value='';
    document.getElementById('age').value='';
    document.getElementById('subject').value='';
    document.getElementById('message').value='';
    sum = 0;
  }

/*
************************
  ### CONTACT MENU ###
************************
*/

form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkInputs()
  })
  
  function checkInputs() 
  {
    let sum = 0;
    let fullNameValue = fullName.value.trim()
    let emailValue = email.value.trim()
    let ageValue = age.value.trim()
    let subjectValue = subject.value.trim()
    let messageValue = message.value.trim()
    
    if(fullNameValue === '') {
      formError(fullName, 'Please fill in this field') // show error and change to erro class
    }  
    else {
      formSuccess(fullName) // change to success class
      sum ++;
    }
    
    if(emailValue === '') {
      formError(email, 'Please fill in this field') // show error and change to erro class
    }
    else {
      formSuccess(email) // change to success class
      sum ++;
    }
    
    if(ageValue === '') {
      formError(age, 'Please fill in this field') // show error and change to erro class
    }
    else if(ageValue < 18) { 
      formError(age, 'You must be 18 years or older to contact us.')
    } 
    else {
      formSuccess(age) // change to success class
      sum ++;
    }
    
    if(subjectValue === '') {
      formError(subject, 'Please fill in this field') // show error and change to erro class
    }
    else {
      formSuccess(subject) // change to success class
      sum ++;
    }
    
    if(messageValue === '') {
      formError(message, 'Please fill in this field') // show error and change to erro class
    }
    else {
      formSuccess(message) // change to success class
      sum ++;
    }
  
    if (sum === 5){
      timeout = setTimeout(clearForm(), 200);
    }
  
  }