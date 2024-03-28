import { validateEmail, validateCountry, validateZip } from "./validators"

const submitButton = document.querySelector('#submit-button')
const emailInput = document.querySelector('#email')
const countryInput = document.querySelector('#country')
let clickCounter = 0

submitButton.addEventListener('click', (event)=> {
    // preventing from submit the form
    event.preventDefault()

    //  Validate each field
    validateEmail()
    validateCountry()
    validateZip()
    // validatePassword()
    // validatePassCheck()
    clickCounter++
})

// emailInput.addEventListener('keyup', ()=> {
//     if (clickCounter > 0) {
//         validateEmail()
//     }
// })

// countryInput.addEventListener('blur', () => {
//     validateCountry()
// })


