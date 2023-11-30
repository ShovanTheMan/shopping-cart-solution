function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);

    let newCaseNumber;

    if(isIncrease === true){
          newCaseNumber = previousCaseNumber + 1;
        }
          else{
            newCaseNumber = previousCaseNumber - 1;
          }

    

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;
      
} 

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

function getTextElementValueById(elementId){
    const caseTotalElement = document.getElementById(elementId);
    const currentCaseTotalString = caseTotalElement.innerText;
    const currentCaseTotal = parseInt(currentCaseTotalString);
    return currentCaseTotal;

}

function calculateSubTotal(){
    const currentCaseTotal = document.getElementById('case-total');
    const currentPhoneTotal = document.getElementById('phone-total-price');
    const currentSubTotal = currentCaseTotal + currentPhoneTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;

}


document.getElementById('btn-case-plus').addEventListener('click', function(){
const newCaseNumber = updateCaseNumber(true);

updateCaseTotalPrice(newCaseNumber);
calculateSubTotal();

})

document.getElementById('btn-case-minus').addEventListener('click', function(){
const newCaseNumber = updateCaseNumber(false);

updateCaseTotalPrice(newCaseNumber);
calculateSubTotal();

})


// document.getElementById('btn-case-minus').addEventListener('click',function(){
//     const caseNumberField = document.getElementById('case-number-field');
//     const caseNumberString = caseNumberField.value;
//     const previousCaseNumber = parseInt(caseNumberString);
//     const newCaseNumber = previousCaseNumber - 1;
//     caseNumberField.value = newCaseNumber;
// })