

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
    if (selectedValue === "Refund Calculator") {
      window.location.href = "../index.html";
    } else {
      // Handle other options if needed
      window.location.href = "../index.html";
    }
}
function calculateWarranty(){
    const inputEl1= new Date (document.getElementById("delivery-date").value);
    const inputEl2 = new Date (document.getElementById("warranty-claim-date").value);
    const condEl = document.getElementById("validity-period").value;
    const eMsg = document.getElementById("errorMsg");
    const warranty_difference = inputEl2.getTime() - inputEl1.getTime();
    const warrantyValue = warranty_difference/(1000*3600*24);
   
    if(warrantyValue > condEl){
    outputEl.innerHTML= " ";
    eMsg.innerHTML= " Warranty Expired! ";
 } else if(inputEl1 >= inputEl2){
        outputEl.innerHTML= " ";
        eMsg.innerHTML= " Invalid Entry! ";
}else if(isNaN(condEl-warrantyValue)){
   outputEl.innerHTML= " ";
   eMsg.innerHTML= " ";
}else{
   outputEl.innerHTML =  (condEl-warrantyValue) + " days left for warranty to expire";
   eMsg.innerHTML= " ";
}

}


submitEl.addEventListener('click', calculateWarranty);

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

    
