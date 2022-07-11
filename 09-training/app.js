console.log('============================');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// 5 Sugeneruokite du masyvus, kurių reikšmės yra atsitiktiniai skaičiai nuo 100 iki 999. Masyvų ilgiai 100. Masyvų reikšmės turi būti unikalios savo masyve (t.y. neturi kartotis).


const firstArray = Array.from({length: 100},() => rand(100, 999));
console.log(firstArray);
const array = [5, 11, 41, 17, 12, 30, 3, 9, 15];

console.log('Labas rytas, Lietuva!'.slice(6, 11).split(''));

const rytas = ['Labas', 'rytas', 'Lietuva'];
console.log(rytas.join(' ,'));
console.log(rytas.includes('rytas'));
console.log(rytas.unshift('UNSHIFT'));
console.log(rytas);
console.log(rytas.shift('UNSHIFT'));
console.log(rytas);

console.log(array.map(element => element > 30 ? element + 9 : element));
console.log(array);
// 'a', 'e', 'i', 'o', 'u'
const word = 'akfheujfkgiaaaofmmfkdfuaiiie';
function getTheVowels(word) {
    return word.split('').filter(i => i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u');
  }

  console.log(getTheVowels(word));
