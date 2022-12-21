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

### 1.5 TYPE STRING

-   Um objeto que representa uma sequência de caracteres, que podem ser colocados entre aspas simples ou duplas.

### 1.6 TYPE ARRAY

-   Tipo que é uma lista ordenada de dados de um tipo específico. Um array pode ter apenas valores em texto, números, objetos ou quaisquer outros valores.
-   Sintaxe: **let array: Type[ ] = [ ]**;
    -   "type" pode ser substituído por string, number, etc., desde que esteja acompanhado dos colchetes.

### 1.7 TYPE TUPLE

-   Tipo que pode substituir um array ao representar uma coleção de muitos tipos de valores. As tuplas também podem ser passadas como parâmetros para funções, e tem um número fixo de elementos.
-   Sintaxe: **let tuple = [number, string, number, number, string, ...]**; primeiro declaramos a estrutura da tupla.

-   Em seguida, declaramos os valores dos campos de acordo com os tipos fornecidos em ordem: **tuple = [03, "hello", 1.43, 1213, "i know the end", ...]**

### 1.8 TYPE ENUM

-   Uma estrutura de dados não-ordenada que mapeia chaves-valores com o objetivo de enumerar esses valores.
-   Os Enums podem ser numéricos ou de String. É recoendado o uso apenas em situações que um procedimento aceita um conjunto LIMITADO de valores.
-   Sintaxe: **Enum TypeName {
    constant1, constant2, ...
    }**
-   Sua utilidade consiste em:
    -   Facilidade de mudar valores;
    -   Reduz erros;
    -   Existe apenas em tempo de compilação (não ocupa memória), e o tempo de execução será mais rápido;
    -   Permite criar constantes, personalizadas ou não.

### 1.9 TYPE ANY

-   Indicado para trabalhar com valores desconhecidos no momento. É um tipo que representa qualquer valor Javascript sem restrições.
-   É especialmente útil quando se espera um valor de alguma biblioteca de terceiros ou a entrada de um algum dado por meio do usuário.
-   Sintaxe: **let anyValue: any = "lalilulelou"**

### 1.10 TYPE UNKNOWN

-   Tipo introduzido para reduzir erros causados pelo Type Any.
-   A diferença de unknown para any é que **não é possível acessar propriedades de um valor de tipo unknown**.
-   Sintaxe: **let unknownValue: unknown = "Philosophers"**
