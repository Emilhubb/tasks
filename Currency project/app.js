const currencySelect = document.getElementById('currencySelect');
const amountInput = document.querySelector('#amount');
let resultElements = document.querySelectorAll('.result');
const money = document.querySelectorAll('.bodyMoney');
const date = document.querySelector('#currentDate');

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
        this.api = 'a557eef4f1ab9e92bc9d69c3';
        this.baseUrl = `https://v6.exchangerate-api.com/v6/${this.api}/pair`;
    }

    async exchange(amount, firstCurrency, secondCurrency) {
        const response = await fetch(
            `${this.baseUrl}/${firstCurrency}/${secondCurrency}/${amount}`
        );
        const data = await response.json();

        if (data.result !== 'success') {
            throw new Error(data['error-type'] || 'API error');
        }

        return data.conversion_result;
    }
}

amountInput.addEventListener('keydown', function (event) {
    if (event.key === '-' || event.key === 'Subtract') {
        event.preventDefault();
    }
});

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
});

const currency = new Currency();

function time() {
    let now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    date.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(time, 1000);
time();

function exchange(secondCurrency) {
    const amount = Number(amountInput.value.trim());
    const firstOptionValue = currencySelect.value;

    if (!amount || amount <= 0) return;

    currency.exchange(amount, firstOptionValue, secondCurrency)
        .then((response) => {
            resultElements.forEach((input) => {
                if (input.dataset.currency === secondCurrency) {
                    input.value = response.toFixed(2);
                }
            });
        })
        .catch((error) => {
            console.error('Exchange Error:', error);
        });
}

currencySelect.addEventListener('change', () => {
    money.forEach((div) => {
        const secondOptionValue = div.textContent.trim();
        exchange(secondOptionValue);
    });
});

amountInput.addEventListener('input', (e) => {
    e.preventDefault();
    const bodyMoneyDivs = document.querySelectorAll('.bodyMoney');
    bodyMoneyDivs.forEach((div) => {
        const secondOptionValue = div.textContent.trim();
        exchange(secondOptionValue);
    });
});