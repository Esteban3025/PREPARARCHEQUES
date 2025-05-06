import {printText, reset, printCode} from './variables.js';

const correobtn = document.getElementById('correo-btn');
const correo = document.getElementById('correo-body');
const resetbtn = document.getElementById('reset-btn');
const id = document.getElementById('id');
const pts = document.getElementById('pts');
const codes = document.getElementById('input');
const span = document.getElementById('code');
const codebtn = document.getElementById('send-code-btn'); 

codes.style.display = "none";
span.style.display = "none";
codebtn.style.display = "none";

function yes() {
    if (id.value == 0 || id.value == undefined || id.value > 1203) {
        alert('Ingrese un codigo SOMOS de un local para continuar!!');
        location.reload();
        return
    }
    codes.style.display = "block";
    span.style.display = "block";
    codebtn.style.display = "block";
    printText(id); 
}   

correobtn.addEventListener('click', yes);
resetbtn.addEventListener('click', reset);
pts.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        yes();
        return;
    }
    return
});
codebtn.addEventListener('click', () => {
    printCode(codes.value, id);
    return
})
