const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#result');

btn.addEventListener('click', btnOnClick);

function btnOnClick (){
    const suma = Number(input1.value) + Number(input2.value);
    resultado.innerText = "El resultado de la suma es: " + suma;
}

 

