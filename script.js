const AllImg = document.querySelectorAll(".inp");
const AllError = document.querySelectorAll(".left");
const AllInput = document.querySelectorAll(".nmp");
// the inputs
const firstName = document.getElementById("Fname");
const lastName = document.getElementById("Lname");
const email = document.getElementById("email");
const passwrd = document.getElementById("password");
const buttonIn = document.getElementById("button");
// ERRORS
const   FnameError = document.querySelector(".fname-val");
const FnameImg   = document.getElementById("Fnameimg");
const LnameError = document.querySelector(".lname-val");
const LnameImg = document.getElementById("Lnameimg");
const EmailError = document.querySelector(".email-val");
const EmailImg = document.getElementById("Emailimg");
const PassError = document.querySelector(".pass-val");
const passImg = document.getElementById("passImg");


console.log(LnameError);
// console.log(LnameImg);

AllInput.forEach(AllInput => {
    AllInput.addEventListener("focusin", function() {
        this.style.border = "1.7px solid var(  --primay-Blue)"
        for (let i = 0; i <  AllImg.length; i++) {
            AllImg[i].style.display = "none";
          }
          for (let i = 0; i < AllError.length; i++) {
            AllError[i].style.color = "#fff"
          }
    });
    AllInput.addEventListener("focusout", function() {
        this.style.border = "1.3px solid #dedede";
    });
});

const FormValidation = (event) => {
    event.preventDefault();
    // GENERAL VALIDATOIN FOR ALL INPUTS
    if(firstName.value.trim() === "" && lastName.value.trim() === "" && email.value.trim() === "" && passwrd.value.trim() === ""){
        for (let i = 0; i <  AllImg.length; i++) {
            AllImg[i].style.display = "block"
          }
          for (let i = 0; i < AllError.length; i++) {
            AllError[i].style.color = "var( --primary-Red)"
          }
          for (let i = 0; i <AllInput.length; i++) {
            AllInput[i].style.border = "1.7px solid var( --primary-Red)"
          }
          return false;
    }else{
        for (let i = 0; i <  AllImg.length; i++) {
            AllImg[i].style.display = "none"
          }
          for (let i = 0; i < AllError.length; i++) {
            AllError[i].style.color = "#fff"
          }
        //  NAME VALIDATION
        const nameRegex = /[A-Za-z]+$/;
        if ( firstName.value.trim() === "") {
            firstName.style.border = "1.7px solid var( --primary-Red)"
            FnameImg.style.display = "block"
            FnameError.style.color ="var( --primary-Red)"
           
          return false;
        } if(!nameRegex.test(firstName.value.trim())){
            firstName.style.border = "1.7px solid var( --primary-Red)"
            FnameImg.style.display = "block"
            FnameError.style.color ="var( --primary-Red)"
            FnameError.textContent = "Contains Invalid characters"

            return false;
        }
        else {
            firstName.style.border = " "
            FnameImg.style.display = "none"
            FnameError.style.color ="#fff"
            FnameError.textContent = "First name cannot be empty"
        }
        // LAST NAME VAL
        if (  lastName.value.trim() === "") {
            lastName.style.border = "1.7px solid var( --primary-Red)"
            LnameError.style.color =" var( --primary-Red)"
            LnameImg.style.display = "block"
          return false;
        } 
        if(!nameRegex.test(lastName.value.trim())){
            lastName.style.border = "1.7px solid var( --primary-Red)"
                LnameImg.style.display = "block"
            LnameError.style.color ="var( --primary-Red)"
            LnameError.textContent = "Contains Invalid characters"

            return false;
        }
        else {
            lastName.style.border = " "
            LnameImg.style.display = "none"
            LnameError.style.color ="#fff"
            LnameError.textContent = "Last name cannot be empty"
        }
          // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
     email.style.border = "1.7px solid var( --primary-Red)"
     EmailImg.style.display = "block"
     EmailError.style.color = "var( --primary-Red)"
     return false;
    } 
    if( !emailRegex.test(email.value.trim())){
        email.style.border = "1.7px solid var( --primary-Red)"
        EmailImg.style.display = "block"
        EmailError.style.color ="var( --primary-Red)"
        EmailError.textContent = "Looks like this is not an email"
        return false;
   } else {
    email.style.border = " "
    EmailImg.style.display = "none"
    EmailError.style.color ="#fff"
    EmailError.textContent = "email name cannot be empty"
  }
    //   PASSWORD VALIDATION
if (passwrd.value.trim() === "") {
    passwrd.style.border = "1.7px solid var( --primary-Red)"
    passImg.style.display = "block"
    PassError.style.color = "var( --primary-Red)"
    return false;
}
if (passwrd.value.length < 6) {
    passwrd.style.border = "1.7px solid var( --primary-Red)"
    passImg.style.display = "block"
    PassError.style.color = "var( --primary-Red)"
    PassError.textContent = "most be a minimum of 6digits "
    return false;
}else{
    passwrd.style.border = " "
    passImg.style.display = "none"
    PassError.style.color = "#fff"
    PassError.textContent = "password cannot be empty"
}
    }
    return true;
}
buttonIn.addEventListener("click", (event) => {
    event.preventDefault();
    let isValid = true;
    if(FormValidation(event) === isValid){
      alert("YOU'VE CLAIMED YOUR FREE TRIAL 🎈🎈")
    }
});

