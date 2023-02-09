// Exemplo 1: Getter e Setter

class Book {
	public title: string;
	public author: string;

	constructor(title: string, author: string) {
		this.title = title;
		this.author = author;
	}

	// getter
	get getTitle(): string {
		return this.title;
	}

	get getAuthor(): string {
		return this.author;
	}

	//setter
	setTitle(setTitle: string) {
		this.title = setTitle;
	}
	setAuthor(setAuthor: string) {
		this.author = setAuthor;
	}
}

const dune = new Book("Dune", "Tolkien");
dune.setAuthor("Frank Herbert");

console.log(dune.getTitle); // Dune
console.log(dune.getAuthor); // Frank Herbert
