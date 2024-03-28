import { 
    validateEmail, validateCountry, 
    validateZip, validatePassword,
    confirmPass } from "./validators"

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
    confirmPass(validatePassword())

    //Add live validation process, after submit button is clicked the first time
    emailInput.addEventListener('keyup', validateEmail)
    countryInput.addEventListener('click', validateCountry)
    zipInput.addEventListener('keyup', validateZip)
    passwordInput.addEventListener('keyup', validatePassword)
    confirmInput.addEventListener('keyup', () => {
        confirmPass(validatePassword())
    })
})




