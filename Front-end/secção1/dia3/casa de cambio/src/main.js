const SearchButton = document.querySelector('.search-btn');

const coinInput = document.querySelector('#coin-input');

const coinsList = document.querySelector('.coins')

function fetchAPI(coin) {
    const URL = `https://api.exchangerate.host/latest?base=${coin}`;
    return fetch(URL)
    .then((response) => response.json())
    .then((data) => data.rates)
}

function renderCoins(coins)  {
    coinsList.innerHTML = ' ';

    const coinsArray = Object.entries(coins);
    console.log(coinsArray);

    coinsArray.forEach((coin) => {
        const [coinName, value] = coin;
        console.log(coinName);
        console.log(value)
    })
}

function handleSearch() {
    const coin = coinInput.value;
    console.log(coin);

    fetchAPI(coin)
    .then(renderCoins)
}

SearchButton.addEventListener('click', handleSearch)