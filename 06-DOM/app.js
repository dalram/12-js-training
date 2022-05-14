console.log('=======================');
// 1 Atskiri elementai
// a Tamsiai žaliai nuspalvinti h1 tagą;
const h1DOM = document.querySelector('h1');
h1DOM.style.color = '#007400';
// b Tagui i pridėti klasę small;
h1DOM.classList.add('small');
// c Iš tago h1 pašalinti klasę main;
h1DOM.classList.remove('main');
// d Tik tam h2 tagui, kuris iškart eina po h1 tago, pridėti klasę first ir pašalinti klasę main;
document.querySelector('h1 + h2').classList.add('first');
document.querySelector('h1 + h2').classList.remove('main');
// e Pirmam span tagui, kuris yra h2 viduje sumažinti fonto dydį iki 10px ir nudažyti pilkai
document.querySelector('span:first-of-type').style.fontSize = '10px';
document.querySelector('span:first-of-type').style.color = '#6E7269';

// 2 Elemetų grupės (nodeList) skaičiavimus išvest į consolę
// a Suskaičiuoti kiek yra h2 tagų;

const allh2DOM = document.querySelectorAll('h2');
console.log(allh2DOM.length);

// b Suskaičiuoti kiek yra h2 tagų, kurie neturi klasės first
const h2NoFirstDOM = document.querySelectorAll('h2.first');
console.log(allh2DOM.length - h2NoFirstDOM.length);

// c Visus h2 tagus nuspalvinti šviesiai mėlynai

allh2DOM.forEach( e => {
    e.style.color = '#326970';
});

// d Tagų, kurie yra div su klase prices, viduje esantiems h2 tagams pridėti klasę price-tag;
const h2InsideDivDOM = document.querySelectorAll('div.prices > h2');
console.log(h2InsideDivDOM);
h2InsideDivDOM.forEach( e => {
    e.classList.add('price-tag');
});

// e Pabraukti visus tagus su klase new;

const classNewDOM = document.querySelectorAll('.new');
console.log(classNewDOM);

classNewDOM.forEach( e => {
    e.style.textDecoration = 'underline';
});

// f Suskaičiuoti kiek yra gyvūnų kategorijų ir žirafų (jos yra ul tagai);
let count = 0;
const animalsDOM = document.querySelectorAll('.animals > ul');
console.log(animalsDOM.length);
const zirafuDOM = document.querySelectorAll('#zirafos > li');
console.log(zirafuDOM);
zirafuDOM.forEach( e => {
    console.log(e.classList);
    if (e.className !== 'like-button') {
        count++;
    }
});
console.log(count);

const animalDOM = document.querySelector('.animals');

console.log(animalDOM.childNodes);

// g Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;

animalsDOM.forEach( e => {
    e.style.padding = '15px 50px';
    e.style.border = '2px solid #000';
});

// h Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
count = 0;
