// MEMBROS ESTÁTICOS

// Exemplo 01

class Game {
	public static plays = 0; // propriedade estática

	constructor(private name: string, private genre: string) {
		// quando construir um novo objeto, aumente em 1 o valor de "plays"
		Game.plays++;
	}
}

const tlou = new Game("The Last of Us", "drama");
const sotc = new Game("Shadow of the Colossus", "adventure");

console.log(Game.plays); // 2, ou seja, 2 objetos foram criados

// Exemplo 02 - Propriedade privada

class OtherGame {
	private static plays = 0;
	constructor(private name: string, private genre: string) {
		// quando construir um novo objeto, aumente em 1 o valor de "plays"
		OtherGame.plays++;
	}

	public static getPlays(): number {
		return OtherGame.plays;
	}
}

const megaman = new OtherGame("megaman x2", "platform");

// console.log(OtherGame.plays) -> erro pois plays é privado, por isso precisa do método para acessar
console.log(OtherGame.getPlays()); // 1
