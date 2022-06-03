//  uzdaviniai
// https://docs.google.com/document/d/1_2C-SA2fhKduqCZ0YsZyZHXpFEb4lmjyIi8a875yc04/edit

console.log('===============================');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 1
const masyvas = [];
for (let i = 0; i < 30; i++) {
    masyvas.push(rand(5, 25));
}
console.log(masyvas);

// 2a
let countMore10 = 0;
for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > 10) {
        countMore10++;
    }
}
console.log(countMore10);

// 2b Raskite didžiausią masyvo reikšmę ir jos indeksą;
console.log(Math.max(...masyvas));
let biggestNumber = masyvas[0];
for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > biggestNumber) {
        biggestNumber = masyvas[i];
    }
}
console.log('===============================');
console.log(biggestNumber);
console.log(masyvas.findIndex(e => e === biggestNumber));
console.log(masyvas);
// 2c
let poriniuSuma = 0;
for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] % 2 === 0) {
        console.log(masyvas[i]);
        poriniuSuma += masyvas[i];
    }
}
console.log('===============================');
console.log(poriniuSuma);

// 2d Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;
const masyvas1 = [];
for (let i = 0; i < masyvas.length; i++) {
    masyvas1.push(masyvas[i] - i)
}
console.log(masyvas);
console.log(masyvas1);

// 2e

for (let i = 0; i < 10; i++) {
    masyvas1.push(rand(5, 25));
}
console.log(masyvas1);
console.log(masyvas1.length);

// 2f

const poriniuMasyvas = [];
const neporiniuMasyvas = [];
for (let i = 0; i < masyvas1.length; i++) {
    if (masyvas1[i] % 2 === 0) {
        poriniuMasyvas.push(masyvas1[i]);
    } else {
        neporiniuMasyvas.push(masyvas1[i]);
    }
}
console.log('===============================');
console.log(poriniuMasyvas);
console.log(neporiniuMasyvas);
console.log(poriniuMasyvas.length);
console.log(neporiniuMasyvas.length);
console.log('===============================');
// 2g
console.log(masyvas1);
for (let i = 0; i < masyvas1.length; i++) {
    if (i % 2 ===0 && masyvas1[i] > 15) {
        masyvas1[i]=0;
    }
    
}
console.log(masyvas1);

// 2h
for (let i = 0; i < masyvas1.length; i++) {
    if (masyvas1[i] > 10) {
        console.log(i);
        break;
    }
}

// 3

const raidziuMasyvas = [];
const raidziuMasyvas2 = [];
const raidziuMasyvas1 = [];
let raides = 'ABCD';
for (let i = 0; i < 200; i++) {
    raidziuMasyvas.push(raides[rand(0, 3)]);
    raidziuMasyvas1.push(raides[rand(0, 3)]);
    raidziuMasyvas2.push(raides[rand(0, 3)])
}
console.log(raidziuMasyvas);
console.log(raidziuMasyvas.length);


// 4
const masyvuSuma = [];
for (let i = 0; i < raidziuMasyvas.length; i++) {
    masyvuSuma.push(raidziuMasyvas[i] + raidziuMasyvas1[i] + raidziuMasyvas2[i] );
}
console.log(masyvuSuma);
const uniqueItems = [...new Set(masyvuSuma)]; //budas rasti unikalias reiksmes masyve.
console.log(uniqueItems);
console.log(uniqueItems.length); // unikaliu kombo skaicius???
// let arOriginali = true;
// let originalCount = 0;
// for (let i = 0; i < masyvuSuma.length; i++) {
//     let masyvoReiksme = masyvuSuma[i];
//     for (let k = 0; k < masyvuSuma.length; k++) {
//         if (masyvoReiksme !== masyvuSuma[k]){
//             continue;
//         } else {
//             arOriginali = false;
//             break;
//         }
//     }
//     if (arOriginali) {
//         originalCount++
//     }
// }

// console.log(originalCount);


// 5 Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).

let iterationAmount = 100;
const pirmasMasyvas = [];

for (let i = 0; i < iterationAmount; i++) {
    let number1 = rand(100, 999);
    
    let checkIndex = pirmasMasyvas.findIndex(element => element === number1);
    if (checkIndex === -1) {// grazins arba -1 arba indexa kuris yra. Patikrina reiksmes ar jos kartojasi array.
        pirmasMasyvas.push(number1);
    } else {
        iterationAmount++;
    }
}

console.log(pirmasMasyvas);
console.log(pirmasMasyvas.length);

const antrasMasyvas = [];
iterationAmount = 100;
for (let i = 0; i < iterationAmount; i++) {
    let number = rand(100, 999);
    
    let checkIndex = antrasMasyvas.findIndex(element => element === number);
    if (checkIndex === -1) {// grazins arba -1 arba indexa kuris yra. Patikrina reiksmes ar jos kartojasi array.
        antrasMasyvas.push(number);
    } else {
        iterationAmount++;
    }
}
console.log(antrasMasyvas);
console.log(antrasMasyvas.length);


