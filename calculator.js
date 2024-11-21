let content = ""; 
let equation = ""; 

function handleClear() {
    content = "";
    equation = "";
    const oot = document.getElementById('Equation');
    oot.innerHTML = content;
}

function handleClick(value) {
    equation += value;
    content = equation;
    const oot = document.getElementById('Equation');
    oot.innerHTML = content;
}

function handleEvaluate() {
    try {
        content = eval(equation);
        equation = content;
        const oot = document.getElementById('Equation');
        oot.innerHTML = content;
    } catch (error) {
        const oot = document.getElementById('Equation');
        oot.innerHTML = "Error";
    }
}
