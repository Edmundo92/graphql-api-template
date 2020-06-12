# graphql-api-template
Template de uma API GraphQl para projetos pessoais

## 🚀 Tech

- [NodeJS](https://nodejs.org/)
- [Graphql](https://graphql.org/)
- [Apollo-Server](https://www.apollographql.com/docs/apollo-server/)
- [Knex query builder](http://knexjs.org/)
- [Objection ORM](https://vincit.github.io/objection.js/)

## ✋🏻 Pre-requisites

- [Node.js](https://nodejs.org/)


## 🔥 Instale & Execute

1. Clone o repo;
2. Navegue até a raíz do projeto;
3. Execute `npm install` para instalar as dependências;
4. Execute `npm run start` para executar o app;
5. Configure o arquivo knexfile.ts com as configurações de banco da sua máquina;

## Estrutura do projeto

  - **`WEB-QERO-TS`**: Contém a estrutura de arquivos e pastas da API.
    - **`src`** 
      - **`app`**:
        - **`Models`**: Models representando entidades do banco de dados
        - **`Resolvers`**: Concentração resolvers da api
        - **`Schemas`**: Concentração dos schemas da api
        - **`Services`**: Onde será escrita a lógica de negócio
        e estilos. Não devem conter estado e devem estar aqui apenas caso
        sejam reutilizados em várias áreas distintas do app.
      - **`base`**: Trechos ou bloco de códigos reutilizáveis, a titulo de exemplo pode ter um BaseController se será extendido por todos os controllers da api.
      - **`config`**: Configurações gerais do projeto (estudar possibilidade de retirada do diretório)
      - **`db`**: Configuração do banco de dados e do knexfile
        - **`Migrations`**: Arquivos de migration
       
      - **`graphql`**: Configurações e criação de directivas e outros recursos do graphql.
