const dismiss = document.getElementById("dismiss");
const card = document.getElementById("card");
const thanksCard = document.getElementById("thanks")
const formControl = document.getElementById("formControl")
const email = document.getElementById("email")

subscribe.addEventListener("click", submitForm)
dismiss.addEventListener("click", toggleSuccess)

function toggleSuccess(e) {
    e.preventDefault();
    thanksCard.classList.toggle("success")
    card.classList.toggle("success")
}

function toggleError() {
    formControl.classList.toggle("error")
}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function submitForm(e) {
    e.preventDefault();
    if(email.value.trim() ==="" || !isValidEmail(email.value)) {
        toggleError();
    } else {
        toggleSuccess(e)
    }
}
