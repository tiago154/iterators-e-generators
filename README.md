<p align="center">
  <a href="" rel="noopener">
 <img src="https://user-images.githubusercontent.com/10531605/90449872-b4cd8f80-e0be-11ea-8e34-ea125950bcf9.png" alt="Project logo"></a>
</p>

# Iterators e Generators

## 📝 Conteúdo

- [Descrição](#descrição)
- [Começando](#começando)
- [Exemplos](#exemplos)

## 🧐 Descrição <a name = "descrição"></a>

Repositório com intuito de exemplificar e descrever o funcionamento dos `Iterators` e `Generators` em Javascript

## 🏁 Começando <a name = "começando"></a>

### Pré-requisitos

- Node 12 or +

### Instalando

Clone o repostório

```bash
git clone git@github.com:tiago154/iterators-e-generators.git
```

Instale as dependências

```bash
npm install
```

## ⛏️ Exemplos <a name = "exemplos"></a>

### 🔁 Iterator

Um objeto é um iterator (iterador) quando sabe como acessar itens numa coleção, um por vez, enquanto mantém rastreada a posição atual em uma dada sequência. Em JavaScript um iterator é um objeto que oferece o método next(), o qual retorna o próximo item da sequência. Este método retorna um objeto com duas propriedades: done e value.

[01-iterator.js](https://github.com/tiago154/iterators-e-generators/blob/master/src/01-iterator.js)

Execute o comando:

```bash
npm run 01
```

### 🔁 Iterable

Um objeto é iterável (iterable), se ele define seu comportamento de iteração, como no caso de quais valores percorridos em um laço do tipo for..of. Alguns tipos embutidos, como o Array, ou o Map, têm um comportamento iterável padrão, enquanto outros tipos (como Object) não possuem.

Para que um objeto seja iterable, o objeto precisa implemntar o método `@@iterator`, significando que o objeto (ou um dos objetos na cadeia de prototipagem  - prototype chain) precisa ter uma propriedade com uma chave `Symbol.iterator`:

[02-iterable.js](https://github.com/tiago154/iterators-e-generators/blob/master/src/02-iterable.js)

Execute o comando:

```bash
npm run 02
```

Chamando um iterable implemetado pelo usuário com a função Next()

[03-iterable-call-next.js](https://github.com/tiago154/iterators-e-generators/blob/master/src/03-iterable-call-next.js)

Execute o comando:

```bash
npm run 03
```

Alguns objetos no JavaScript por padrão já implementam esse protocolo, como por exemplo:

- String
- Array
- Map
- Set
- arguments (dentro de funções)
- NodeList (no browser)

[04-native-iterables.js](https://github.com/tiago154/iterators-e-generators/blob/master/src/04-native-iterables.js)

Execute o comando:

```bash
npm run 04
```

### 🔁 Generator

Enquanto os iteradores são ferramentas muito úteis, sua criação requer um cuidado devido a necessidade de manter explícito seu estado interno. Generators provê uma alternativa poderosa: eles te permitem definir um algoritmo iterativo escrevendo uma função simples que pode manter seu estado próprio.

Generator é um tipo especial de função que trabalha como uma factory para iteradores. A função vira um generator se ela contém uma ou mais expressões `yield` e se ela usa a sintaxe `function*`.

Vale observar que não é possível definir um generator utilizando a sintaxe de arrow function, pois o JavaScript só reconhece que uma função define um generator através da declaração `function*`

Note que a execução das chamadas de `yield` são `lazy`, ou seja elas não são computadas todas de uma vez. A cada execução do iterador o estado da função permanece salvo e pode ser acessado nas execuções posteriores.

[05-generator.js](https://github.com/tiago154/iterators-e-generators/blob/master/src/05-generator.js)

Execute o comando:

```bash
npm run 05
```

[06-generator-with-params.js](https://github.com/tiago154/iterators-e-generators/blob/master/src/06-generator-with-params.js)

Execute o comando:

```bash
npm run 06
```

[07-generator-with-params.js](https://github.com/tiago154/iterators-e-generators/blob/master/src/07-generator-with-params.js)

Execute o comando:

```bash
npm run 07
```

### 🔁 Yield*

A expressão `yield*` é usada para delegar para outro objeto `generator` ou `iterable`.

[08-yield-with-asterisk.js](https://github.com/tiago154/iterators-e-generators/blob/master/src/08-yield-with-asterisk.js)

Execute o comando:

```bash
npm run 08
```

### 🔁 Desempenho CPU

Generators não são indicados para melhorar o desempenho bruto de CPU, pois outras implementações se sairão melhores

[09-cpu-performance.js](https://github.com/tiago154/iterators-e-generators/blob/master/src/09-cpu-performance.js)

Execute o comando:

```bash
npm run 09
```

### 🔁 Desempenho Memória

Mas se voce necessita trabalhar com grandes listas e não impactar a memoria de sua aplicação, um generator pode ser uma opção a ser utilizada.

##### Antes de executar os exemplos a seguir, utilize o comando `npm run generate-mock` e adicione a quantidade desejada de itens em mock na frente do comando.

Exemplo:

```bash
npm run generate-mock 1000000
```

No exemplo abaixo, o código irá manipular uma lista, realizar uma transformação de dados com o map e por fim salvar os dados. Podemos ver que o processamento é até rapido, mas o consumo de memória é bem alto.

[10-memory-usage.js](https://github.com/tiago154/iterators-e-generators/blob/master/src/10-memory-usage.js)

Execute o comando:

```bash
npm run 10
```

Nesse outro exemplo, é feita a mesma coisa, mas é utilizado um generator, onde a manipulação de dados é feita em pedaços. Dessa forma reduzimos o consumo de memória e não teremos problemas caso a quantidade de elementos da lista aumente.

[11-memory-usage.js](https://github.com/tiago154/iterators-e-generators/blob/master/src/11-memory-usage.js)

Execute o comando:

```bash
npm run 11
```
