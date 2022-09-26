// criar um algoritimo que calcule o fatorial de 10
// qualquer fatorial:
// pegar um numero n,
// multiplicar ele por n-1 
// depois por n-2
// fazer isso até chegar em 1
// ou seja n - (n-1) = 1
// n * (n-1) * (n-2) .... n - (n-1)

let fatorial = 1;

for(let i = 10; i>0; i-=1){
    fatorial *=i;
}
console.log(fatorial)
