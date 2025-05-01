let num1,num2,result;

function getValues(){
    const val1 = document.getElementById('value1').value;
    // console.log(typeof(val1));
    const val2 = document.getElementById('value2').value;

    if(val1===''|val2===''||
        isNaN(val1)||isNaN(val1)){
            alert('Please valid numbers in both fields');
            throw new Error('Invalid input');
    }
    num1 = Number(val1);
    num2 = Number(val2);
}
function displayResult(value){
    document.getElementById('result').value = value;
}
function addition(){
    getValues();
result = num1 + num2;
displayResult(result);
}
function subtraction(){
    getValues();
 result = num1 - num2;
 displayResult(result);
}
function multiplication(){
    getValues();
    result = num1 * num2;
    displayResult(result);
}
function divition(){
    getValues();
    if(num2 == 0){
        displayResult('Cannot Divide by Zero');
        return;
    }
    result = num1 / num2;
    displayResult(result);
}