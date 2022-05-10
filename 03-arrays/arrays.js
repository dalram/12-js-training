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

// 2b
console.log(Math.max(...masyvas));
let biggestNumber = masyvas[0];
for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > biggestNumber) {
        biggestNumber = masyvas[i];
    }
}
console.log('===============================');
console.log(biggestNumber);
console.log(masyvas);
console.log('===============================');
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

// 2d
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
const uniqueItems = [...new Set(masyvuSuma)]; //budas rasti originalias reiksmes masyve.
console.log(uniqueItems);
console.log(uniqueItems.length); // originaliu kombo skaicius???
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


// 5

const pirmasMasyvas = [];
const antrasMasyvas = [];
for (let i = 0; i < 100; i++) {
    pirmasMasyvas.push(rand(100, 999));
    antrasMasyvas.push(rand(100, 999));
}
console.log(pirmasMasyvas);
console.log(antrasMasyvas);