// type Void básico. o tipo inferido do TS  faz com que, caso não declaremos o tipo da função, ele automaticamente detecte que a função é void.

function logSuccess(successMsg: string) {
	console.log(successMsg);
}

logSuccess("it's running!");

// com arrow functions

const welcome = (welcomeMsg: string) => {
	console.log(welcomeMsg);
};
welcome("well done!");

// void em variáveis

let dogName: void;
// dogName = "Bidu" -> gera um erro, já que variáveis do tipo void não podem receber nenhum valor.
dogName = undefined;
