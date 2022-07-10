console.log('=======================');

// 2. Sukurti klasę Pinigine. Konstruktoriuje sukurti dvi savybes popieriniaiPinigai ir metaliniaiPinigai. Parašyti metodą ideti(kiekis), kuris prideda pinigus į piniginę. Jeigu kiekis nedidesnis už 2, tai prideda prie metaliniaiPinigai, jeigu kitaip- prie popieriniaiPinigai. Parašykite metodą skaiciuoti(), kuris suskaičiuotų ir išvestų į konsolę popieriniaiPinigai ir metaliniaiPinigai sumą. Sukurti klasės objektą ir pademonstruoti veikimą. Nesvarbu kokios popierinės kupiūros ir metalinės monetos egzistuoja realiame pasaulyje.
class Wallet {
    constructor(paper = 0, metal = 0) {
        this.paper = paper;
        this.metal = metal;
    }
    insert(a) {
        if (a > 2) {
            return this.paper+= a;
        }
        return this.metal+= a; 
    }
    count() {
        return console.log(this.paper + this.metal);
    }
}

const pinigine = new Wallet;
console.log(pinigine);
pinigine.insert(10);
pinigine.insert(2);
console.log(pinigine);
pinigine.count();

// 3. Sukurti klasę Troleibusas. Konstruktoriuje sukurti savybę keleiviuSkaicius kuri yra lygi 0. Parašyti du metodus: ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius). O taip pat parašyti metoda vaziuoja(), kuris į konsolę išvestų troleibusu važiuojančių keleivių skaičių. Atkreipkite dėmesį, kad troleibusu važiuoti neigiamas keleivių skaičius negali.

class Trolley {
    constructor(keleiviuSkaicius = 0){
        this.keleiviuSkaicius = 0;
    }
    in(count) {
        if (count < 1) {
            return this.keleiviuSkaicius;
        }
        return this.keleiviuSkaicius+= count;
    }
    out(count) {
        if (count > this.keleiviuSkaicius) {
            return console.log(`Tiek zmoniu troleibuse nera, gali islipti tik ${this.keleiviuSkaicius} zmoniu`);
        } else if (count < 1) {
            return console.log(`Nurodytas netinkamas islipanciu zmoniu kiekis`);
        }
        return this.keleiviuSkaicius -= count;
    }
    rolling() {
        return console.log(`Troleibuse vaziuoja ${this.keleiviuSkaicius} keleiviu.`);
    }
}
const trulikas = new Trolley(6);
console.log(trulikas);
trulikas.in(12);
trulikas.rolling();
trulikas.out(12);
trulikas.rolling();

// 6. Patobulinti 2 uždavinio piniginę taip, kad būtų galima skaičiuoti kiek piniginėje yra monetų ir kiek banknotų. Parašyti metodą monetos(), kuris skaičiuotų kiek yra piniginėje monetų ir metoda banknotai() - popierinių pinigų skaičiavimui. Kiekvieną atskirą dėjimą (ideti(kiekis) metodo kvietimą) laikykite vienu banknotu ar viena moneta.

class Wallet2 {
    constructor(paper = 0, metal = 0, bankn = 0, mon = 0) {
        this.paper = paper;
        this.metal = metal;
        this.bankn = bankn;
        this.mon = mon;
    }
    
    insert(a) {
        
        if (a > 2) {
            this.paper+= a;
            this.bankn++;
        }
        else {
            this.metal+= a;
            this.mon++;
        }
        
        
    }
    count() {
        return console.log(this.paper + this.metal);
    }
    monetos() {
        console.log(this.mon);
    }
    banknotai() {
        console.log(this.bankn);
    }
    
}
const pinigine2 = new Wallet2;
console.log(pinigine2);
pinigine2.insert(10);
pinigine2.insert(2);
console.log(pinigine2);
pinigine2.count();





// 8. Sukurti klasę Stikline. Sukurti savybes turis ir kiekis. Turis turi būti pasirenkamas objekto kūrimo metu. Parašyti metodą ipilti(kiekis), kuris keistų savybę kiekis. Jeigu stiklinės tūris yra mažesnis nei pilamas kiekis- kiekis netelpa ir būna lygus tūriui. Parašyti metodą ispilti(), kuris grąžiną kiekį. Pilant išpilamas visas kiekis, tas kas netelpa, nuteka per stalo viršų.  Sukurti metodą stiklinejeYra(), kuris į konsolę atspausdintų kiek stiklinėje yra skysčio. Sukurti tris stiklinės objektus su tūriais: 200, 150, 100. Didžiausią pripilti pilną ir tada ją ispilti į mažesnę stiklinę, o mažesnę į dar mažesnę.

