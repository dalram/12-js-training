// https://docs.google.com/document/d/1W_PXawhBTbCNqwmNOpisJWkxXnrTUtOV9-owb8Ufdrc/edit

// 1 Parašykite funkciją, kurios argumentas būtų tekstas, kuris yra atspausdinamas su console.log;
console.log('=======================');
function zodis(a) {
    console.log(a);
}
zodis('Labas');
// 2 Parašykite funkciją su dviem argumentais, pirmas argumentas tekstas, įterpiamas atspausdinamas su console.log, o antrasis kiek kartų spausdinimas atliekamas. Rašydami šią funkciją remkitės pirmame uždavinyje parašytą funkciją;

function kartok(a, kartai) {
    for (let i = 0; i < kartai; i++) {
        console.log(a);
    }
}
console.log('=======================');
kartok('Labas', 5);

// 4 Parašykite funkciją, kuri skaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos (išskyrus vienetą ir patį save)
function sveikujuDalyba(a) {
    let count = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i === 0) {
            count++;
        }
    }
    return count;
};
console.log(sveikujuDalyba(15));

// 5 Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 33 iki 77. Išrūšiuokite masyvą pagal daliklių be liekanos kiekį mažėjimo tvarka, panaudodami ketvirto uždavinio funkciją.
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const masyvas = [];
let number;
for (let i = 0; i < 100; i++) {
    number = (rand(33, 77));
    masyvas.push(number);
}
console.log(masyvas)
console.log(masyvas.sort((a, b) => sveikujuDalyba(b) - sveikujuDalyba(a)));
masyvas.sort() // nuo didziausio iki maziausio
console.log('=======================');
console.log(sveikujuDalyba(72));
console.log(sveikujuDalyba(60));
console.log(sveikujuDalyba(48));
console.log(sveikujuDalyba(36));
console.log(sveikujuDalyba(42));
console.log(sveikujuDalyba(70));


// 6 Sugeneruokite masyvą iš 100 elementų, kurio reikšmės atsitiktiniai skaičiai nuo 333 iki 777. Naudodami 4 uždavinio funkciją iš masyvo ištrinkite pirminius skaičius.

// filtruoti reiksmes su 4 uzd funkcija

const biggerArray = [];
for (let i = 0; i < 100; i++) {
    biggerArray.push(rand(333, 777));
}

console.log(biggerArray);
console.log(biggerArray.length);
console.log('=======================');
console.log(biggerArray.filter(e => sveikujuDalyba(e) <= 2));
console.log(biggerArray.filter(e => sveikujuDalyba(e) <= 2).length);
console.log('=======================');
console.log(biggerArray.filter(e => sveikujuDalyba(e) > 2));
console.log(biggerArray.filter(e => sveikujuDalyba(e) > 2).length);

// 7 Sugeneruokite atsitiktinio (nuo 10 iki 20) ilgio masyvą, kurio visi, išskyrus paskutinį, elementai yra atsitiktiniai skaičiai nuo 0 iki 10, o paskutinis masyvas, kuris generuojamas pagal tokią pat salygą kaip ir pirmasis masyvas. Viską pakartokite atsitiktinį nuo 10 iki 30  kiekį kartų. Paskutinio masyvo paskutinis elementas yra lygus 0;
// nuo galo pradeti kurti masyvus
let arrayLength = rand(10, 20);
let times = rand(10, 30)
function arrayGen() {
    const masyvas1 = [];
    for (let i = 0; i < arrayLength; i++) {
        
        if (i + 1 === arrayLength ) {
            masyvas1.push([]); 
        } else {
            masyvas1.push(rand(0, 10));
        }
        
    }
    return masyvas1;
}

console.log(arrayGen());
// console.log(masyvas1.length);

for (let i = 0; i < times; i++) {

}
