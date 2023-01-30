const prestamo = document.querySelector('#prestamo');
const interes = document.querySelector('#interes');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');



function btnOnClick() {
    const interesDecimal = Number(interes.value) / 100;
    const aumento = Number(prestamo.value) * interesDecimal;
    const total = aumento + Number(prestamo.value);

    pResult.innerText = 'Tu total a pagar sera de: ' + total;
}