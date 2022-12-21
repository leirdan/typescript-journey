// ENUM NUMÉRICO: armazena valores como números.

enum Languages {
	Portuguese, // chaves
	French,
	English,
	Latin
}
console.log(Languages.Latin); // 3
console.log(Languages);
/*  saída:
{
  '0': 'Portuguese',
  '1': 'French',
  '2': 'English',
  '3': 'Latin'
  Portuguese: 0, // chave-valor
  French: 1,
  English: 2,
  Latin:3
}
*/

// STRING ENUM
enum Status {
	Strength = "Weak",
	Dexterity = "Agile",
	Constitution = "Get sick easily",
	Intelligence = "A machine",
	Wisdom = "Very perceptive",
	Charisma = "Sucks."
}
console.log(Status);
console.log(Status.Charisma); // 'Sucks.'

// acessando valores de um Enum

const enum Colours {
	NavyBlue,
	DarkGoldenRod,
	Yellow,
	DarkGreen
}

function listColours(Colour: Colours) {
	return `This is the ${Colour} colour.`;
}

console.log(listColours(Colours.DarkGoldenRod));
console.log(listColours(6)); // não deveria funcionar, já que não tem um elemento com o valor 6

// uso correto de um Enum

enum ContractStatus {
	Trainee,
	Intern,
	Junior,
	Senior
}

const juniorDev: ContractStatus = ContractStatus.Junior;
const trainee: ContractStatus = ContractStatus.Trainee;

if (trainee > juniorDev) {
	console.log("Trainee");
} else {
	console.log("Junior Dev");
}
console.log(ContractStatus[juniorDev]); // pega o nome da chave que guarda o valor do juniorDev
