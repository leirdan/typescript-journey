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
