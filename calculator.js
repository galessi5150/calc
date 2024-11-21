let content = ""; 
let equation = ""; 
let oot = document.getElementById('Equation'); 

function handleClear() {
    content = "";
    equation = "";
    oot.innerHTML = content;  
}

function handleClick(value) {
    equation += value;
    content = equation;
    oot.innerHTML = content; 
}

function handleEvaluate() {
    try {
        content = eval(equation);  
        equation = content;
        oot.innerHTML = content; 
    } catch (error) {
        oot.innerHTML = "Error"; 
    }
}