class Stikline {
    constructor(turis) {
        this.turis = turis ?? console.log(`Error, turis turi buti nurodytas kuriant stikline`);;
        this.kiekis = 0;
    }
    ipilti(kiekis) {
        if (kiekis > this.turis) {
             return this.kiekis = this.turis;
        }

        this.kiekis += kiekis;
         return this 
        //  this.kiekis = Math.min(this.turis, this.kiekis + kiekis); //variantas kaip parasyti be if`u
        // jeigu grazinam vel objekta tai callinus sita metoda prie jo galima kabinti dar 1 metoda ir t.t.
    }
    ispilti() {
        const kiekKiekio = this.kiekis;
        this.kiekis = 0;
        return kiekKiekio;
    }
    stiklinejeYra() {
        console.log(`Stiklineje yra ${this.kiekis}ml skyscio.`);
    }

}

const glass = new Stikline(200);
glass.ipilti(300)
glass.stiklinejeYra();
const glass1 = new Stikline(150);
const glass2 = new Stikline(100);

glass1.ipilti(glass.ispilti());
glass1.stiklinejeYra();
glass.stiklinejeYra();
glass2.ipilti(glass1.ispilti());
glass1.stiklinejeYra();
glass2.stiklinejeYra();
console.log([glass, glass1, glass2]);


function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 9. Sukurti klasę Grybas. Sukurti klasę Krepsys. Krepsys turi savybę dydis,kuriai konstruktoriuje yra priskiriama reikšmė 500 ir savybę prikrauta (kuri pradžioje lygi 0). Grybas turi tris savybes, kurios taip pat yra paskaičiuojamos konstruktoriuje: valgomas, sukirmijes, svoris. Kuriant Grybo objektą jo savybės turi būti atsitiktinai (rand funkcija) priskiriamos taip: valgomas- true arba false, sukirmijes- true arba false ir svoris- nuo 5 iki 45. Eiti grybauti, t.y. Kurti naujus Grybas objektus, jeigu nesukirmijęs ir valgomas dėti į Krepsi objektą, t.y. Vykdyti deti(grybas) metodą kol bus pririnktas pilnas krepšys nesukirmijusių ir valgomų grybų (gali būti truputį daugiau nei dydis).


class Grybas {
    constructor (valgomas, sukirmijes, svoris) {
        this.valgomas = !rand(0, 1);
        this.sukirmijes = !rand(0, 1);
        this.svoris = rand(5, 45);
    }
}


class Krepsys {
    constructor(dydis, prikrauta) {
        this.dydis = 500;
        this.prikrauta = 0;
    }

    deti(grybas) {
        if(grybas.valgomas && !grybas.sukirmijes) {
            this.prikrauta += grybas.svoris;
        }
        return this.prikrauta < this.dydis;
    }
}
// const grybas1 = new Grybas;
// console.log(grybas1.valgomas);
const krepsys = new Krepsys();
let count = 0;
while (krepsys.deti(new Grybas())){
    console.log('grybauju '+ count++);
}; // gamina true visada kol krepsys nevirsija 500 dydzio
console.log(krepsys);





// 4. (STATIC) Sukurti metodą keleiviuSkaiciusVisuoseTroleibusuose(), kuris rodytų bendrą keleivių skaičių visuose Troleibusas objektuose. Bendram kelevių skaičiaus skaičiavimui sukurkite statinį metodą bendrasKeleiviuSkaicius(keleiviuSkaicius), kuris pridėtų arba atimtų keleivius iš statinės savybės visiKeleiviai (kurioje yra įrašytas bendras keleivių skaičius). Taip pat atitinkamai modifikuokite metodus ilipa(keleiviuSkaicius) ir islipa(keleiviuSkaicius).

class Trolley1 {
    static TrolleyReg = [];
    static keleiviuSkaiciusVisuoseTroleibusuose() {
        const keleiviuSuma = this.TrolleyReg.reduce((total, item) => total + item.keleiviuSkaicius, 0);
        return console.log(keleiviuSuma);
    }

    static visiTroley(Trolley) {
        this.TrolleyReg.push(Trolley);
    }

