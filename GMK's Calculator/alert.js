

//.........My Project........//

//....Disabling mouce click...//
document.addEventListener('contextmenu', 
     event => event.preventDefault()
);

const submitEl = document.getElementById("submit");
const outputEl = document.getElementById("result");
const eMsg = document.getElementById("errorMsg");


function redirectToPage(selectElement) {
   const selectedValue = selectElement.value;
   if (selectedValue === "Warranty Calculator") {
     window.location.href = ".//WARRANTY CALCULATOR/index.html";
   } else {
     // Handle other options if needed
     window.location.href = ".//WARRANTY CALCULATOR/index.html";
   }
 }
function calculateRefund(){
    const inputEl1= document.getElementById("total-amount").value;
    const inputEl2 = document.getElementById("shipping-fees").value;
    const inputEl3 = document.getElementById("other-deductables").value;

    const eMsg = document.getElementById("errorMsg");

    const extras_sum = parseFloat(inputEl2) + parseFloat(inputEl3);
    const refundValue = inputEl1 - extras_sum;

    function isFloat(number) {
      return !Number.isInteger(number);
    }

    function roundToTwoDecimalPlaces(number) {
      return Number(number.toFixed(2));
    }
   
    if(isNaN(refundValue)){
    outputEl.innerHTML= " ";
    eMsg.innerHTML= " ";
 }else if(inputEl2 < 0 || inputEl1 < 0 || inputEl3 < 0){
   outputEl.innerHTML= " ";
   eMsg.innerHTML= " Entry in field(s) cannot be negative";
}else if(refundValue <= 0 ){
   outputEl.innerHTML= " ";
   eMsg.innerHTML= "Please check field (s) for error";
} else if(inputEl2 === " " || inputEl1 === " " || inputEl3 === " " ){
    outputEl.innerHTML= " ";
    eMsg.innerHTML= " ";
 } else if(isFloat(refundValue)){
   outputEl.innerHTML = " The customer is eligible for a refund of " + roundToTwoDecimalPlaces(refundValue) ;
   eMsg.innerHTML= " ";
}else{
   outputEl.innerHTML = " The customer is eligible for a refund of " + refundValue ;
   eMsg.innerHTML= " ";
}

}


submitEl.addEventListener('click', calculateRefund);


const form = document.getElementById('form-section');


    form.addEventListener('submit', function(event) {
        event.preventDefault();});

        const clearButton = document.getElementById('clear-form');
    
    clearButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        form.reset(); // Reset the form to clear all fields
        outputEl.textContent = '';
        eMsg.textContent = '';
    });

    
    
