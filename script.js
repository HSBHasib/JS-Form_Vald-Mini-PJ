let form = document.querySelector("form");
let input = document.querySelectorAll("input");

// // Validation Code Start here...
//     const nm = document.querySelector("#username");
//     const email = document.querySelector("#email");
//     const pass = document.querySelector("#password");
//     const phone = document.querySelector("#phone");
//     const checkBox = document.querySelector("#terms");
//     const dropdown = document.querySelector("#position");
//     const small = document.querySelectorAll("small");

form.addEventListener("submit", function(dets) {
    dets.preventDefault();

    // // Validation Code Start here...
    const name = document.querySelector("#username");
    const email = document.querySelector("#email");
    const pass = document.querySelector("#password");
    const phone = document.querySelector("#phone");
    const checkBox = document.querySelector("#terms");
    const dropdown = document.querySelector("#position");
    const small = document.querySelectorAll("small");

    // In Initial stage hide all the error. 
    for(let sml of small) {
        sml.style.visibility = "hidden";
    }
    
    const nameReg = /^(?=.*[A-Z])(?=.*\d).{3,}$/;
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const phoneReg = /^(?:\+88|88)?(01[3-9]\d{8})$/;


    
    if(!nameReg.test(name.value)) {
        small[0].textContent = "'Name must have a Capital letter and a Number.'";
        small[0].style.visibility = "visible";
        return;
    } else {
        name.addEventListener("input", function(){
            if(nameReg.test(name.value)) {
                small[0].style.visibility = "hidden";
            }
        })
    }

    if(!emailReg.test(email.value)) {
        small[1].textContent = "'EmailError: Enter a valid email address.'";
        small[1].style.visibility = "visible";
        return;
    } else {
        email.addEventListener("input", function(){
            if(emailReg.test(email.value)) {
                small[1].style.visibility = "hidden";
            }
        })
    }
    
    if(!passReg.test(pass.value)) {
        small[2].textContent = "'Password must be 8+ chars with Big, Small letters & Number.'";
        small[2].style.visibility = "visible";
        return;
    } else {
        pass.addEventListener("input", function(){
            if(passReg.test(pass.value)) {
                small[2].style.visibility = "hidden";
            }
        })
    }

    if(!phoneReg.test(phone.value)) {
        small[3].textContent = "'Enter a valid Bangladeshi number.'";
        small[3].style.visibility = "visible";
        return;
    } else {
        phone.addEventListener("input", function(){
            if(phoneReg.test(phone.value)) {
                small[3].style.visibility = "hidden";
            }
        })
    }
    
    if(dropdown.value === "#") {
        small[4].textContent = "'Please, select you postions'";
        small[4].style.visibility = "visible";
        return;
    } else {
        dropdown.addEventListener("input", function(){
            if(dropdown.value !== "#") {
                small[4].style.visibility = "hidden";
            }
        })
    }

    if(!checkBox.checked) {
        small[5].textContent = "'Error: Please agree to the conditions first!'";
        small[5].style.visibility = "visible";
        return;
    } else {
        checkBox.addEventListener("input", function(){
            if(checkBox.test(checkBox.checked)) {
                small[5].style.visibility = "hidden";
            }
        })
    }

    form.reset();
});
