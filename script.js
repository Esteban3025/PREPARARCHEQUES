// Declaracion de variables
const textInput = document.getElementById('text-input');
const makeBtn = document.getElementById('make-btn');
const downloadBtn = document.getElementById('download-btn');
const resetBtn = document.getElementById('reset-btn');
const canvas = document.getElementById('canvas');
const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();
const year = date.getFullYear();
const today = `${day}/${month}/${year}`;

// funciion que imprime la fecha en el canvas
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
    const text = makeArray(textInput.value); // sigue siendo un array para usarlo como array
    const finalText = text.join(' '); // convie1rte el array en texto para imprimirlo en el canvas
    console.log(text);

    ctx.font = "1rem Times New Roman";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(finalText, x, 30);

    printDateOntheCanvas();
    textInput.value = '';
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

// Funcion para resetear el canvas
function resetCanvas() {
    const ctx = canvas.getContext("2d");
    textInput.value = '';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

const checkError = () => {
    if (textInput.value === '' || textInput.value.length < 5) {
        alert('Ingrese al menos 1 codigo de 5 digitos');
        return;
    }
    draw();
}

// Apartado para addEventListener
resetBtn.addEventListener('click', resetCanvas);
makeBtn.addEventListener('click', checkError);
textInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkError();
    }
});



