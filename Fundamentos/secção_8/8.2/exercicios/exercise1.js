const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:
  function authorBornIn1947() {
    
    const author = books.find((book) => book.author.birthYear === 1947).author.name
    console.log (author);
    return author
}

function smallerName() {
    let nameBook;
    books.forEach((book) => {
      if (!nameBook || book.name.length < nameBook.length) {
        nameBook = book.name;
      }
    });
    console.log(nameBook)
    return nameBook;
  }

  function getNamedBook() {
    // escreva seu código aqui
    let nameBook;
    books.forEach((book) => {
      if(!nameBook || book.name.length === 26) {
        nameBook = book.name
      }
    })
  console.log(nameBook);
    return nameBook; 
  }

  function booksOrderedByReleaseYearDesc() {
    // escreva aqui seu código
    const sortBooks = books.sort((a, b) => b.releaseYear - a.releaseYear);
    console.log(sortBooks);
    return sortBooks;

  }

  function everyoneWasBornOnSecXX() {
    // escreva seu código aqui
    const todos = books.every((book) => book.author.birthYear <= 2000 && book.author.birthYear >1900);
    console.log(todos);
    return todos;
  }
  
  function someBookWasReleaseOnThe80s() {
    // escreva seu código aqui
    const releasedOn80s = books.some((book) => book.releaseYear <=1989 && book.releaseYear >= 1980)
    console.log(releasedOn80s)
    return releasedOn80s;
  }

  function authorUnique() {
    const bornInSameYear = books.every((book) =>
    !books.some((bookSome) =>
      (bookSome.author.birthYear === book.author.birthYear)
      && (bookSome.author.name !== book.author.name)));
      console.log(bornInSameYear)
    return bornInSameYear 
  }
  
authorBornIn1947();
booksOrderedByReleaseYearDesc();
smallerName();
getNamedBook();
everyoneWasBornOnSecXX();
someBookWasReleaseOnThe80s();
authorUnique();