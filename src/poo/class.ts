// CLASSES

// exemplo 1: sintaxe básica com construtor

class Proletarian {
	name: string;
	job: string;
	age: number;

	constructor(name: string, job: string, age: number) {
		this.name = name;
		this.job = job;
		this.age = age;
	}
	// método
	message(): string {
		return `${this.name}, you are ${this.age} years old.`;
	}
}

const robert = new Proletarian("robert", "advocate", 34);
console.log(robert.message()); // robert, you are 34 years old.

// exemplo 2: sem construtor

class User {
	id!: number;
	login!: string;
}

const user = new User(); // criar a instância
// inicializar
user.id = 1;
user.login = "leirdan";
// acessar campos

console.log(`the ${user.login} student has the ${user.id} id.`);
