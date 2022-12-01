import throttle from "lodash.throttle"

let data = {}

const formRefs = document.querySelector('.feedback-form')

formRefs.addEventListener('input', throttle(saveFormData, 500))
formRefs.addEventListener('submit', sendData)

populateTextArea()

function saveFormData(e) {

     data[e.target.name] = e.target.value

    console.log(data);
    
    // data['email'] = formEl.email.value,
    // data['message'] = formEl.message.value
    
    localStorage.setItem("feedback-form-state", JSON.stringify(data))
    console.log('пошла запись в локал');
}

function sendData(e) {
    e.preventDefault();
    e.target.reset()
        localStorage.setItem("feedback-form-state", "")

}

function populateTextArea() {

    const dataFromLocalParced = JSON.parse(localStorage.getItem("feedback-form-state"));
    
    if (dataFromLocalParced) {
        formRefs.email.value = dataFromLocalParced.email
        formRefs.message.value = dataFromLocalParced.message
    }

}
