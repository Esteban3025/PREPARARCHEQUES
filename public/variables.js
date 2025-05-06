import { locales } from './datos/locales.js';
const correo = document.getElementById('correo-body');
let nume = new AutoNumeric('#pts',{decimalCharacter: ',', decimalPlaces: 0, digitGroupSeparator: '.'});
let count = 0;
let codesArray = [];
let printCodigos = "";
let trys = false;

export default function printText(id) {
    const num = nume.getNumber();
    const codigo = id.value;
    const codigoSomos = (codigoSomos) => codigoSomos.id === codigo;
    
    const puntos = pts.value;
    const cheques = Math.floor(num / 250000);

    const idCorrecto = locales.findIndex(codigoSomos);
    const local = locales[idCorrecto];

    const nombreDelLocal = local.ndl;
    const nombredelPropietario = local.ndp;
    const ciudad = local.ciudad;
    const direccion = local.direccion;
    let text = "cheques";

    if (local == undefined) {
            alert('Este local no existe');
            reset();
            return
        }
        if (cheques < 1) {
            alert('Puntos insuficientes para continuar..');
            reset();
            return
        }
        if (count === 1) {
            alert('Ya creaste un correo, resetea para eliminarlo');
            reset();
        }
        if (cheques == 1) {
            text = "cheque";
        }
    if (trys) {
        correo.innerHTML = ``;
        correo.innerHTML += `<p>Buenas Señora Melissa.</p>
    </br>
    <p>El cliente con ficha <strong>N° ${codigo}</strong> cuenta a la fecha con <strong>${puntos}</strong> puntos, solicita <strong>${cheques}</strong> ${text} SOMOS.</p>
    </br>
    <p>CÓDIGOS OTORGADOS:</p>
    </br>
    ${printCodigos}
    <br></br>
    <p>Sus datos son:</p>
    </br>
    <p>NOMBRE DEL LOCAL: ${nombreDelLocal.toUpperCase()}</p>
    </br>
    <p>NOMBRE DEL PROPIETARIO: ${nombredelPropietario.toUpperCase()}</p>
    </br>
    <p>RUC/C.I.: ${local.ruc}</p>
    </br>
    <p>CIUDAD: ${ciudad.toUpperCase()}</p>
    </br>
    <p>DIRECCIÓN: ${direccion.toUpperCase()}</p>
    </br>
    <p>CEL.: ${local.telefono}</p>
    </br>
    <p>Saludos</p>
    </br>
    <p><em>Esteban Galeano</em></p>
    `;
    trys = false;
    } else {
        correo.innerHTML += `<p>Buenas Señora Melissa.</p>
    </br>
    <p>El cliente con ficha <strong>N° ${codigo}</strong> cuenta a la fecha con <strong>${puntos}</strong> puntos, solicita <strong>${cheques}</strong> ${text} SOMOS.</p>
    </br>
    <p>CÓDIGOS OTORGADOS: </p>
    <br></br>
    <p>Sus datos son:</p>
    </br>
    <p>NOMBRE DEL LOCAL: ${nombreDelLocal.toUpperCase()}</p>
    </br>
    <p>NOMBRE DEL PROPIETARIO: ${nombredelPropietario.toUpperCase()}</p>
    </br>
    <p>RUC/C.I.: ${local.ruc}</p>
    </br>
    <p>CIUDAD: ${ciudad.toUpperCase()}</p>
    </br>
    <p>DIRECCIÓN: ${direccion.toUpperCase()}</p>
    </br>
    <p>CEL.: ${local.telefono}</p>
    </br>
    <p>Saludos</p>
    </br>
    <p><em>Esteban Galeano</em></p>
    `;
    }
}

function printCode(array, id) {
    makeArray(array);
    trys = true;
    printText(id);
}

function makeArray(str) {
    printCodigos = ``;
    codesArray = [];
    const strClean = cleanInputString(str);
    for (let i = 0; i < strClean.length; i += 5) {
        codesArray.push(strClean.slice(i, i + 5));
    }
    printCodigos = codesArray.join(`<br>`);
}

function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return str.replace(regex, '');
}

const reset = () => {
    location.reload();
}

export { printText, reset, printCode}