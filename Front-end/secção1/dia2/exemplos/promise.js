// Construindo uma promise

const promise = new Promise((resolve, reject) => {});

// exemplo 1

// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório

const resolvedPromise = () => 
new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = generateRandomNumber();
    resolve(randomNumber);
  }, 1000) 

});


// resolvedPromise().then((response) => {
//   console.log(response)
// })
// promise rejeitada retornando um objeto de erro
const rejectedPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      reject(new Error(`O número ${randomNumber} é inválido.`));
    }, 1000);
  });
  
// rejectedPromise().then((response) => {
//   console.log(response)
// }).catch((error) => {
//   console.log(error.message)
// });

//random promise 
 
const randomPromise = () => 
new Promise((resolve,reject) => {
  setTimeout(() => {
    const randomNumber = generateRandomNumber();
    if(randomNumber % 2 === 0) {
      resolve(randomNumber);
    } else {
      reject(new Error (`O número ${randomNumber} é inválido, tem que ser par`))
    }
  },1000)
})

randomPromise()
  .then((response) => {console.log(`Prommise resolvida, o numero gerado foi : ${response}`)})
  .catch((error) => {console.log(error.message)})
