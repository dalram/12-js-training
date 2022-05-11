console.log('===============================');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 1 Sukurti masyvą (piniginę), kurio ilgis yra atsitiktinis nuo 10 iki 30, o reikšmės atsitiktiniai skaičiai nuo 0 iki 10 (pinigai);
const piniginesIlgis = rand(10, 30);
const pinigine = [];
for (let i = 0; i < piniginesIlgis; i++) {
    pinigine.push(rand(0, 10));
}
console.log(pinigine);
console.log(pinigine.length);
console.log('===============================');
// 2 Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio reikšmių (pinigų esančių piniginėje) sumą;

let suma = 0;
for (let i = 0; i < pinigine.length; i++) {
    suma += pinigine[i];
}
console.log(suma);

// 3 Naudojant ciklą apskaičiuoti masyvo iš 1 uždavinio popierinių pinigų (skaičių didesnių už 2 ) reikšmių sumą;
let popieriniuSuma = 0;
for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] > 2) {
        popieriniuSuma+= pinigine[i];
    }
}
console.log(popieriniuSuma);

// 4 Išleisti visus metalinius pinigus (reikšmes, kurios yra mažesnės arba lygios 2 padaryti lygias 0) iš 1 uždavinio;
console.log('===============================');
console.log(pinigine);
for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] <= 2) {
        pinigine[i] = 0;
    }
}
console.log(pinigine);

// 5 Surasti didžiausią reikšmę 1 uždavinio masyve ir paskaičiuoti kiek tokių didžiausių reikšmių masyve yra;
console.log('===============================');
console.log(pinigine);
let didziausiaReiksme = pinigine[0];
for (let i =0; i < pinigine.length; i++) {
    if (didziausiaReiksme <= pinigine[i]) {
        didziausiaReiksme = pinigine[i];
    }
}
console.log(didziausiaReiksme);

let count = 0;
for (let i =0; i < pinigine.length; i++) {
    if (didziausiaReiksme === pinigine[i]) {
        count++;
    }
}
console.log(count);
console.log(pinigine.filter(e => e === didziausiaReiksme).length);

// 6 Visus masyvo elementus, kurie yra lygūs 0, pakeisti į tų elementų indeksų (vietų, numerių) reikšmes;
console.log('===============================');
console.log(pinigine);
for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] === 0) {
        pinigine[i] = i;
    }
}
console.log(pinigine);
console.log(pinigine.length);

// 7 Į 1 uždavinio masyvą pridėti tiek naujų reikšmių (pinigų, atsitiktinių skaičių nuo 0 iki 10), kad masyvo ilgis būtų lygiai 30;
console.log('===============================');
do {
    pinigine.push(rand(0, 10));
} while (pinigine.length < 30)
console.log(pinigine);
console.log(pinigine.length);