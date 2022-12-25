// Exemplo básico

const songHS = {
	title: "Boyfriends",
	artist: "Harry Styles",
	duration: 3.14,
	belongsTo: "Harry's House"
};

console.log(songHS);

// OBJETOS COMO PARAMETROS DE FUNÇAO

// defina a estrutura do objeto ao declará-lo como parâmetro
function listenSong(song: { title: string; artist: string }) {
	return `This song is called ${song.title}, created by ${song.artist}`;
}
console.log(listenSong(songHS));

// OBJETOS NOMEADOS

interface ISong {
	title: string;
	artist: string;
	duration: number;
}
// o parâmetro é um objeto song que tem a estrutura ISong
const guessTheSong = (song: ISong) => {
	return `This song is ${song.title} from ${song.artist}`;
};

// ao usar um objeto com uma interface, todos os atributos da interface devem ser listados
console.log(guessTheSong({ title: "Weekend", artist: "Liam Payne", duration: 3.11 }));

// OBJETOS COM TYPE ALIAS

type Song = {
	title: string;
	artist: string;
	duration: number;
};

const whatSong = (song: Song) => {
	return `This song is ${song.title} from ${song.artist}`;
};
// com um type, voce tambem precisa listar todos os atributos que nao sejam opcionais
console.log(whatSong({ title: "Two of Us", artist: "Louis Tomlinson", duration: 3.38 }));

// OPTIONAL EM OBJETOS

interface IAlbum {
	title: string;
	songs: number;
	artist: string;
	year?: number; // dado opcional
}

function listAlbum(album: IAlbum) {
	return "The album is called " + album.title + " - " + album.artist;
}

console.log(listAlbum({ title: "Renaissance", artist: "Beyonce", songs: 16 }));

// USO DO READONLY

interface IGenre {
	readonly name: string; // -> essa propriedade não poderá ser modificada
	origin: number;
}

function listGenre(genre: IGenre) {
	console.log(`The ${genre.name} has its origin in the ${genre.origin} year.`);
}

listGenre({ name: "Heavy Metal", origin: 1970 });

// HERANÇAS EM OBJECTS

interface IUser {
	username: string;
	email: string;
	password: string;
}

// quando uma interface herda (extends) a outra, as informações anteriores são herdadas e não é necessário redeclarar as propriedades
interface IStudent extends IUser {
	id_student: number;
}

interface ITeacher extends IUser {
	id_teacher: number;
}

const student: IStudent = {
	username: "leirdan",
	email: "uouleirdan@gmail.com",
	password: "*********",
	id_student: 24
};

// INTERSECÇÕES EM OBJECTS

type Dog = {
	breeds: string;
	personality: string;
};

type Horse = {
	heigth: number;
	color: string;
};

type Animal = Horse & Dog; // com a intersecção (&), o objeto que implementará o tipo/interface deverá ter todas as propriedades listadas.

const animal2: Animal = {
	heigth: 2.22,
	color: "Brown",
	breeds: "Fox Hound",
	personality: "Wild"
	// se tirar qualquer uma dessas, gerará um erro.
};

interface Proletarian {
	name: string;
	hobby: string;
}
interface Bourgeois {
	name: string;
	capital: string;
}

type Capitalism = Proletarian | Bourgeois; // quem implementa este tipo pode definir as propriedades de um, outro ou ambas

const citizen: Capitalism = {
	name: "Geralt",
	hobby: "Old school RPG"
};

console.log(citizen);

// GENERIC OBJECTS

type Reader = {
	name: string;
	favBook: string;
};
// a diferença entre Reader e Author é uma propriedade de Author
type Author = {
	name: string;
	favBook: string;
	isAuthor: boolean;
};

const reader: Reader = {
	name: "Andriel",
	favBook: "A Storm of Swords"
};

const author: Author = {
	name: "Andriel",
	favBook: "A Storm of Swords",
	isAuthor: true
};

// um genérico quer dizer que a função vai aceitar tanto informações de leitores quanto de autores; na verdade, voce definirá o tipo que vai ser passado ao chamar a função e colocar este tipo entre <>
function readBook<T>(reader: T): T {
	// T é o padrão para dizer que vai usar Generics
	return reader;
}
console.log(readBook<Reader>(reader));
console.log(readBook<Author>(author));
