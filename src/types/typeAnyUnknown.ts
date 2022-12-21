// ANY: não gera nenhum erro em tempo de compilação

let anyValue: any = true;
anyValue = 0b01010100110;
anyValue = "Renaissance";
console.log(anyValue.toUpperCase()); // RENAISSANCE
anyValue = () => {
	return 0;
};
console.log(anyValue()); // any pode ser até mesmo uma função.

// UNKNOWN:

let unknownValue: unknown = "Philosophers";

console.log(unknownValue);
// console.log(unknownValue.toUpperCase()) -> fazer isso gera um erro, pois os tipos unknown não tem propriedades.

// ASSERÇÃO DE TIPOS:  caso necessite tratar uma variável unknown como sendo de outro tipo e acessar suas propriedades.
// sintaxe mais usada: as-sintax. (unknownValue as tipoDesejado).propriedadeASerAcessada
let nihilistBlues: unknown = false;
nihilistBlues = "I can't hide from the nihilist in my door";
nihilistBlues = 5.25;
nihilistBlues = false;
if (typeof nihilistBlues === "string") {
	console.log((nihilistBlues as string).toUpperCase()); // I CAN'T HIDE FROM THE NIHILIST IN MY DOOR
} else if (typeof nihilistBlues === "number") {
	console.log((nihilistBlues as number).valueOf()); // 5.25
} else {
	console.log(
		`Error - a number or string was expected, but instead got a ${typeof nihilistBlues} `
	);
}
