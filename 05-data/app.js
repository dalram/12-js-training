// https://docs.google.com/document/d/18fn5fVSlDmZGYl6UiANbpeMzg-UYAn5PWm0KZf05dlQ/edit
console.log('=====================================');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decimalRand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return +(Math.random() * (max - min + 1) + min).toFixed(2);
}

const products = ['Dviratis', 'Triratis', 'Žvakidė', 'Stalas', 'Kėdė', 'Knygų lentyna', 'Paveikslas su rėmu', 'Veidrodis', 'Keturių vietų palapinė', 'Pripučiama valtis', 'Meškerė karosams gaudyti', 'Planšetė', 'Pastatoma lempa', 'Vazonas', 'Baterijų pakrovėjas', 'Pagalvių komplektas', 'Oro drėkintuvas', 'Oro sausintuvas', 'Kavinukas elektrinis', 'Kilimas 2 X 3 metrų', 'Kilimėlis kojoms valyti', 'Užuolaidos', 'Vėjo malūnas', 'Dažai sienoms', 'Dažai luboms', 'Medinė dėžė'];
// const produktuMasyvas = [{title: products[rand(0, 25)],
//     price: decimalRand(1, 100),
//     amount: rand(1, 20),
//     total: function (){return this.price * this.amount},
    
// }];
// console.log(produktuMasyvas);
// console.log(produktuMasyvas[0].total());
const produktuMasyvas = [];
const produktuMasyvoIlgis = rand(1, 10);
for (let i = 0; i < produktuMasyvoIlgis; i++) {
    produktuMasyvas.push({title: products[rand(0, 25)],
                        price: decimalRand(1, 100),
                        amount: rand(1, 20),
                        total: function (){return this.price * this.amount},  
                    });
        
}

console.log(products.length);
const saskaituMasyvas = [];
for (let i = 0; i < 100; i++) {
    
    saskaituMasyvas.push({number: `INV${i + 1}`,
                        products: produktuMasyvas,
                        total: function() {

                        },
                        vat: function(){return this.total * 0.21},
                        grandTotal: function(){return this.total + this.vat}});
    
}

console.log(saskaituMasyvas);
console.log(saskaituMasyvas.length);
console.log(produktuMasyvas);
console.log(produktuMasyvas.length);
console.log(produktuMasyvas[0].total());

// viso produktu masyvo suma

let produktuMasyvoSuma = 0;
for (let i = 0; i < produktuMasyvas.length; i++) {
    produktuMasyvoSuma += produktuMasyvas[i].total();
}
console.log(produktuMasyvoSuma);



