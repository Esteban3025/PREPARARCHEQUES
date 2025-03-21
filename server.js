const { exec } = require("child_process");
const path = require("path");

// Puerto en el que correrá el servidor
const PORT = 3000;

// Comando para iniciar el servidor
const command = `http-server "${__dirname}" -p ${PORT} --cors`;

// Ejecutar el servidor
const server = exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error al iniciar el servidor: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Advertencia: ${stderr}`);
    }
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Abrir el navegador automáticamente después de un pequeño delay
setTimeout(() => {
    const url = `http://localhost:${PORT}/index.html`;
    console.log(`Abriendo: ${url}`);
    
    // Ejecutar el comando para abrir el navegador
    switch (process.platform) {
        case "win32": exec(`start ${url}`); break;   // Windows
    }
}, 1000);
