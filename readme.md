# REPOSITÓRIO DE ESTUDOS SOBRE TYPESCRIPT

    - Não vou me ater à introdução sobre o typescript, vou direto ao código.

## 1. TIPOS BÁSICOS

### 1.1 TYPE ANNOTATION

-   Anotações que podem ajudar o compilador a verificar os tipos das variáveis.
-   Sintaxe: "**let variavel: TypeAnnotation = value**".
    -   O termo "TypeAnnotation" pode ser substituído por qualquer tipo do Typescript, como "number", "string", "tuple", etc.

### 1.2 TYPE BOOLEAN

-   Tipo que permite dois valores: _true_ ou _false_.
-   Sintaxe: **let isCorrect: boolean = true**
    -   Adendo: "boolean" e "Boolean" são diferentes. O primeiro é o tipo primitivo, o mais usado, enquanto Boolean é um tipo de objeto.

### 1.3 TYPE NUMBER

-   Tipo que corresponde a um conjunto de números (naturais, inteiros, flutuantes, infinitos, NaN, hexadecimais, octais, binários, etc.)
-   Sintaxe: **let result: number = 10**
    -   Observação: Para números hexadecimais, octais e binários o valor deve ser precedido por **0x**, **0o** ou **0b**, respectivamente. Exemplo: **let binary: number = 0b10110001**.

### 1.4 TYPE BIGINT

-   Tipo novo que representa números inteiros grandes. Por isso, é preciso alterar no tsconfig a opção de "target" e incluir o valor "esnext" ou "es2020.
-   O bigint não gera erros de arredondamento, sendo perfeito para trabalhar com valores monetários.
-   Sintaxe: **let distance: bigint = 3130192n**
    -   Adendo: deve-se sempre colocar o "n" no final. Para números hexadecimais, binários e octais se segue a mesma regra do number.
