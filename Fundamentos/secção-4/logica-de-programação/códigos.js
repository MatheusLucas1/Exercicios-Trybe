let maiorPrimo = 0;



for(let numero = 2; numero<=50; numero+=1) {
    let isPrime = true;
    for( let divisor = 2; divisor < numero;divisor++){
        if (numero % divisor === 0){
            isPrime = false
        }
    }
    if (isPrime){
        maiorPrimo = numero
    }
}
console.log(maiorPrimo)
