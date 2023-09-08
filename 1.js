let i = 0;
let obratna = "";
const obraten = function (string) {
  while (i < string.length / 2) {
    obratna[i] = string[string.length - i - 1];
    i++;
    console.log(obratna);
  }
  return obratna;
};

console.log(obraten("svetoslav"));
