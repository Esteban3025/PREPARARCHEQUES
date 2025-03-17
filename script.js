const btn = document.getElementById('btn');
const codeInput = document.getElementById('code-input');
const resultText = document.getElementById('result-text');
const deleteBtn = document.getElementById('delete-btn');
const result = document.getElementById('result');
const fecha = document.getElementById('date');
const fileInput = document.getElementById('file');
const imgPreview = document.getElementById('img-preview');
const reader = new FileReader();
let count = 0;
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const today = `${day}/${month}/${year}`;
fecha.innerText += " " + today;


const printResult = () => {
    if (codeInput.value === '') {
        alert('Ingrese un código');
        count = 0;
        return;
    }
    count++;
    if (count > 1) {
        alert('Solo se puede enviar un código');
        codeInput.value = '';
        return;
    }
    const code = codeInput.value;
    const cleanCode = cleanInputString(code);
    const codigos = [];
    
    for (let i = 0; i < cleanCode.length; i+= 5) {
        if (cleanCode.length < 5) {
            window.alert('No se puede enviar un código menor a 5 dígitos');
            deleteResult();
            return;
        }
        codigos.push(cleanCode.slice(i, i + 5));
    };

    resultText.innerText = codigos.join(' ');
    
    for (let i = 0; i < codigos.length; i++) {
        console.log(codigos[i]);
    }
    codeInput.value = '';
}

function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

const deleteResult = () => {
    codeInput.value = '';
    resultText.innerText = '';
    count = 0; 
}

codeInput.addEventListener("keydown", (e) => {
    if (e.key === 'Enter') {
        printResult();
    };
});


function handleEvent(event) {
    if (event.type === "load"){
        imgPreview.src = reader.result;
    };
}

function addListeners(reader) {
    reader.addEventListener("loadstart", handleEvent);
    reader.addEventListener("load", handleEvent);
    reader.addEventListener("loadend", handleEvent);
    reader.addEventListener("progress", handleEvent);
    reader.addEventListener("error", handleEvent);
    reader.addEventListener("abort", handleEvent);
}

function handleSelected(e) {
    eventLog.textContent = "";
    const selectedFile = fileInput.files[0];
    if (selectedFile) {
      addListeners(reader);
      reader.readAsDataURL(selectedFile);
    }
}

file.addEventListener("change", handleSelected);
btn.addEventListener('click', printResult);
deleteBtn.addEventListener('click', deleteResult);
