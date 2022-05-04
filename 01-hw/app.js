// 1
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let first = rand(0, 4);
let second = rand(0, 4);

if (first >= second) {
    console.log(first / second);
}else {
    console.log(second / first);
}
console.log('=============================');
// 2
let a = rand(0, 25);
let b = rand(0, 25);
let c = rand(0, 25);
console.log([a, b, c]);
if ((a >= b && a <=c) || (a >=c && a<=b)) {
    console.log(a);
} else if ((b >= a && b <= c) || (b >=c && b <=a)) {
    console.log(b);
} else if ((c >= a && c <= b) || (c >= b && c <= a)) {
    console.log(c);
}

// 3
console.log('=============================');
a = rand(1, 10);
b = rand(1, 10);
c = rand(1, 10);
console.log([a, b, c]);
 if (a*a === b*b + c*c || b*b === a*a + c*c || c*c === a*a + b*b) {
     console.log('Trikampi galima sudaryti');
 } else {
     console.log('Negalima sudaryti trikampio');
 }


//  4
console.log('=============================');
a = rand(0, 2);
b = rand(0, 2);
c = rand(0, 2);
let d = rand(0, 2);
let numbersArray = [a, b, c, d]
console.log(numbersArray);
function numberCount(numbers) {
    let nulis = 0;
    let vienas = 0;
    let du = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            nulis++;
        }
        if (numbers[i] === 1) {
            vienas++;
        }
        if (numbers[i] === 2) {
            du++;
        }
    }
    return console.log(`Nuliu: ${nulis}, vienetu: ${vienas}, dvejetu: ${du}`);
}
numberCount(numbersArray);

// 5
console.log('=============================');
a = rand(-10, 10);
b = rand(-10, 10);
c = rand(-10, 10);
numbersArray = [a, b, c]
console.log(numbersArray);

function newArray(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.push(`+${arr[i]}+`);
        }
        else if (arr[i] === 0) {
            newArr.push(`*${arr[i]}*`);
        } else {
            newArr.push(`-${arr[i]}-`);
        }
    }
    return console.log(newArr);
}
newArray(numbersArray)

// 6

const zvakiuKiekis = rand(5, 3000);


function zvakiuKaina(kiekis) {
    let zvakesKaina = 1;
    if (kiekis >= 1000 && kiekis <= 2000) {
        zvakesKaina = zvakesKaina * 0.97;
    } else if (kiekis >= 2000) {
        zvakesKaina = zvakesKaina * 0.96;
    }
    return console.log(`Pirkta ${kiekis} zvakiu uz ${kiekis * zvakesKaina}eur.`);
}
zvakiuKaina(zvakiuKiekis);


// 7
console.log('=============================');
a = rand(0, 100);
b = rand(0, 100);
c = rand(0, 100);
numbersArray = [a, b, c];
console.log(numbersArray);
function vidurkiai(numbersArray) {
    let suma = 0;
    for (let i=0; i<numbersArray.length; i++) {
        suma += numbersArray[i];
    }
    let newArr = [];
    for(let i=0; i<numbersArray.length; i++) {
        if (numbersArray[i] < 10 || numbersArray[i] > 90) {
            continue;
        } else {
            newArr.push(numbersArray[i]);
        }
    }
    let sumaNew = 0;
    for (let i=0; i<newArr.length; i++) {
        sumaNew += newArr[i];
    }
    return console.log(`Aritmetinis vidurkis: ${suma / numbersArray.length}, Vidurkis atmetus reiksmes: ${sumaNew / newArr.length}`);
}
vidurkiai(numbersArray);
