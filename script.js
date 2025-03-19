// Declaracion de variables
const textInput = document.getElementById('text-input');
const makeBtn = document.getElementById('make-btn');
const downloadBtn = document.getElementById('download-btn');
const resetBtn = document.getElementById('reset-btn');
const canvas = document.getElementById('canvas');
const canvasContainer = document.getElementById('canvas-container');
const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();
const year = date.getFullYear();
const today = `${day}/${month}/${year}`;



// funciion que imprime la fecha en el canvas
const printDateOntheCanvas = (cty) => {
    cty.font = "20px Times New Roman";
    cty.fillStyle = "white";
    cty.textAlign = "center";
    cty.fillText(today, 50, 30);
}

const printCodesOntheCanvas = (ctx, index) => {
    const text = makeArray(textInput.value); // sigue siendo un array para usarlo como array
    const textfinal = text[index];
    console.log(textfinal + " Esto es el contenido de textfinal");
    ctx.font = "20px Times New Roman";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(textfinal, 250, 60);
}

// funcion para dibujar la fecha y 1 codigo al canvas
function draw() {
    checkError();
    canvasContainer.innerHTML = '';
    const text = makeArray(textInput.value);
    for (let i = 0; i < text.length; i++) {
        createCanvas(i);
        console.log("Canvas creado " + i);
    }
    textInput.value = '';
    return;
}

// crear mutiples canvas
function createCanvas(i) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext("2d");
    canvas.id = 'canvas';
    const dpr = window.devicePixelRatio || 1;
    canvas.width = 350 * dpr;
    canvas.height = 150 * dpr;
    ctx.scale(dpr, dpr);
    canvasContainer.appendChild(canvas);
    const text = makeArray(textInput.value); // sigue siendo un array para usarlo como array
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    printDateOntheCanvas(ctx);
    printCodesOntheCanvas(ctx, i);
    return;
}

// Funcion para almacenar los codigos
function makeArray(str) {
    let codes = [];
    const strClean = cleanInputString(str);
    for (let i = 0; i < strClean.length; i += 5) {
        codes.push(strClean.slice(i, i + 5));
    }
    return codes;
}

// Funcion para limpiar el string para luego convertirlo en array
function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

// Funcion para resetear el canvas y eliminar los canvas
function resetCanvas() {
    textInput.value = '';
    canvasContainer.innerHTML = '';
}

const checkError = () => {
    if (textInput.value === '' || textInput.value.length < 5) {
        alert('Ingrese al menos 1 codigo de 5 digitos');
        textInput.value = '';
        return;
    }
}
resetCanvas();
// Apartado para addEventListener
resetBtn.addEventListener('click', resetCanvas);
makeBtn.addEventListener('click', draw);
textInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        draw();
    }
});



