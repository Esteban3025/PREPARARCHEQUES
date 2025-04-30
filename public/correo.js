import { locales } from './datos/locales.js';

const correobtn = document.getElementById('correo-btn');
const correo = document.getElementById('correo-body');
const resetbtn = document.getElementById('reset-btn');
const id = document.getElementById('id');
const pts = document.getElementById('pts');
let count = 0;

const makeCorreo = () => {
    const codigo = id.value;
    const codigoSomos = (codigoSomos) => codigoSomos.id === codigo;

    const puntos = pts.value;
    const cheques = Math.floor(puntos / 250000);

    const idCorrecto = locales.findIndex(codigoSomos);
    const local = locales[idCorrecto];
    let text = "cheques";

    if (local == undefined) {
        alert('Este local no existe');
        reset();
        return
    }
    if (pts.value < 250000) {
        alert('Puntos insuficientes para continuar..');
        reset();
        return
    }
    if (count === 1) {
        alert('Ya creaste un correo, resetea para eliminarlo');
        reset();
        count = 0;
        return
    }

    const nombreDelLocal = local.ndl;
    const nombredelPropietario = local.ndp;
    const ciudad = local.ciudad;
    const direccion = local.direccion;
    console.log(local);

    if (cheques == 1) {
        text = "cheque";
    }
    
    count = 1;
    printText(nombreDelLocal, nombredelPropietario, ciudad, direccion, cheques, codigo, puntos, local, text);
}

const reset = () => {
    correo.innerHTML = ``;
    pts.value = 0;
    id.value = 0;
    count = 0;
    return
}

const printText = (nombreDelLocal, nombredelPropietario, ciudad, direccion, cheques, codigo, puntos, local, text) => {
    correo.innerHTML += `<p>Buenas Señora Melissa.</p>
    </br>
    <p>El cliente con ficha N° <strong>${codigo}</strong> cuenta a la fecha con <strong>${puntos}</strong> puntos, solicita <strong>${cheques}</strong> ${text} SOMOS.</p>
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

correobtn.addEventListener('click', makeCorreo);
resetbtn.addEventListener('click', reset);
pts.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        makeCorreo();
        return;
    }
    return
});