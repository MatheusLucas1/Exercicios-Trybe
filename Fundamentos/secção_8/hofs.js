// Ao chamar a função doingThings:


const wakeUp = () => 'Acordando';
const breakfest = () => 'Bora tomar café!!';
const sleepTime = () => 'Partiu dormir!!';

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const doingThings = (func) => func();

console.log(doingThings(wakeUp))