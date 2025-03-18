const textInput = document.getElementById('text-input');
const makeBtn = document.getElementById('make-btn');
const downloadBtn = document.getElementById('download-btn');
const resetBtn = document.getElementById('reset-btn');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function draw() {
    const ctx = canvas.getContext("2d");
    canvas.width = 350;
    const x = canvas.width / 2;

    ctx.font = "1rem Times New Roman";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Hola mundo", x, 30);
}

draw();