    // static bendrasKeleiviuSkaicius(keleiviuSkaicius) {
    //     this.keleiviuSkaicius = this.keleiviuSkaicius + keleiviuSkaicius;
    // }
    constructor(keleiviuSkaicius = 0){
        this.keleiviuSkaicius = keleiviuSkaicius;
        this.constructor.visiTroley(this);
    }
    in(count) {
        if (count < 1) {
            return this.keleiviuSkaicius;
        }
        return this.keleiviuSkaicius+= count;
    }
    out(count) {
        if (count > this.keleiviuSkaicius) {
            return console.log(`Tiek zmoniu troleibuse nera, gali islipti tik ${this.keleiviuSkaicius} zmoniu`);
        } else if (count < 1) {
            return console.log(`Nurodytas netinkamas islipanciu zmoniu kiekis`);
        }
        return this.keleiviuSkaicius -= count;
    }
    rolling() {
        return console.log(`Troleibuse vaziuoja ${this.keleiviuSkaicius} keleiviu.`);
    }
}


const tr1 = new Trolley1(50);
const tr2 = new Trolley1(50);
const tr3 = new Trolley1(50);
tr1.out(15);
tr3.out(25);
console.log(Trolley1.TrolleyReg);
Trolley1.keleiviuSkaiciusVisuoseTroleibusuose();



//5. (MAP) Sukurti klasę PirkiniuKrepselis. Konstruktoriuje sukurti savybę turinys, kuri yra Map tipo objektas. Sukurti tris metodus: idetiSureli(kiekis), idetiPieno(kiekis), idetiDuonos(kiekis). Parašyti metodą krepselioTurinys(), kuris į konsolę išvestų produktų sąrašą (turinys kintamąjį). Pridėti tuos pačius produktus galima po kelis kartus, tokiu atveju produktų kiekis turėtų sumuotis.

class PirkiniuKrepselis {
    constructor(turinys) {
        this.turinys = new Map();
    }
    idetiSureliu(kiekis) {
        let sureliaiCount = this.turinys.get('Sureliai');
        console.log(sureliaiCount);
        sureliaiCount+= kiekis;
        return this.turinys.set('Sureliai', sureliaiCount);
    }
    idetiPieno(kiekis) {
        let pienasCount = 0;
        pienasCount+= kiekis;
        return this.turinys.set('Pienas', pienasCount);
    }
    idetiDuonos(kiekis) {
        let duonosCount = 0;
        duonosCount+= kiekis;
        return this.turinys.set('Duonos', duonosCount);
    }
}
const pirkiniai = new PirkiniuKrepselis;
pirkiniai.idetiSureliu(10);
pirkiniai.idetiPieno(10);
pirkiniai.idetiDuonos(10);
pirkiniai.idetiSureliu(15);
pirkiniai.idetiPieno(13);
pirkiniai.idetiDuonos(11);
console.log(pirkiniai);
const map = new Map();

map.set('Murka', 5);
map.set('Pilkis', 8);
map.set('Pukis', 4);

map.set('Pilkis', 9);

console.log(map.get('Pilkis'));
// map.delete('Pilkis');
console.log(map);
const masmap = [...map];
console.log([...map]);



// 7. (STATIC) Klasėje Kibiras1 (pirmas uždavinys) sukurti statinį metodą akmenuSkaiciusVisuoseKibiruose(), kuris rodytų bendrą visuose kibiruose pririnktų akmenų kiekį (visuose sukurtuose Kibiras objektuose). Skaičiuoti akmenim, kurie buvo surinkti visuose objektuose, sukurkite statini metodą bendrasAkmenuSkaicius(akmenuSkaicius), kuris pridėtų prie statinės savybės visiAkmenys (kurioje yra įrašytas ir saugomas bendras akmenų skaičius). Taip pat atitinkamai modifikuokite metodus prideti1Akmeni(),  pridetiDaugAkmenu(kiekis).

class Kibiras1 {
    static visiAkmenys = 0;


    static akmenuSkaiciusVisuoseKibiruose() {
        console.log(`Pririnkta viso: ${this.visiAkmenys} akmenu`);
    }

    static bendrasAkmenuSkaicius(akmenuSkaicius) {
        this.visiAkmenys += akmenuSkaicius;
    }

    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis++;
        this.constructor.bendrasAkmenuSkaicius(1);
    }
    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
        this.constructor.bendrasAkmenuSkaicius(kiekis);
    }
}
const k1 = new Kibiras1();
const k2 = new Kibiras1();
const k3 = new Kibiras1();

k1.pridetiDaugAkmenu(10);
k2.prideti1Akmeni();
k3.pridetiDaugAkmenu(9);
Kibiras1.akmenuSkaiciusVisuoseKibiruose();