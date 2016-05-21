

function validate() {
    var enteredEmail = document.getElementById("email").value;
    var enteredName = document.getElementById("username").value;
    var enteredTel = document.getElementById("phone").value;
    var enteredMessage = document.getElementById("message").value;
    if (enteredName === "") {
        document.getElementById("wrongNameAlert").innerHTML = "Please enter your name";
        document.getElementById("username").focus()
        return false;
    }

    if (enteredTel === "" && enteredEmail === "") {
        document.getElementById("wrongEmailAlert").innerHTML = "Please enter email or phone number";
        document.getElementById("email").focus();
        return false;
    }
    if (enteredEmail === "" && !(enteredTel.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/))) {
        document.getElementById("wrongPhoneAlert").innerHTML = "Please enter valid phone number";
        document.getElementById("phone").focus();
        return false;
    }
    if (!(enteredEmail.match(/([\w\-]+\@[\w\-]+\.[\w\-]+)/)) && enteredTel === "") {
        document.getElementById("wrongEmailAlert").innerHTML = "Please enter valid email address";
        document.getElementById("email").focus();
        return false;
    }
    if ((enteredEmail !== "" && (!(enteredEmail.match(/([\w\-]+\@[\w\-]+\.[\w\-]+)/)))) && (enteredTel !== "" && !(enteredTel.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)))) {
        document.getElementById("wrongEmailAlert").innerHTML = "Please enter valid email or phone number";
        document.getElementById("email").focus();
        return false;
    }

    if (enteredMessage === "") {
        document.getElementById("wrongMessageAlert").innerHTML = "Please enter your message";
        document.getElementById("message").focus();
        return false;
    }
}