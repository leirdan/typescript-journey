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
	set setTitle(setTitle: string) {
		this.title = setTitle;
	}
	set setAuthor(setAuthor: string) {
		this.author = setAuthor;
	}
}

const dune = new Book("Dune", "Tolkien");
dune.setAuthor = "Frank Herbert";

console.log(dune.getTitle); // Dune
console.log(dune.getAuthor); // Frank Herbert

// Exemplo 2: com propriedades privadas

class Student {
	private name: string = "Andriel";
	private id: number;
	private course: string;

	get getName(): string {
		return this.name;
	}

	get getCourse(): string {
		return this.course;
	}

	set setCourse(setCourse: string) {
		this.course = setCourse;
	}

	constructor(id: number, course: string) {
		this.id = id;
		this.course = course;
	}
}

const pupil = new Student(20204013901717, "Psychology");
// única forma de acessarmos propriedades privadas de fora é utilizando getters
console.log(pupil.getName); // Andriel
console.log(pupil.getCourse); // Psychology
pupil.setCourse = "IT";
console.log(pupil.getCourse); // IT
