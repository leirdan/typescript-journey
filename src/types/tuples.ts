// uso simples

let animal: [string, string, number];
animal = ["Apollo", "White", 6]; // -> devemos declarar na ordem

console.log(animal);

// acessando algum valor da tupla

console.log(animal[2]); // 6

// forma alternativa de declarar tuplas: Labeled Tuples, muito importante para tornar o código mais legível

let character: [name: string, job: string, stats: number[]]; // sintaxe semelhante a de um objeto
character = ["Rupert", "Diviner", [8, 14, 13, 15, 12, 10]];
console.log(character);

// tupla com Spread Operator

let series: [string, ...string[]]; // é um modo de facilitar a escrita da tupla, para não precisar escrever 40 "string", é só declarar o primeiro valor do tipo que você quer, e depois usar o Spread  Operator "...type[]" para indicar que o resto dos elementos são de determinado tipo
series = [
	"The Walking Dead",
	"Them",
	"Game of Thrones",
	"Wednesday",
	"Sherlock BBC",
	"Friends",
	"The Originals"
];
console.log(...series); // usando o Spread Operator, é impresso não a tupla inteira, mas apenas os valores dela

//  tupla heterogênea e reprisando dados da tupla "series"

let detailsTupleSeries: [boolean, number, ...string[]];
detailsTupleSeries = [true, series.length, ...series]; // usar Spread Operador só são passados os VALORES da tupla.
console.log(detailsTupleSeries);
/* saída: 
[
  true,
  7,
  'The Walking Dead',
  'Them',
  'Game of Thrones',
  'Wednesday',
  'Sherlock BBC',
  'Friends',
  'The Originals'
]
*/

// função com tuplas

// são dois parâmetros, ou seja, duas tuplas diferentes!
const listAnimals = (names: string[], ages: number[]) => {
	return [...names, ...ages];
};

let list = listAnimals(["Bidu", "Sophie", "Bruno", "Marrone"], [10, 4, 3, 3]);
console.log(list);
// saída: [ 'Bidu', 'Sophie', 'Bruno', 'Marrone', 10, 4, 3, 3 ]

// exemplo final: Labered Tuples com Spread Operator aplicados numa função

type Address = // tipo Address pode receber duas tuplas diferentes
	[street: string, avenue: string] | [street: string, avenue: string, houseNumber: number];

function getAddress(...address: Address) {
	// devemos colocar Spread Operator no parâmetro para poder listar todas as propriedades do type Address
	return [...address];
}

console.log(getAddress("Rua Manoel Avelino", "Avenida Largo Azul", 24)); // a função getAddress pode ter duas possibilidades: receber 2 OU 3 parâmetros do tipo Address
// saída: [ 'Rua Manoel Avelino', 'Avenida Largo Azul', 24 ]
// se não usarmos Spread Operator no return, a saída será: [  ['Rua Manoel Avelino', 'Avenida Largo Azul', 24 ] ], já que não retornamos os valores e sim a tupla inteira.
