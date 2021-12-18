//var activities = document.getElementById("operandChoice");
document.getElementById("operandChoice").addEventListener('click', function(){
    var operandText = document.getElementById("operandChoice"); 
    var operandChoice = operandText.value;
    console.log(operandChoice);
    if(operandChoice == "sqrt"){
        document.getElementById("secondNumDiv").style.display = "none";
    } else {
        
        document.getElementById("secondNumDiv").style.display = "block";
    }
});
document.getElementById("submit").addEventListener('click', function(){

    var num1 = document.getElementById("firstNumber").value;    
    var num2 = document.getElementById("secondNumber").value;  
    operandText = document.getElementById("operandChoice"); 
    operandChoice = operandText.value;
    switch (operandChoice) {  //call the appropriate function
        case "+":
            sum (num1,num2);
            break;
        case "-":
            diff (num1,num2);
            break;
        case "*":
            prod (num1,num2);
            break;
        case "/":
            quot (num1,num2);
            break;
        case "%":
            rem (num1,num2)
            break;
        case ">":
            gt (num1,num2);
            break;
        case "sqrt":
            sRoot (num1)
            break;
        case "power":
            power(num1, num2)
            break;
        } 
    var resultText; //create a variable for the output
    function sum () {
        var add = (Number (num1) + Number (num2)) //calculates sum
        resultText = (num1 + " + " + num2 + " = " + add);
        }
    function diff () { 
            var sub = (Number (num1) - Number (num2))//calculates difference
            resultText =(num1 + " - " + num2 + " = " + sub); 
        }
    function prod () {
            var times = (Number (num1) * Number (num2))//calculates product
            resultText =(num1 + " * " + num2 +" = " + times); 
        }
    function quot () {
            var div = (Number (num1) / Number (num2))//calculates quotient
            resultText =(num1 + " / " + num2 + " = " + div); 
        }
    function rem () {
            var remain = (Number (num1) % Number (num2))//calculates remainder a/b
            resultText = ("The remainder is: " + remain); 
        }
    function gt () {  //calculates if num1 is >, <, or = num2
        if(Number (num1) > Number (num2)) {
            resultText = (num1 + " > " + num2);
        } else if (Number (num2) > Number (num1)){
        resultText = (num2 + " > " + num1);
        } else {            
        resultText = (num2 + " = " + num1);
        }
    }
    function sRoot(num1){ //square root function
        resultText = `&#8730;${num1} = ` + Math.sqrt(num1);
    } 
    function power(num1, num2){ //power function
        resultText = `${num1}<sup>${num2}</sup> = ` + Math.pow(num1,num2);
    }
        document.getElementById("result").innerHTML = resultText;
    
    });    
    
//Make the DIV element draggagle:  https://www.w3schools.com/howto/howto_js_draggable.asp

dragElement(document.getElementById("calcDiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "Header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "Header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}