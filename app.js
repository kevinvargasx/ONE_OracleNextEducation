
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafio";

function consolebtn(){
    alert('El botón fue clicado');
}

function alertbtn(){
    alert('Yo amo JS');
}
function promptbtn(){
    let ciudad = prompt("Ingrese un nombre de una ciudad de Brasil:");
    if (ciudad!=null){
        alert(`La ciudad de llama ${ciudad}`);
    }       
}

function sumabtn(){
    let n1 = parseInt(prompt('Ingrese primer número'));
    let n2 = parseInt(prompt('Ingrese segundo número'));
    let suma = n1+n2;
    alert("La suma de los número es: " + suma);
}
