import throttle from "lodash.throttle"

let data = JSON.parse(localStorage.getItem("feedback-form-state")) || {}

console.log(localStorage.getItem("feedback-form-state"))

const formRefs = document.querySelector('.feedback-form')

formRefs.addEventListener('input', throttle(saveFormData, 500))
formRefs.addEventListener('submit', sendData)

populateTextArea()

function saveFormData(e) {

     data[e.target.name] = e.target.value

    localStorage.setItem("feedback-form-state", JSON.stringify(data))
    
    console.log('пошла запись в локал');
}

function sendData(e) {
    e.preventDefault();
    e.target.reset()
    localStorage.removeItem("feedback-form-state")
    data = {}

}

function populateTextArea() {
    if (localStorage.getItem("feedback-form-state") !== null){
    const dataFromLocalParced = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (dataFromLocalParced.email){
        formRefs.email.value = dataFromLocalParced.email
    } 
    if (dataFromLocalParced.message){
        formRefs.message.value = dataFromLocalParced.message
    }}ґ
    
}
