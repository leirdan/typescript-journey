// Exemplo 1: modificador public (quando é public, não precisa explicitar)

class Car {
	color: string;
	model: string;

	constructor(color: string, model: string){
		this.color = color;
		this.model = model;
	}
}

const fiatCar = new Car("red", "uno");

console.table(fiatCar);

// Exemplo 2: modificador private (a propriedade privada não é possível de ser acessada de fora da classe, apenas dentro de seus métodos).

class Client {
	name: string
	private cpf: number

	constructor(name: string, cpf: number) {
		this.name = name;
		this.cpf = cpf;
	}
	
}

const client1 = new Client("jack", 2809120)

console.table(client1);

// Exemplo 3: modificador protected (a propriedade protegida só pode ser acessada dentro da classe e por suas subclasses)

class Player {
	nick: string;
	protected mana: number;
	lifePoints: number;

	constructor(nick: string, mana: number, lifePoints: number) {
		this.nick = nick;
		this.mana = mana;
		this.lifePoints = lifePoints;
	}
}

const noah = new Player("noahtp", 42, 10);

console.table(noah)
// console.log(noah.mana) ==> erro pois o atributo protected não pode ser acessado diretamente

class Mage extends Player {
	intelligence: number

	public stats() {
		console.log(`player's name: ${this.nick}; player's mana: ${this.mana}`)
	}

	constructor(nick: string, mana: number, lifePoints: number, intelligence: number) {
		super(nick, mana, lifePoints);
		this.intelligence = intelligence;
	}
}

const lutz = new Mage("lutz", 24, 14, 17)

lutz.stats() // lista o atributo protegido mana pois ele é manipulado apenas dentro da classe Mage

