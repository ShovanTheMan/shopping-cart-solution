document.getElementById('btn-case-plus').addEventListener('click', function(){

const caseNumberField = document.getElementById('case-number-field');
const caseNumberString = caseNumberField.value;
const previousCaseNumber = parseFloat(caseNumberString);
const newCaseNumber = previousCaseNumber + 1;
caseNumberField.value = newCaseNumber;
})

//      const caseNumberField = document.getElementById('case-number-field');
//      const caseNumberFieldString = caseNumberField.value;
//      const previousNumberField = parseFloat(caseNumberFieldString);
//      const newNumberField = previousNumberField + 1;
//      caseNumberField.value = newNumberField; 
// })
