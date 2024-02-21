
let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora del Desafio";

function consolebtn(){
    console.log('El botón fue clicado');
    alert('El botón fue clicado');
    
}

function alertbtn(){
    alert('Yo amo JS');
}
function promptbtn(){
    let ciudad = prompt("Ingrese un nombre de una ciudad de Brasil:");
    if (ciudad!=null){
        alert(`Estuve en ${ciudad} y me acorde de tí.`);
    }       
}

function sumabtn(){
    let n1 = parseInt(prompt('Ingrese primer número'));
    let n2 = parseInt(prompt('Ingrese segundo número'));
    let suma = n1+n2;
    alert(`${n1} + ${n2} = ` + suma);
}
