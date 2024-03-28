


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
    }
}

function validateCountry() {
    const countryInput = document.getElementById('country')
    const errorMessage = countryInput.nextElementSibling

    if (['hun', 'ro', 'slo'].includes(countryInput.value)) {
        errorMessage.textContent = 'valid'
        errorMessage.style.color = 'green'
        showValidIcon(countryInput)
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
    } else if (!isValid) {
        hideValidIcon(element)
    }

    return element.value
}

function confirmPass(passwordInput) {
    const confirmElem = document.querySelector('#confirmpass')
    const errorMessage = confirmElem.nextElementSibling
    if (confirmElem.value === passwordInput && confirmElem.value === '') {
        errorMessage.textContent = ''
        hideValidIcon(confirmElem)
    } else if (confirmElem.value === passwordInput) {
        errorMessage.textContent = 'OK'
        errorMessage.style.color = 'green'
        showValidIcon(confirmElem)
    } else if (confirmElem.value !== passwordInput) {
        errorMessage.textContent = 'passwords not the same!'
        errorMessage.style.color = 'red'
        hideValidIcon(confirmElem)
    } 
}



// Helper functions
function showValidIcon(element) {
    const validIcon = element.parentElement.querySelector('#valid-icon')
    validIcon.classList.add('active')
}

function hideValidIcon(element) {
    const validIcon = element.parentElement.querySelector('#valid-icon')
    validIcon.classList.remove('active')
}

function showPassReqs (input) {
    //pattern and elements
    const digitPattern = /.*\d.*\d.*/
    const lettersPattern = /.*[A-Z].*[A-Z]/
    const sizePattern = /.{8,}/
    const digitReqElem = document.querySelector('#digits-req')
    const lettersReqElem = document.querySelector('#uppers-req')
    const sizeReqElem = document.querySelector('#length-req')

    //reveal reqs list
    const reqsList = document.querySelector('#reqs')
    reqsList.style.display = 'block'

    //update state of each sub-reqs
    digitPattern.test(input) ? digitReqElem.style.color = 'green' : digitReqElem.style.color = 'red'
    lettersPattern.test(input) ? lettersReqElem.style.color = 'green' : lettersReqElem.style.color = 'red'
    sizePattern.test(input) ? sizeReqElem.style.color = 'green' : sizeReqElem.style.color = 'red'
}

export { validateEmail, validateCountry, validateZip, validatePassword, confirmPass }