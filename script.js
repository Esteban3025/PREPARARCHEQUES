// Declaracion de variables
const textInput = document.getElementById('text-input');
const makeBtn = document.getElementById('make-btn');
const downloadBtn = document.getElementById('download-btn');
const resetBtn = document.getElementById('reset-btn');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();
const year = date.getFullYear();
const today = `${day}/${month}/${year}`;


const printDateOntheCanvas = () => {
    const cty = canvas.getContext("2d");
    cty.font = "1rem Times New Roman";
    cty.fillStyle = "white";
    cty.textAlign = "center";
    cty.fillText(today, 50, 30);
}

// funcion para dibujar los codigos en el canvas
function draw() {
    const ctx = canvas.getContext("2d");
    canvas.width = 350;
    const x = canvas.width / 2;
    const text = printCodes();

    ctx.font = "1rem Times New Roman";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(text, x, 30);

    printDateOntheCanvas();
    textInput.value = '';
}

// Funcion para imprimir los codigos
const printCodes = () => {
    // let codes = [];
    // codes.push(cleanInputString(textInput.value));
    return cleanInputString(textInput.value);
}

// Funcion para limpiar el string para luego convertirlo en array
function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

// Funcion para resetear el canvas
function resetCanvas() {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    printDateOntheCanvas();
}

// Apartado para addEventListener
resetBtn.addEventListener('click', resetCanvas);
makeBtn.addEventListener('click', draw);
textInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        draw();
    }
});



