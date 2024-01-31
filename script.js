const firstName = document.getElementById("name");
const lastName = document.getElementById("Lname");
const Email = document.getElementById("email");
const Password = document.getElementById("password");
const Everyinp = document.querySelectorAll(".nmp");


Everyinp.forEach(Everyinp => {
    Everyinp.addEventListener("focusin", function() {
        this.style.border = "1px solid var(  --primay-Blue)"
    });
    Everyinp.addEventListener("focusout", function() {
        this.style.border = "1.3px solid #dedede";
    });
});

// Everyinp.forEach(element => {
    
// });
// ONCLICK HOVERING
