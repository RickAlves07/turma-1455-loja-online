# LojaProdutos

Aula 3 12.08.2025

Objetivo: Vamos criar juntos uma página que mostra detalhes de um produto, utilizando Lifecycle Hooks
para monitorar mudanças e Pipes para formatar os dados. Os passos serão os seguintes:
● Setup do projeto
● Criando o Serviço e os Componentes
● Construindo a lista de produtos (Componente Pai)
● Construindo detalhes de um produto (Componente filho)
● Usar pipes nativos de data e moeda
● Criar um Pipe personalizado para informação de estoque

Agora é com vocês: Exibindo Preços Promocionais
Nossa loja precisa de uma funcionalidade essencial: promoções! Vamos evoluir nossa página de detalhes
para que ela possa exibir um preço com desconto para produtos selecionados e um selo de "Em Promoção"
para chamar a atenção do cliente.
Passos:
● Em seu ProductService adicione em alguns (pra gente ver a diferença) as propriedades onSale:
boolean e discount: 0.15 (15% de desconto).
● Calcule o desconto usando ngOnChanges
● Crie uma Pipe customizada para usar o selo "Em Promoção!"
● Atualize o template adicionando a lógica de exibição de preço.
Bônus:
Modifique o pipe saleBadge para que ele possa receber um texto customizado como argumento.
● Se nenhum texto for passado, ele deve usar "EM PROMOÇÃO!" como padrão.
● Se um texto for passado (ex: {{ product.onSale | saleBadge:'OFERTA ESPECIAL!' }}), ele deve
exibir esse novo texto.
Dica: Pesquise como adicionar argumentos (...args: any[]) ao método transform de um pipe


This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.15.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
