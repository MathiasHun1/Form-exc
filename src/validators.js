


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

    
}





function showValidIcon(element) {
    const validIcon = element.parentElement.querySelector('#valid-icon')
    validIcon.classList.add('active')
}

function hideValidIcon(element) {
    const validIcon = element.parentElement.querySelector('#valid-icon')
    validIcon.classList.remove('active')
}

export { validateEmail, validateCountry, validateZip }