let array = ['java', 'javascript', 'python', 'html', 'css'];

maiorPalavra = array[0];
menorPalavra = array[0];

for(let i = 0; i<array.length; i+=1) {
    if(array[i].length > maiorPalavra.length) {
        maiorPalavra = array[i]
    }
}

for(let i = 0 ; i < array.length ; i+=1) {
    if (array[i].length< menorPalavra.length) {
        menorPalavra = array[i]
    }
}

console.log(maiorPalavra);
console.log(menorPalavra)