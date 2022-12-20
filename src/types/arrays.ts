// arrays comuns

const gradesBiology: number[] = [83, 85];
console.log(gradesBiology); // [ 83, 85 ]

// array object (passa o tipo do array entre os <>)

const gradesChemistry: Array<number> = [97, 85, 72];
console.log(gradesChemistry); // [ 97, 85, 72 ]
console.log(gradesChemistry[1]); // 85

// adicionando elementos com push

const colours: Array<String> = ["navy blue", "maroon", "cyan"];
colours.push("burning red");
console.log(colours); // [ 'navy blue', 'maroon', 'cyan', 'burning red' ]

// identificar tamanho do array

console.log(colours.length); // 4

// array com Spread Operator:
// Spread Operator é uma forma de repetir os valores anteriores do array e adicionar novos após.

let array: Array<number> = [
	0, 2, 13, 12, 13, 2412, 52, 5325, 325, 8, 6784, 7458, 569, 24, 62, 6, 560854, 62305, 2360547,
	540640, 532506, 6, 2306437, 6570346, 32052, 346, 547, 7, 52342
];

array = [...array, 111, 222, 333, 444, 555]; // spread operator é realizado com ""...nomeDoArray"

console.log(array);

// iterado sobre um array; existem inúmeras formas

const languages: Array<String> = ["C++", "Javascript", "Lua", "Java"];

// a) iterando com "map"; cria um novo array como resultado
languages.map((element) => {
	console.log(element);
});

// b) iterando com "forEach"; diferente do .map, não cria um novo array
languages.forEach((element) => {
	console.log(element);
});
