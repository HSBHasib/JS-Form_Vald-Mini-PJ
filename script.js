let form = document.querySelector("form");
let input = document.querySelectorAll("input");

form.addEventListener("submit", function(dets) {
    dets.preventDefault();

    // Validation Code Start here...
    const name = document.querySelector("#username");
    const email = document.querySelector("#email");
    const pass = document.querySelector("#password");
    const phone = document.querySelector("#phone");
    const checkBox = document.querySelector("#terms");
    const dropdown = document.querySelector("#position");
    
    const nameReg = /^(?=.*[A-Z])(?=.*\d).{3,}$/;
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const phoneReg = /^(?:\+88|88)?(01[3-9]\d{8})$/;


    if(!nameReg.test(name.value)) {
        alert("NameError, Invalid Username");
        return;
    }

    if(!emailReg.test(email.value)) {
        alert("EmailError, Invalid email address");
        return;
    }
    if(!passReg.test(pass.value)) {
        alert("PassError, Invalid password setUp");
        return;
    }

    if(!phoneReg.test(phone.value)) {
        alert("PhoneNumberError, Invalid phone number");
        return;
    }
    
    if(dets.target[4].value === "#") {
        alert("Please, select you postions");
        return;
    }

    if(dropdown.value === "#") {
        alert("Please, select you postions");
        return;
    }

    if(!checkBox.checked) {
        alert("Error: Please agree to the conditions first!");
        return;
    } 
    

    form.reset();
});