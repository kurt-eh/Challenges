

var buttons = document.getElementsByClassName("clickable");
var numbers = document.getElementsByClassName("number");
var operands = document.getElementsByClassName("operand");
//var calDiv = document.getElementById("calculatorDisplay");
var displayNum = "0"
//displayNum = ;
var calculator = document.getElementById("calculatorDisplay");
var display = document.getElementById("displayValue");
var operand;
var tempOperand;
var temDisplayNum
var posNeg = true;

document.querySelectorAll(".clickable").forEach(item => {item.addEventListener("click",calculatorFunction)});

function calculatorFunction(){ 
    console.log(this.getAttribute("value"));
    document.getElementById("displayValue").innerHTML = this.getAttribute('value') ;
    /*if(this.getAttribute("class") == "number" ){
        tempDisplayNum += this.getAttribute("value"); 
        document.getElementById("displayValue").innerHTML = tempDisplayNum;
    }
    else if (this.getAttribute("value") == "CE"){
        displayNum = "0";
        operand = "";
        tempOperand = "";
    }
    else if (this.getAttribute("class") == operand && this.getAttribute("value") != "+/-"){
        //do calculate the function of the previous operand and make this the current one 
        tempDisplayNumb = "";
        tempOperand=this.getAttribute("value");
    }
    else if (this.getAttribute("value") == "+/-"){
        //tempDisplayNumb *= (-1)

    }*/
}

//document.getElementById("one").addEventListener("click",calculatorFunction);
