console.log("Hello world")

let displayValue = "";



//Basics Operations
function sumNum(x,y=0) {
  return x+y;
}

function subsNum(x,y=0) {
  return x-y;
}

function multNum(x,y) {
  return x*y;
}

function divNum(x,y) {

  return x/y;
}


// Operator

function operate() {
  
}


//Not use the eval() function
// Also not use new Function()


const numButton = document.getElementsByClassName("calc-num");
const opButton = document.getElementsByClassName("calc-op");
const display = document.getElementById("display-screen")
const acButton = document.getElementsByClassName("calc-ac")[0];
const resultButton = document.getElementById("calc-result");
// numButton[0].addEventListener("click", ()=> {
//   displayValue+=numButton[0].textContent;
//   console.log(displayValue);
// })


function printDisplay() {
  display.textContent=displayValue;
}

for (let i of numButton) {
  i.addEventListener("click", ()=>{
    displayValue+=i.textContent;
    console.log(displayValue);
    printDisplay();
  })
}

for (let i of opButton) {
  i.addEventListener("click", ()=>{
    if (displayValue.includes("/") || displayValue.includes("*") || displayValue.includes("-") || displayValue.includes("+")) {
      console.log("operación debe realizarse");
      operate(displayValue);
      //incluir función que realiza la operación ya terminada;
    }
    console.log("aqui continua")
    displayValue+=i.textContent;
    console.log(displayValue);
    printDisplay();
  })
}

acButton.addEventListener("click", ()=> {
  displayValue="";
  console.log(displayValue);
  printDisplay();
  
})




function operate(x) {
  if (x.includes("/")) {
    const opNums = x.split("/");
    displayValue = divNum(parseFloat(opNums[0]),parseFloat(opNums[1]));
  } else if (x.includes("*")) {
    
    const opNums = x.split("*");
    displayValue = multNum(parseFloat(opNums[0]),parseFloat(opNums[1]));

  } else if (x.includes("-")) {
    const opNums = x.split("-");
    displayValue = subsNum(parseFloat(opNums[0]),parseFloat(opNums[1]));
  } else {
    const opNums = x.split("+");
    displayValue = sumNum(parseFloat(opNums[0]),parseFloat(opNums[1]));
  }
  printDisplay();
}


resultButton.addEventListener("click", ()=> {
  if (displayValue.includes("/") || displayValue.includes("*") || displayValue.includes("-") || displayValue.includes("+")) {
    console.log("operación debe realizarse");
    operate(displayValue);
    //incluir función que realiza la operación ya terminada;
  }
  // if (displayValue != "") {
  //   operate(displayValue);
  //   // displayValue=" ";
  // }

})

/* 
for ()

numButton.forEach( (x) => {

  x.addEventListener("click", (numero)=> {
  console.log(numero);

}


}); */







//Calc number
