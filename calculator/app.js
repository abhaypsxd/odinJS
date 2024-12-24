function operate(num1, num2, operator) {
    if(operator=="x"){
        return num1*num2;
    }
    else if(operator=="-"){
        return num1-num2;
    }
    else if(operator=="+"){
        return num1+num2;
    }
    else{
        if(num2==0)return "Can't divide by 0!"
        return num1/num2;
    }
}

const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const add = document.querySelector("#add");
const subtract = document.querySelector("#subtract");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equal = document.querySelector("#equal");
const clear = document.querySelector("#clear");
const data = document.querySelector("#data");


data.textContent="";

function typeNumber(num){
    data.textContent+=num;
}

let num1;
let num2;
let temp_num="";
let operator;
let isSecond = false;

one.addEventListener("click",()=>{
    typeNumber("1");
    temp_num+="1";
});
two.addEventListener("click",()=>{
    typeNumber("2");
    temp_num+="2";
});
three.addEventListener("click",()=>{
    typeNumber("3");
    temp_num+="3";
});
four.addEventListener("click",()=>{
    typeNumber("4");
    temp_num+="4";
});
five.addEventListener("click",()=>{
    typeNumber("5");
    temp_num+="5";
});
six.addEventListener("click",()=>{
    typeNumber("6");
    temp_num+="6";
});
seven.addEventListener("click",()=>{
    typeNumber("7");
    temp_num+="7";
});
eight.addEventListener("click",()=>{
    typeNumber("8");
    temp_num+="8";
});
nine.addEventListener("click",()=>{
    typeNumber("9");
    temp_num+="9";
});
zero.addEventListener("click",()=>{
    typeNumber("0");
    temp_num+="0";
});
add.addEventListener("click",()=>{
    typeNumber("+");
    operator="+";
    num1=parseInt(temp_num);
    temp_num="";
});
subtract.addEventListener("click",()=>{
    typeNumber("-");
    operator="-";
    num1=parseInt(temp_num);
    temp_num="";
});
multiply.addEventListener("click",()=>{
    typeNumber("x");
    operator="x";
    num1=parseInt(temp_num);
    temp_num="";
});
divide.addEventListener("click",()=>{
    typeNumber("/");
    operator="/";
    num1=parseInt(temp_num);
    temp_num="";
});
clear.addEventListener("click",()=>{
    data.textContent="";
    num1=0;
    num2=0;
    temp_num="";
    operator="";
});
equal.addEventListener("click",()=>{
    num2=parseInt(temp_num);
    temp_num="";
    console.log(num1,num2,operator)
    let ans = operate(num1,num2,operator);
    num1=ans;
    data.textContent=ans.toString();
    
})