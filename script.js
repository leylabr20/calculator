function clearScreen() {
    document.getElementById("display").value = "";
    setPoint = false;
    number1;
    number2;
}
let btnNumber = document.querySelectorAll('.btn-number')


let btnDiv = document.querySelector('#btn-div');
let btnMinus = document.querySelector('#btn-minus');
let btnPlus = document.querySelector('#btn-plus');
let btnPoint = document.querySelector('#btn-point');
let btnEquls = document.querySelector('#btn-equls');
let btnMul = document.querySelector('#btn-mul');
let btnSin = document.querySelector('#btn-sin');
let btnCos =document.querySelector('#btn-cos');
let btnTan = document.querySelector('#btn-tan');
let btnPow=document.querySelector('#btn-pow');

let setPoint = false;
let number1, number2, result;
let op = "";

btnNumber.forEach((item) => {
    item.addEventListener('click', (e) => {
        display.value += e.target.value;
    })
});

btnPoint.addEventListener('click', (e) => {
    if (setPoint == false) {
        display.value += ".";
        setPoint = true;
    }
});

btnPlus.addEventListener('click', (e) => {
    number1 = Number(display.value);
    display.value = "";
    op = "+";
});

btnMinus.addEventListener('click', (e) => {
    number1 = Number(display.value);
    display.value = "";
    op = "-";
});

btnMul.addEventListener('click', (e) => {
    number1 = Number(display.value);
    display.value = "";
    op = "*";
});

btnDiv.addEventListener('click', (e) => {
    number1 = Number(display.value);
    display.value = "";
    op = "/";
});
btnSin.addEventListener('click',(e)=>{
   number1 = Number(display.value);
    display.value = "";
    op = "sin";
})
btnCos.addEventListener('click',(e)=>{
    number1 = Number(display.value);
     display.value = "";
     op = "cos";
 })
 btnTan.addEventListener('click',(e)=>{
    number1 = Number(display.value);
    display.value = "";
    op="tan";
 }) 
 btnPow.addEventListener('click',(e)=>{
    number1 = Number(display.value);
    display.value = "";
    op="pow";
 })


btnEquls.addEventListener('click', (e) => {
    calculate(display.value)
})
 
let res=document.getElementById('display');

 function calculate(value){

    number2 = Number(value);

    switch (op) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
         case "sin":
            result  = Math.sin(number1*Math.PI/180);
            break;
         case "cos":
                result = Math.cos(number1*Math.PI/180);
                break;
        case "tan":
                result = Math.tan(number1*Math.PI/180);
                break;
       case "pow":
            result = Math.pow(number1,number2);
           break;
    }
    display.value=result;
 
          if (isNaN(display.value )){
        res.value="can`t divide 0 with 0 ";
         setTimeout(()=>{
             res.value="" ;             
         },1300);
    
     }
     else{
        
     }
    }

document.addEventListener("keydown",keyboardInputHandler);
function keyboardInputHandler(e){

 
   if(isNaN(e.key))  
   e.preventDefault();
   switch(e.key)
   {
   case "+":
    number1=Number(display.value);
     display.value="";
    op="+"
    break; 
   
   case "-":
    number1=Number(display.value);
    display.value="";
    op="-"
    break;

   case "*":
    number1=Number(display.value);
    display.value="";
    op="*"
      break;


   case "/":
     number1=Number(display.value);
      display.value="";
     op="/"
      break;
  
   case "Delete":
    number1=0;
    display.value="";
    op="";
    break;


    case "s":
         number1=Number(display.value);
         display.value="";
         op="sin";
         calculate(number1);
         break;
 
     case "c":
        number1=Number(display.value);
        display.value="";
        op="cos";
        calculate(number1);
        break;

     case "t":
         number1=Number(display.value);
         display.value="";
         op="tan";
         calculate(number1);
         break;

     case "p":
        number1=Number(display.value);
        display.value="";
        op="pow";
        break;
         
    case "Backspace":
        const resultInput=res.value;
        res.value=resultInput.substring(0,res.value.length-1)
        break;

        case "Enter":
            calculate(display.value);

   default:
   break;
   }
}
   
