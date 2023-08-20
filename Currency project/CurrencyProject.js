const currencySelect = document.getElementById('currencySelect');
const amountInput = document.querySelector('#amount');
let resultElements = document.querySelectorAll('.result');
const money = document.querySelectorAll('.bodyMoney')
const date = document.querySelector('#currentDate')
const currencies = {
    AZN: 'Azerbaijani manat',
    USD: 'US dollar',
    EUR: 'Euro',
    RUB: 'Russian ruble',
    GBP: 'British pound',
    TRY: 'Turkish lira',
    CHF: 'Swiss franc',
    JPY: 'Japanese yen',
    GEL: 'Georgian lari',
    SEK: 'Swedish krona',
    CNY: 'Chinese yuan'
};

class Currency {
    constructor() {
        this.url =
            "https://api.fastforex.io/fetch-multi?api_key=869d171809-0a8ef8fbc7-rylwy5";
    }

    async exchange(amount, firstCurrency, secondCurrency) {
        const response = await fetch(
            `${this.url}&from=${firstCurrency}&to=${secondCurrency}`
        );
        const data = await response.json();
        const result = data.results[secondCurrency]
        const exchangedResult = amount * result;
        return exchangedResult;
    }
}


amountInput.addEventListener('keydown', function (event) {
    if (event.key === '-' || event.key === 'Subtract') {
        event.preventDefault();
    }
});
const currency = new Currency();
function time() {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    let fullDate = `${hours}:${minutes}:${seconds}`;
    date.textContent = fullDate;
}
setInterval(time, 1000);
function exchange(secondCurrency) {
    const amount = Number(amountInput.value.trim());
    const firstOptionValue = currencySelect.value;

    currency.exchange(amount, firstOptionValue, secondCurrency)
        .then((response) => {
            resultElements.forEach((input) => {
                if (input.dataset.currency === secondCurrency) {
                    input.value = response.toFixed(4);
                }
            });
        })
        .catch((error) => {
            console.error('Exchange Error:', error);
        });
}

currencySelect.addEventListener('change', () => {
    money.forEach((div) => {
        const secondOptionValue = div.textContent;
        exchange(secondOptionValue);
    });
});

amountInput.addEventListener('input', () => {
    const bodyMoneyDivs = document.querySelectorAll('.bodyMoney');
    bodyMoneyDivs.forEach((div) => {
        const secondOptionValue = div.textContent;
        exchange(secondOptionValue);
    });
});
