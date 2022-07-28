const alert = document.querySelector('.alert')
const form = document.querySelector('.query-form')
const fname = document.getElementById('name');
const email = document.getElementById('email');
const contact = document.getElementById('contact');
const query = document.getElementById('query')


// *******  EVENT LISTENERS  ******//
form.addEventListener('submit', validateForm);


// *******  FUNCTIONS  ******//
// validating form input
function validateForm(e) {
    e.preventDefault();

    const data = document.forms['queryForm'];
    const name = data['name'].value;
    const email = data['email'].value;
    const contact = data['contact'].value;
    const query = data['query'].value;

    const name_filter = /^[A-Z]?[a-z]*$/;
    const email_filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const contact_filter = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    const query_filter = /^[a-zA-Z]*$/;

    if (!name_filter.test(name)) {
        displayAlert("Enter a valid name", 'danger');
    }

    else if (!email_filter.test(email)) {
        displayAlert("Enter valid email", 'danger')
    }

    else if (!contact_filter.test(contact)) {
        displayAlert("Enter valid contact", 'danger');
    }

    else if (!query || !query_filter.test(query)) {
        displayAlert("Enter a valid query. Alphabets only",'danger');
    }

    // form submitted
    else {
        displayAlert("Query submitted! We will get back to you.",'success');
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
    fname.value = "";
    email.value = "";
    contact.value = "";
    query.value = "";
}