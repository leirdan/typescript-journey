/* REST PARAMETERS: recebe quantos parâmetros forem necessários; sintaxe são esses ... */
// exemplo 1: fazer fatorial de números

function factorial(...numbers: number[]) {
	// define os rest parameters e o tipo deles como um array (já que são muitos)
	let result = 1;
	numbers.forEach((item) => (result = result * item));
	return result;
}

console.log(factorial(3, 2, 1)); // 6
console.log(factorial(5, 4, 3, 2, 1)); // 120

// exemplo 2: listar humores

function moods(text: string, ...emojis: string[]) {
	return text + emojis.join(",");
}

console.log(moods("sometimes i'm ", "😈", "😎", "🤫"));

// exemplo 3: com classes

class Product {
	public async index(...products: string[]): Promise<void> {
		for (const product of products) {
			console.log(product);
		}
	}
}

const infoDepartment: Product = new Product();

infoDepartment.index(
	"all the current products of the IT department: ",
	"-> notebook",
	"-> ssd",
	"-> motherboard",
	"-> Delphi's book"
);
/* saída:
all the current products of the IT department: 
-> notebook
-> ssd
-> motherboard
-> Delphi's book */
