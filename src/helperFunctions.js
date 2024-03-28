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

function showSuccess() {
    const formElement = document.querySelector('.container')
    const success = document.querySelector('.success')
    formElement.style.display = 'none'
    success.style.display = 'block'
}

export { showValidIcon, hideValidIcon, showPassReqs, showSuccess }