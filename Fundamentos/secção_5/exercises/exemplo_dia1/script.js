document.querySelector("header").style.backgroundColor = "#34BE82" 
document.querySelector("body").style.backgroundColor = '#F5EFE6'
document.querySelector("footer").style.backgroundColor = '#064635'
let emergencia = document.getElementsByClassName("emergency-tasks")

for (let i = 0; i < emergencia.length; i+=1) {
   emergencia[i].style.backgroundColor = 'salmon'
}

let naoEmergencia = document.getElementsByClassName("no-emergency-tasks")

for (let i = 0; i < emergencia.length; i+=1) {
   naoEmergencia[i].style.backgroundColor = '#FFF89A'
}
let divEmergencia = document.querySelectorAll(".emergency-tasks div h3")

for (let i = 0; i < divEmergencia.length; i+=1) {
    divEmergencia[i].style.backgroundColor = '#F806CC'
}

let divNaoEmergencia = document.querySelectorAll(".no-emergency-tasks  div h3");

for  (let i = 0; i < divNaoEmergencia.length; i+=1) {
    divNaoEmergencia[i].style.backgroundColor = 'black'
}

