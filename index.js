let element = document.querySelectorAll('.section-cart__price');

let price1 = element[0].textContent.split(' '),
    price2 = element[1].textContent.split(' '),
    price3 = element[2].textContent.split(' '),
    price4 = element[3].textContent.split(' ');
let sum = +price1[0] + +price2[0] + +price3[0] + +price4[0];

let totalSum = document.querySelector('.section-cart__total-sum');
totalSum.textContent = `${sum} руб.`;

let button = document.querySelector('.section-cart__button');
button.addEventListener('click', makeClick, true);

function makeClick() {
    priceDiscount1 = +price1[0] - (+price1[0] * 0.2);
    priceDiscount2 = +price2[0] - (+price2[0] * 0.2);
    priceDiscount3 = +price3[0] - (+price3[0] * 0.2);
    priceDiscount4 = +price4[0] - (+price4[0] * 0.2);

    sumDiscount = sum - (sum * 0.2);

    element[0].textContent = `${priceDiscount1} руб.`;
    element[1].textContent = `${priceDiscount2} руб.`;
    element[2].textContent = `${priceDiscount3} руб.`;
    element[3].textContent = `${priceDiscount4} руб.`;

    totalSum.textContent = `${sumDiscount} руб.`;
}