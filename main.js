function validateForm() {
    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
    let email = document.forms["myForm"]["email"].value;
    let password = document.forms["myForm"]["password"].value;
    var passLength = password.length;
    let RePass = document.forms["myForm"]["re-password"].value;

    var status = document.getElementById("status");

    let alertFname = document.getElementById("alert-fname");
    let alertLname = document.getElementById("alert-lname");
    let alertEmail = document.getElementById("alert-email");
    let alertPassword = document.getElementById("alert-password");
    let alertRePassword = document.getElementById("alert-repassword");

    // let i = 0;

    alertFname.innerHTML = "";
    alertLname.innerHTML = "";
    alertEmail.innerHTML = "";
    alertPassword.innerHTML = "";
    alertRePassword.innerHTML = "";

    document.getElementById('fname').style.border = '2px solid yellowgreen';
    document.getElementById('lname').style.border = '2px solid yellowgreen';
    document.getElementById('email').style.border = '2px solid yellowgreen';
    document.getElementById('password').style.border = '2px solid yellowgreen';
    document.getElementById('re-password').style.border = '2px solid yellowgreen';

    var mailformat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // while (fname == "" || lname == "" || email == "" || (email == "" || !email.match(mailformat)) && password == "" && RePass != password) {



    if (fname == "") {
        alertFname.innerHTML = "First name Required";
        document.getElementById('fname').style.border = '2px solid red';
    }

    if (lname == "") {
        alertLname.innerHTML = "Last name Required";
        document.getElementById('lname').style.border = '2px solid red';
    }

    if (email == "" || email == null) {
        alertEmail.innerHTML = "Email Required";
        document.getElementById('email').style.border = '2px solid red';
    }

    if (email !== "" && !email.match(mailformat)) {
        alertEmail.innerHTML = "Email is invalid";
        document.getElementById('email').style.border = '2px solid red';
    }

    if (password == "") {
        alertPassword.innerHTML = "Password Required";
        document.getElementById('password').style.border = '2px solid red';
    }

    if (RePass == "" || RePass !== password) {
        alertRePassword.innerHTML = "Confirm Password";
        document.getElementById('re-password').style.border = '2px solid red';
        return false;

    }

    if (fname != "" && lname != "" && (email != "" && email.match(mailformat)) && (RePass != "" && RePass == password)) {
        alert("Form Submitted");
        return true;
    }
    else {
        return false;
    }

}


// if (fname != "" && lname != "" && email != "" && (email != "" && email.match(mailformat)) && password == "" && (RePass != "" && RePass == password)) {
//     status.innerHTML = "Thank You";
//     return true;
// }

