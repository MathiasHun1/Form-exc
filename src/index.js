import { 
    validateEmail, validateCountry, 
    validateZip, validatePassword,
    confirmPass } from "./validators"

import { showSuccess } from "./helperFunctions"

const submitButton = document.querySelector('#submit-button')
const emailInput = document.querySelector('#email')
const countryInput = document.querySelector('#country')
const zipInput = document.querySelector('#zip')
const passwordInput = document.querySelector('#password')
const confirmInput = document.querySelector('#confirmpass')

submitButton.addEventListener('click', (event)=> {
    // preventing from submit the form
    event.preventDefault()

    //  Validate each field
    validateEmail()
    validateCountry()
    validateZip()
    validatePassword()
    confirmPass()

    //Add live validation process, after submit button is clicked the first time
    emailInput.addEventListener('keyup', validateEmail)
    countryInput.addEventListener('click', validateCountry)
    zipInput.addEventListener('keyup', validateZip)
    passwordInput.addEventListener('keyup', validatePassword)
    confirmInput.addEventListener('keyup', () => {
        confirmPass(validatePassword())
    })

    if (validateEmail() === true &&
        validateCountry() === true &&
        validateZip() === true &&
        validatePassword() === true &&
        confirmPass() === true) {
            showSuccess()
        }
})




