        /*
      Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
      - document.getElementById()
      - document.getElementsByClassName()
      - document.getElementsByTagName()
      1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
      2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
      3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
      4. Crie e execute uma função que corrija o texto da tag <h1>.
      5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
      6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
      */

      function futuro(tag) {
        document.getElementsByTagName(tag)[1].innerText  = "daqui a 2 anos me vejo trabalhando como programador em uma empressa estrangeira e  morando sozinho"
      }

      futuro("p")

      function fundoVerde(classe) {
        let fundo = document.getElementsByClassName(classe);
        for (let i = 0; i < fundo.length; i++) {
            fundo[i].style.backgroundColor = "rgb(76,164,109)";
        }
      }

      fundoVerde("main-content")

      function fundoVermelho(classe) {
        let fundo = document.getElementsByClassName(classe);
        for (let i = 0; i < fundo.length; i++) {
            fundo[i].style.backgroundColor = "white";
        }
      }

      fundoVermelho("center-content")

      function correctHeader (tag) {
        document.getElementsByTagName(tag)[0].innerText = "Exercício - JavaEscripit"
      }

      correctHeader("h1")

function maiúsculo(tag) {
  let texto  = document.getElementsByTagName(tag)[0].innerText = "Exercício - JavaEscripit"
  texto.toUpperCase()
}

maiúsculo("p")