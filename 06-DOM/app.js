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



// g Tagus ul apibraukite rėmeliais ir uždėkite 15px paddingą viršuje ir apačioje ir 50px paddingą kairėje ir dešinėje;

animalsDOM.forEach( e => {
    e.style.padding = '15px 50px';
    e.style.border = '2px solid #000';
});

// h Suskaičiuoti kiek yra naujų gyvūnų (su klase new);
count = 0;
const newAnimalsDOM = document.querySelectorAll('ul > .new');
console.log(newAnimalsDOM);
console.log(newAnimalsDOM.length);

//  i Suskaičiuoti atskirai kiek yra naujų gyvūnų kiekvienoje kategorijoje;
console.log(animalsDOM); 
// ar galima buvo praeiti su ciklu ir is kiekvienos kategorijos isrinkti klase new?
const newZirafos = document.querySelectorAll('#zirafos > li.new').length;
console.log(newZirafos);
console.log(document.querySelectorAll('#plesrunai > li.new').length);
console.log(document.querySelectorAll('#gyvates > li.new').length);
console.log(document.querySelectorAll('#zoliaedziai > li.new').length);

// 3
// a Padaryti tai ką liepia mygtukai Header1 sekcijoje;

document.querySelector('#h1-color').style.backgroundColor = 'green';
document.querySelector('#h1-font').style.fontSize = '10px';

// b Padaryti, kad paspaudus ant i tago jis pakeistų fonto svorį į bold;
console.log('=======================');
const iTagDOM = document.querySelector('i');
iTagDOM.addEventListener('click', e => {
    e.stopPropagation();
    console.log(e);
    iTagDOM.style.fontWeight = 'bold'; 
});

// c Padaryti, kad paspaudus ant tago su klase prices, backgroundas pasikeistų į pilką, o paspaudus dar kartą vėl grįžtu į baltą spalvą;
let clickCount = 0;
const pricesDOM = document.querySelector('.prices');
pricesDOM.addEventListener('click', e => {
    e.stopPropagation();
    clickCount++;
    if (clickCount % 2 !== 0)
        pricesDOM.style.backgroundColor = '#A5A5A5';
    else {
        pricesDOM.style.backgroundColor = null;
    }
});
// d Padaryti, kad paspaudus ant tago su id contacts, tam tagui būtų pridėta css savybė color = orange;

const contactsDOM = document.querySelector('#contacts');
contactsDOM.addEventListener('click', e => {
    contactsDOM.style.color = 'orange';
});

// e Padaryti taip, kad paspaudus ant padidinti, esančio tage su id contacts, tagui su id contacts būtų pridėta css savybė fontSize = 20px;

const padidintiDOM = document.querySelector('#contacts > u');
padidintiDOM.addEventListener('click', e => {
    // e.stopPropagation(); // ar deti kiekviename eventListeneryje?
    contactsDOM.style.fontSize = '20px';
});

// f Padaryti taip, kad paspaudus ant X, esančio tage su id contacts, pridėtos tage su id contacts savybės būtų panaikintos 

const xDOM = document.querySelector('#contacts > b');
xDOM.addEventListener('click', e => {
    e.stopPropagation(); // kodel stopPropagation siuo atveju nuima visus style nuo div, o be jo contacts pasidarytu oranzinis?
    contactsDOM.removeAttribute('style');

});

// g Padaryti tai ką liepia mygtukai Header2 sekcijoje;

const colorButtonDOM = document.querySelector('#h1-color-back');
colorButtonDOM.addEventListener('click', e => {
    colorButtonDOM.style.backgroundColor = colorButtonDOM.style.backgroundColor == 'green' ? null : 'green';
});

const fontButtonDOM = document.querySelector('#h1-font-back');
fontButtonDOM.addEventListener('click', e => {
    fontButtonDOM.style.fontSize = fontButtonDOM.style.fontSize == '10px' ? null: '10px';
});

// 4
//a Padaryti, kad dukartus paspaudus ant naujų gyvūnų jie nusispalvintu raudonai
newAnimalsDOM.forEach(li => {
    li.addEventListener('dblclick', e => {
        li.style.color = 'red';
    });
});

// b Padaryti, kad paspaudus ant gyvūno jis būtų atvaizduojamas 130% didesniu fonto dydžiu. “PATINKA” tas neturi galioti.
const visuGyvunuDOM = document.querySelectorAll('.animals > ul > li');
console.log(visuGyvunuDOM);
visuGyvunuDOM.forEach(animals => {
    if (animals.className !== 'like-button') {
        animals.addEventListener('click', e => {
            animals.style.fontSize = '130%';
        });
    }
});

// c Padaryti, kad paspaudus ant “PATINKA”, atitinkamai (tėvinei) sekcijai būtų priskirta klasė like;
visuGyvunuDOM.forEach(animals => {
    if (animals.className === 'like-button') {
        animals.addEventListener('click', e => {
            animals.parentElement.classList.add('like');
        });
    }
});

// 5 Dinaminis elementų kūrimas (su createElement)

// a Dinamiškai su JS pridėti naują kainą “Senjorai tik: 1.99 eur”;

const senjoruKaina = document.createElement('h2');
senjoruKaina.innerText = 'Senjorai tik: 1.99 eur';
senjoruKaina.classList.add('price-tag');


pricesDOM.appendChild(senjoruKaina);


// b


console.log(document.getElementsByClassName('new'));
console.log(document.getElementsByClassName('new').length);

const el = document.createElement("span"); 
el.className = "red"; 
console.log(el)