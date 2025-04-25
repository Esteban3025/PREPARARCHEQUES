// Declaracion de variables
const textInput = document.getElementById('text-input');
const makeBtn = document.getElementById('make-btn');
const downloadBtn = document.getElementById('download-btn');
const resetBtn = document.getElementById('reset-btn');
const canvas = document.getElementById('canvas');
const canvasContainer = document.getElementById('canvas-container');
const lengthValue = document.getElementById('length-value');
const length = document.getElementById('length');
const image = document.getElementById('img');
const date = new Date();
const month = date.getMonth() + 1;
const day = date.getDate();
const year = date.getFullYear();
const today = `${day}/0${month}/${year}`;
let make = false;

length.style.display = "none";

// funciion que imprime la fecha en el canvas
const printDateOntheCanvas = (cty) => {
    cty.font = "530 24px Calibri";
    cty.fillStyle = "black";
    cty.textAlign = "center";
    cty.fillText(today, 1020, 119);
}

//Funcion para crear dinamicamente los codigos
const printCodesOntheCanvas = (ctx, textfinal) => {
    ctx.font = "530 24px Calibri";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(textfinal, 1130, 60);
}

// funcion para dibujar en el canvas
function draw() {
    checkError();
    make = true;
    canvasContainer.innerHTML = '';
    text = makeArray(textInput.value);
    for (let i = 0; i < text.length; i++) {
        let textfinal = text[i];
        createCanvas(i, textfinal);
    }
    textInput.value = '';
    return;
}

// crear mutiples canvas
function createCanvas(i, textfinal) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    canvas.id = 'canvas';
    canvas.width = 1280;
    canvas.height = 525;

    canvasContainer.appendChild(canvas);
    for (i; i < makeArray(textInput.value).length; i++) {
        background(ctx, img, textfinal, canvas, i);
    }
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
    lengthValue.innerText = "";
    length.style.display = "none";
    canvasContainer.innerHTML = '';
}


//funcion para comprobar errores
const checkError = () => {
    if (textInput.value === '' || textInput.value.length < 5) {
        alert('Ingrese al menos 1 codigo de 5 digitos');
        textInput.value = '';
        return;
    }
    printlength();
}

// funcion que imprime en la pantalla el numero de canvas creados
const printlength = () => {
    lengthValue.innerText = makeArray(textInput.value).length;
    length.style.display = "block";
}

//Funcion para usar la imagen de los cheques en el canvas
function background(ctx, img, textfinal, canvas, i) {
    img.crossOrigin = "anonymous"; 
    img.src = "URL_DE_LA_IMAGEN";
    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        printDateOntheCanvas(ctx);
        printCodesOntheCanvas(ctx, textfinal);
    }
    img.src = "img/cheque.JPG";
}

// Funcion para descargar todos los canvas
const download = () => {
    if (!make) {
        alert("Crea unos cheques primero");
        return
    };
    const canvases = canvasContainer.querySelectorAll("canvas");
    canvases.forEach((canvas, index) => {
        const image = canvas.toDataURL("image/png");
        console.log(image);
        const link = document.createElement("a");
        link.href = image;
        link.download = `chequeSomos ${index}.png`;
        link.click();
    });
    make = false;
};


// Apartado para addEventListener
downloadBtn.addEventListener('click', () => download(canvas));
resetBtn.addEventListener('click', resetCanvas);
makeBtn.addEventListener('click', draw);
textInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        draw();
    }
});