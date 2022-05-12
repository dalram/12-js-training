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


// 8 Naudojant 1 uždavinio masyvą iš jo reikšmių sukurti dar du papildomus masyvus. Į vieną iš 1 uždavinio masyvo pridėti reikšmes mažesnes arba lygias 2 (monetas), o į kitą didesnes nei 2 (popierinius pinigus);

const monetos = [];
const popieriniai = [];

for (let i = 0; i < pinigine.length; i++) {
    if (pinigine[i] > 2) {
        popieriniai.push(pinigine[i]);
    } else if (pinigine[i] > 0 && pinigine[i] <= 2){
        monetos.push(pinigine[i]);
    }
}

console.log(monetos);
console.log(popieriniai);

const monetos1 = pinigine.filter(e => e <= 2 && e > 0);
const popieriniai1 = pinigine.filter(e => e > 2);
console.log(monetos1);
console.log(popieriniai1);
// 9 Sukurti masyvą (piniginę su dviem skyreliais) iš dviejų elementų, kurio pirmas elementas būtų masyvas iš 8 uždavinio su monetom, o antras elementas masyvas iš 8 uždavinio su popieriniais pinigais;
console.log('===============================');
const pinigineSuSkyreliais = [monetos, popieriniai];
console.log(pinigineSuSkyreliais);

// 10 Į 9 uždavinio masyvą, piniginę su dviem skyreliais, pridėti trečią skyrelį- masyvą su kortelėm: ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
const korteles = ['KIKA', 'Euro Vaistinė', 'Drogas', 'Ačiū', 'Lietuvos Geležinkeliai', 'Mano RIMI'];
pinigineSuSkyreliais.push(korteles);
console.log('===============================');
console.log(pinigineSuSkyreliais);

// 11 Korteles skyrelyje sudėlioti (išrūšiuoti) pagal abėcėlę;
console.log('===============================');
pinigineSuSkyreliais[2].sort();
console.log(pinigineSuSkyreliais);

// 12 Į kortelių skyrelį pridėti mokėjimo kortelių 'MasterCard', 'Visa' (su rand generuokite atsitiktines reikšmes 'MasterCard' arba 'Visa' ir rašykite į masyvą) iš skirtingų bankų tiek, kad skyrelis (masyvo ilgis) pasidarytų lygus 20;
const mokejimoKorteles = ['MasterCard', 'Visa'];
console.log('===============================');
do {
    pinigineSuSkyreliais[2].push(mokejimoKorteles[rand(0, 1)]);
} while (pinigineSuSkyreliais[2].length < 20)
console.log(pinigineSuSkyreliais);
console.log(pinigineSuSkyreliais[2].length);

// 13 Paskaičiuokite, kokio tipo kortelių ('MasterCard' arba 'Visa') yra daugiau;
let visaCount = 0;
let masterCount = 0;
for (let i = 0; i < pinigineSuSkyreliais[2].length; i++) {
    if (pinigineSuSkyreliais[2][i] === 'Visa') {
        visaCount++;
    } else if (pinigineSuSkyreliais[2][i] === 'MasterCard') {
        masterCount++;
    }
}
console.log(visaCount);
console.log(masterCount);

// 14 Sukurkite masyve (piniginėje) ketvirtą elementą (skyrelį) į kurį įdėkite 10 loterijos bilietų, kurių numerius sugeneruokite atsitiktinai su rand funkcija nuo 1000000000 iki 9999999999;
console.log('===============================');
pinigineSuSkyreliais.push([]);
console.log(pinigineSuSkyreliais);
for (let i = 0; i < 10; i++) {
    pinigineSuSkyreliais[3].push(rand(1000000000, 9999999999));
}
console.log(pinigineSuSkyreliais);

console.log('===============================');

// 15 Loterijos bilietų masyvą išrūšiuoti nuo didžiausio numerio iki mažiausio;
// https://www.javascripttutorial.net/javascript-array-sort/ kaip su sortu padaryti reiksmes nuo didziausios iki maziausios
pinigineSuSkyreliais[3].sort();
console.log(pinigineSuSkyreliais);

// 16 Į piniginės popierinių pinigų skyrelį įdėti 500 pinigų mažom kupiūrom ( generuoti atsitiktinius skaičius nuo 3 iki 10 ir dėti kaip naujus elementus, kol įdėta suma bus lygi 500);

let idetiPopieriai = 0;
let ideta500 = false;
let popierinisPinigas;
do {
    popierinisPinigas = rand(3, 10);
    idetiPopieriai += popierinisPinigas;
    if (idetiPopieriai < 500) {
        pinigineSuSkyreliais[1].push(popierinisPinigas);
    } else if (idetiPopieriai = 500) {
        pinigineSuSkyreliais[1].push(popierinisPinigas);
        ideta500 = true;
    } else {
        idetiPopieriai = idetiPopieriai - popierinisPinigas;
    }
    
} while (!ideta500)
console.log('===============================');
console.log(idetiPopieriai);
console.log(pinigineSuSkyreliais);


// 17 Patikrinti ar ką nors laimėjote. Bilieto numerius dalinkite iš 777 ir jeigu numeris išsidalins be liekanos - jūs laimėjote! Suskaičiuokite, kiek buvo laimingų bilietų.
let laimingiBilietai = 0;
for (let i = 0; i < pinigineSuSkyreliais[3].length; i++) {
    if (pinigineSuSkyreliais[3][i] % 777 === 0) {
        laimingiBilietai++;
        console.log(`Laimingas bilietas!`);
    }
}
console.log(laimingiBilietai);

// 18 Sukurkite penktą skyrelį ir į jį sudėkite nuotraukas: ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'] ir jas išrūšiuokite pagal žodžių ilgį taip, kad pirma eitų trumpiausi žodžiai;

const nuotraukos = ['šuo', 'katė', 'automobilis', 'namas', 'kiemas'];
console.log(nuotraukos.sort((a, b) => a.length - b.length));
pinigineSuSkyreliais.push(nuotraukos.sort((a, b) => a.length - b.length));
// console.log(pinigineSuSkyreliais);