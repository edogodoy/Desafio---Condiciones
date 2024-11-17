/////////////////// BORDE ROJO
const borderojo = document.querySelector('#bordeimg');
borderojo.addEventListener('click', () => {
    borderojo.classList.toggle('bordeon');
});
/////////////////// BORDE ROJO



/////////////////// STICKERS
const btnMenos = document.querySelectorAll(".btn-menos");
const btnMas = document.querySelectorAll(".btn-mas");
const cantidades = document.querySelectorAll(".stickerp");
const btnValidar = document.querySelector(".btnvalidar");
const txtValidar = document.querySelector(".texto-cantidad");

const maxTotal = 10;
function calcularCantidadTotal() {
    return Array.from(cantidades).reduce((total, cantidad) => total + parseInt(cantidad.textContent), 0);
}


btnMenos.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const cantidadActual = parseInt(cantidades[index].textContent);
        if (cantidadActual > 0) {
            cantidades[index].textContent = cantidadActual - 1;
        }
    });
});
btnMas.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const cantidadActual = parseInt(cantidades[index].textContent);
        if (cantidadActual < 10) {
            cantidades[index].textContent = cantidadActual + 1;
        }
    });
});

btnValidar.addEventListener("click", validarCantidadTotal);


function validarCantidadTotal() {
    const total = calcularCantidadTotal();
    if (total === maxTotal) {
        txtValidar.textContent = "Llevas el máximo de stickers permitidos!";
    } else if (total < maxTotal) {
        txtValidar.textContent = `Llevas ${total} stickers.`;
    } else {
        txtValidar.textContent = "Has excedido el límite de stickers.";
    }
}
/////////////////// STICKERS



