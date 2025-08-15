# LojaProdutos

Aula 4 14.08.2025

Objetivo: Pegar o projeto da loja online e torná-lo completamente responsivo. Os passos serão os<br>
seguintes:<br>
● Instalando e Configurando o Bootstrap<br>
● Estruturando o Layout Principal com o Grid<br>
● Aplicando Responsividade na Lista de Produtos (Componente Pai)<br>
● Refinando os Detalhes do Produto com Flexbox e Media Queries<br>

Agora é com vocês: Atividade Prática: Adicionando Imagem e Melhorando o Layout do Produto<br>
Nossa página de detalhes do produto está funcional, mas um pouco sem graça. Uma loja online de verdade<br>
precisa de imagens! Vamos adicionar uma imagem para cada produto e organizar o layout para que a imagem e as informações fiquem lado a lado em telas grandes e uma embaixo da outra em telas de celular.<br>

Passos:<br>
● Em seu ProductService adicione o parâmetro imgUrl e use o site https://picsum.photos/.<br>
● Reestruture visualmente o Detalhe do Produto<br>
● Aplicando a Mágica do Flexbox e Media Queries onde achar conveniente.<br>
Bônus:<br><br>
Use o que você aprendeu sobre Property Binding e Event Binding.<br>
1. Adicione uma classe zoomed no CSS que aumenta ligeiramente o tamanho da imagem (transform: scale(1.05);).<br>
2. Use os eventos (mouseenter) e (mouseleave) na tag <img> para adicionar e remover dinamicamente a classe zoomed usando [class.zoomed], criando um efeito de zoom sutil quando o usuário passa o mouse sobre a imagem.<br>


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
