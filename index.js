const FORM = document.getElementById("rating-form");
const THANK_SECTION = document.getElementById("thank-section");
const VALUE_RATE = document.getElementById("rate");
let selectedValue;

function send() {
    selectedValue = document.querySelector('input[type="radio"]:checked');
    if(!selectedValue) return;
    else {
        VALUE_RATE.innerHTML = selectedValue.value;
        FORM.hidden = true;
        THANK_SECTION.hidden = false;        
    }
}