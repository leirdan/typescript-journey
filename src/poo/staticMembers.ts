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

// Exemplo 03 - manipulando propriedades estáticas dentro da classe

type Genre = "classic rock" | "pop" | "black metal" | "hip hop" | "mpb";

class Album {
	public name: string;
	public year: number;
	public genre: Genre;
	private static distinctAlbums = 0;

	constructor(name: string, year: number, genre: Genre) {
		this.name = name;
		this.year = year;
		this.genre = genre;
		Album.distinctAlbums++;
		// a cada declaração, imprima o número de discos existentes no momento
		console.log(Album.distinctAlbums);
		/*
        como são duas declarações, é impresso:
        1
        2
        */
	}
}
const album01 = new Album("sgt pepper's lonely hearts club band", 1967, "classic rock");
const album02 = new Album("i loved you at your darkest", 2018, "black metal");
