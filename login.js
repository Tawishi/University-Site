const alert = document.querySelector('.alert')
const form = document.querySelector('.login-form')
const username = document.getElementById('username');
const year = document.getElementById('year');
const rno = document.getElementById('rno');

// *******  EVENT LISTENERS  ******//
form.addEventListener('submit', validateForm);


// *******  FUNCTIONS  ******//
// validating form input
function validateForm(e) {
    e.preventDefault();

    // make-shift id for data
    const id = new Date().getTime().toString();

    const data = document.forms['loginForm'];
    const name = data['username'].value;
    const year = data['year'].value;
    const rno = data['rno'].value;

    const name_filter = /^[A-Z]?[a-z]*$/;

    if (!name_filter.test(name)) {
        displayAlert("Enter a valid name", 'danger');
    }
    // form submitted
    else {
        addToLocalStorage(id, rno);
        setCookie("username",name);
        setCookie("year",year);
        displayAlert("Query submitted! We will get back to you.", 'success');
        setBackToDefault();
    }
}

// show validation alerts
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // to remove the alert
    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000)
}

// set back to default
// pseudo submit form
function setBackToDefault() {
    username.value = "";
    year.value = "";
    rno.value = "";
}

/** COOKIE STORAGE **/
// set cookie value
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
} I


/** LOCAL STORAGE **/
function getLocalStorage() {
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}

// add to local storage
function addToLocalStorage(id, rno) {
    const data = { id, rno }
    let rnos = getLocalStorage();
    rnos.push(data)
    localStorage.setItem("list", JSON.stringify(rnos));
}