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
  const expectedResult = [
    'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
    'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
    'Fundação - Ficção Científica - Isaac Asimov',
    'Duna - Ficção Científica - Frank Herbert',
    'A Coisa - Terror - Stephen King',
    'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
  ];
  
  function formatedBookNames() {
    // escreva seu código aqui
    const expect = books.map((book) => `${book.name}-${book.genre}-${book.author.name}` )
    console.log(expect)
    return expect
}

function nameAndAge() {
    // escreva seu código aqui
    const data = books.map((book) => (
        {
          author: book.author.name,
          age: book.releaseYear - book.author.birthYear,
        } )).sort((a,b) => a.age-b.age);
    console.log(data);
    return data;
  } 	
function fantasyOrScienceFiction() {
    // escreva seu código aqui
    const report = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
    console.log(report);
    return report
}

function oldBooksOrdered() {
  // escreva seu código aqui
  const report = books.filter((book) => (2022 - book.releaseYear) > 60).sort((a, b) => a.releaseYear-b.releaseYear)
  console.log( `oldBooksOrdered`,report)
  return report
}

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  const report = books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
  const authorName = report.map((name) => name.author.name).sort()
  console.log(authorName);
  return authorName
}

function oldBooks() {
  // escreva seu código aqui
  const report = books.filter((book) => (2022 - book.releaseYear) > 60)
  .map((oldBook) => oldBook.name )
  console.log(report)
  return report
}

// formatedBookNames();
// nameAndAge();
// fantasyOrScienceFiction();
// oldBooksOrdered()
// fantasyOrScienceFictionAuthors();
oldBooks();