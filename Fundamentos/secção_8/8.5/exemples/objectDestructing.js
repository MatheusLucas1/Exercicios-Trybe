// const product = {
//     nome: 'Smart TV Crystal UHD',
//     price: '1899.05',
//     seller: 'Casas de Minas',
//   };

//   const { nome, seller } = product;
//   console.log(nome); // Smart TV Crystal UHD
//   console.log(seller); // Casas de Minas

  
// // definindo o objeto
// const character = {
//     name: 'Luke SkyWalker',
//     age: '53',
//     description: {
//       specieName: 'Human',
//       jedi: true,
//     },
//     homeWorld: {
//       name: 'Tatooine',
//       population: '200000',
//     },
//   };
  
//   // desestruturando o objeto:
//   const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
  
//   // imprimindo os valores:
//   console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
  };
  
const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
  };
const userJobInfos = {...user, ...jobInfos}
const printFrase = ({name,age,nationality,profession,squad,squadInitials}) => {
    console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`)
}
printFrase(userJobInfos)