// 6 Sugeneruokite masyvą, kuris būtų sudarytas iš reikšmių, kurios yra pirmame 6 uždavinio masyve, bet nėra antrame 6 uždavinio masyve.
console.log('===============================');
const generuojamasMasyvas = [];
for (let i = 0; i < pirmasMasyvas.length; i++) {
    let number = pirmasMasyvas[rand(0, 99)];
    let checkIndex = antrasMasyvas.findIndex(element => element === number);
    if (checkIndex === -1) {
        generuojamasMasyvas.push(number);
    }
}
console.log(generuojamasMasyvas);
console.log(generuojamasMasyvas.length);


 // 7 Sugeneruokite masyvą iš elementų, kurie kartojasi abiejuose 6 uždavinio masyvuose.
console.log('===============================');
// console.log(pirmasMasyvas);
// console.log(antrasMasyvas);
const besikartojantys = [];
for (let i = 0; i < pirmasMasyvas.length; i++) {
    let number = pirmasMasyvas[i];
    let checkIndex = antrasMasyvas.findIndex(element => element === number);
    if (checkIndex > -1) {
        besikartojantys.push(number);
    }
}
console.log(besikartojantys);
console.log(besikartojantys.length);

console.log('===============================');

const besikartojantys1 = [];
for (let i = 0; i < pirmasMasyvas.length; i++) {
    let number = pirmasMasyvas[i];
    for (let k = 0; k < antrasMasyvas.length; k++) {
        if (number === antrasMasyvas[k]) {
            besikartojantys1.push(number);
            break;
        }
    }
}
console.log(besikartojantys1);
console.log(besikartojantys1.length);

// 8 Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 6 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo.
const array1 = [];
let indexai = pirmasMasyvas[rand(0, 99)];
for (let i = 0; i < indexai; i++) {
    array1.push(antrasMasyvas[rand(0, 99)]);
}
console.log(array1);
console.log(array1.length);


// 9 Sugeneruokite 10 skaičių masyvą pagal taisyklę: Du pirmi skaičiai- atsitiktiniai nuo 5 iki 25. Trečias, pirmo ir antro suma. Ketvirtas- antro ir trečio suma. Penktas trečio ir ketvirto suma ir t.t.
console.log('===============================');
const naujasMasyvas = [rand(0, 25), rand(0, 25)];

for (let i = 2; i < 10; i++) {
    naujasMasyvas.push(naujasMasyvas[i - 2] + naujasMasyvas[i - 1]);
}
console.log(naujasMasyvas);
console.log(naujasMasyvas.length);


// 3 Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 200. Suskaičiuokite kiek yra kiekvienos raidės.

console.log('===============================');
const reiksmesA = raidziuMasyvas.filter(e => e === 'A');
console.log(reiksmesA);
console.log(reiksmesA.length);

console.log(raidziuMasyvas.filter(e => e === 'B').length);
console.log(raidziuMasyvas.filter(e => e === 'C').length);
console.log(raidziuMasyvas.filter(e => e === 'D').length);
console.log('===============================');
// 4 Sugeneruokite 3 masyvus pagal 3 uždavinio sąlygą. Sudėkite masyvus, sudėdami atitinkamas reikšmes. Paskaičiuokite kiek unikalių (po vieną, nesikartojančių) reikšmių ir kiek unikalių kombinacijų gavote.
const newUnique = []
for (let i = 0; i < uniqueItems.length; i++) {
    let element = uniqueItems[i];
    let elementCount = 0;
    for (let k = 0; k < uniqueItems.length; k++) {
        if (uniqueItems[k] == element) {
            elementCount++;
        }
    }
    if (elementCount === 1) {
        newUnique.push(element);
    }
}
console.log(newUnique);
console.log(newUnique.length);
console.log('===============================');
console.log(uniqueItems);
console.log(uniqueItems.length);


// 8 pagal destytoja
// Sugeneruokite masyvą, kurio indeksus sudarytų pirmo 5 uždavinio masyvo reikšmės, o jo reikšmės iš būtų antrojo masyvo.
const longSet1 = new Set(); // sukuriam su Set() unikaliu reiksmiu masyva.
do {
    longSet1.add(rand(100, 999));
} while (longSet1.size < 100)

const longArray1 =[...longSet1];
console.log(longArray1);

const longSet2 = new Set(); // sukuriam su Set() unikaliu reiksmiu masyva.
do {
    longSet2.add(rand(100, 999));
} while (longSet2.size < 100)

const longArray2 =[...longSet2];
console.log(longArray2);
const freakArray = [];

longArray1.forEach((v, i) => {
    freakArray[v] = longArray2[i];
})

console.table(freakArray);