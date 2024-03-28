import { showValidIcon, hideValidIcon, showPassReqs } from "./helperFunctions"


function validateEmail() {
    const emailInput = document.getElementById('email')
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const errorMessage = emailInput.nextElementSibling
    let isValid = emailPattern.test(emailInput.value)

    if (emailInput.value === '') {
        errorMessage.textContent = 'email is required'
        errorMessage.style.color = 'red'
        hideValidIcon(emailInput)
    } else if (!isValid && emailInput.value !== '') {
        errorMessage.textContent = 'Use valid email adress!'
        errorMessage.style.color = 'red'
        hideValidIcon(emailInput)
    } else if (isValid) {
        errorMessage.textContent = 'valid'
        errorMessage.style.color = 'green'
        showValidIcon(emailInput)
        return true
    }
}

function validateCountry() {
    const countryInput = document.getElementById('country')
    const errorMessage = countryInput.nextElementSibling

    if (['hun', 'ro', 'slo'].includes(countryInput.value)) {
        errorMessage.textContent = 'valid'
        errorMessage.style.color = 'green'
        showValidIcon(countryInput)
        return true
    } else if (countryInput.value === 'none') {
        errorMessage.textContent = 'choose your country!'
        errorMessage.style.color = 'red'
        hideValidIcon(countryInput)
    }
}

function validateZip() {
    const zipPattern = /^\d{4}$/
    const zipInput = document.querySelector('#zip')
    const errorMessage = zipInput.nextElementSibling
    let isValid = zipPattern.test(zipInput.value)

    if (zipInput.value === '') {
        errorMessage.textContent = 'Zip is required'
        errorMessage.style.color = 'red'
        hideValidIcon(zipInput)
    } else if (!isValid && zipInput.value !== '') {
        errorMessage.textContent = 'Zip must be four numbers!'
        errorMessage.style.color = 'red'
        hideValidIcon(zipInput)
    } else if (isValid) {
        errorMessage.textContent = 'valid'
        errorMessage.style.color = 'green'
        showValidIcon(zipInput)
        return true
    }
}

function validatePassword() {
    const pattern = /^(?=.*[A-Z].*[A-Z])(?=.*\d.*\d).{8,}$/
    const element = document.querySelector('#password')
    let isValid = pattern.test(element.value)

    showPassReqs(element.value)

    if (element.value === '') {
        hideValidIcon(element)
    } else if (isValid) {
        showValidIcon(element)
        return true
    } else if (!isValid) {
        hideValidIcon(element)
    }
}

function confirmPass() {
    const passwordElem = document.querySelector('#password')
    const confirmElem = document.querySelector('#confirmpass')
    const errorMessage = confirmElem.nextElementSibling
    if (confirmElem.value === passwordElem.value && confirmElem.value === '') {
        errorMessage.textContent = ''
        hideValidIcon(confirmElem)
    } else if (confirmElem.value === passwordElem.value) {
        errorMessage.textContent = 'OK'
        errorMessage.style.color = 'green'
        showValidIcon(confirmElem)
        return true
    } else if (confirmElem.value !== passwordElem.value) {
        errorMessage.textContent = 'passwords not the same!'
        errorMessage.style.color = 'red'
        hideValidIcon(confirmElem)
    } 
}


export { validateEmail, validateCountry, validateZip, validatePassword, confirmPass }

