let boton = document.getElementById("regBtn");
boton.addEventListener("click", validateForm);

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function validateForm() {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let password1 = document.getElementById("password1").value;
    let password2 = document.getElementById("password2").value;
    let terminos = document.getElementById("terminos").checked;
    let validacion = true;


    if (nombre == "" || apellido == "" || email == "" || password1 == "" || password2 == "") {
        validacion = false;
    }

    if (password1.length <= 6) {
        validacion = false;
    }

    if (password1 !== password2) {
        validacion = false;
    }

    if (terminos == false) {
        validacion = false;
    }

    if (validacion == true) {
        showAlertSuccess();
    } else {
        showAlertError();
    }
}