// uso do never em Throw Exceptions

const logError = (err: string): never => {
	throw new Error(err);
};

console.log(logError("I fucked up, I know that, but Jesus.."));

// função que contém um loop infinito e é do tipo Never

const loop = () => {
	while (true) {
		console.log("Hello world...");
	}
};

// diferença do Never para o Void

const varVoid: void = undefined;
// o tipo void pode ter um valor undefined porque ele existe

// const varNever: never = undefined;
// o tipo never não pode ter nenhum valor pois só é usado em situações que nunca vão ocorrer.
