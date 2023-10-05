// alert("Hola terrícola, soy Armen, el alien 👽")
// alert("Bienvenido al juego de adivinar el número que elijo. Si acertás, te ganas un viaje a Marte")
// alert("Es un número del 1 al 20 y tenes 2 intentos. ¿Estás listo?")

let numeroArmen = Math.floor(Math.random() * 20) + 1;
console.log(numeroArmen);

let intentos = 0;

while (intentos < 3) {
    let numeroUsuario = parseInt(prompt("Ingrese un número del 1 al 20"));

    if (numeroUsuario === numeroArmen) {
        alert(`¡FELICITACIONES! ADIVINASTE EN ${intentos + 1} INTENTO(S). ¡TE GANASTE UN PASAJE A MARTE! 🚀`);
        break;
    } else if (intentos === 2) {
        alert(`Lo lamento, agotaste tus 3 intentos. El número que eligió Armen fue ${numeroArmen}.`);
        break;
    } else if (numeroUsuario < numeroArmen && numeroUsuario >= 1) {
        alert("¡Sumá algo más!");
    } else if (numeroUsuario > numeroArmen && numeroUsuario <= 20) {
        alert("Te pasaste, probá con un poco menos.");
    } else {
        alert("Recordá ingresar un número del 1 al 20.");
    }

    intentos++;
}

