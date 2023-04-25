function ApiVersion(version: string) {
	// factory: uma função (ApiVersion) que chama outra função (abaixo)
	return (target: any) => {
		Object.assign(target.prototype, { __version: version });
	};
}
@ApiVersion("2.23")
class Api {}

const api = new Api();
console.log(api.__version); // mesmo que acuse um erro, o ts-node-dev consegue executar
// saída: 2.23

// Attribute Decorator
function minLength(length: number) {
	return (target: any, key: string) => {
		let _value = target[key];

		// método de leitura
		const getter = () => {
			return _value;
		};
		// método de escrita
		const setter = (value: string) => {
			if (value.length < length) {
				throw new Error("valor mínimo não alcançado!");
			} else {
				_value = value;
			}
		};
		Object.defineProperty(target, key, { get: getter, set: setter });
	};
}

class Table {
	@minLength(5) // decorator personalizado
	name: string;

	constructor(name: string) {
		this.name = name;
	}
}
const t = new Table("songs");
// saída ok
