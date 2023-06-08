# <p align="center">App de Receitas 📌</p>

<br>

## 🚀 Descrição do Projeto

O App de Receitas é uma aplicação desenvolvida em React que permite aos usuários visualizar, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas de comidas e bebidas. O projeto utiliza tecnologias modernas do ecossistema React, como Hooks e Context API, além de Redux para gerenciamento de estado. 

O layout da aplicação foi projetado para dispositivos móveis, e todos os protótipos foram desenvolvidos com foco em telas menores. O aplicativo utiliza duas APIs distintas, uma para comidas e outra para bebidas, sendo elas a TheMealDB API e a TheCocktailDB API.

Além disso, o projeto inclui o uso do ESLint para análise estática do código e a ferramenta Trello para organização das atividades e divisão de tarefas.

<br>

##  ✔️ Funcionalidades

O App de Receitas possui as seguintes funcionalidades:

- **Login:** permite que o usuário faça login com seu email e senha.
- **Tela principal de receitas de comidas:** exibe as receitas de comidas disponíveis.
- **Tela principal de receitas de bebidas:** exibe as receitas de bebidas disponíveis.
- **Detalhes de uma receita de comida:** exibe os detalhes de uma receita de comida específica.
- **Detalhes de uma receita de bebida:** exibe os detalhes de uma receita de bebida específica.
- **Receita em progresso de comida:** exibe a receita de comida em andamento, permitindo acompanhar as etapas de preparação.
- **Receita em progresso de bebida:** exibe a receita de bebida em andamento, permitindo acompanhar as etapas de preparação.
- **Perfil:** exibe o perfil do usuário.
- **Receitas feitas:** exibe as receitas que o usuário já concluiu.
- **Receitas favoritas:** exibe as receitas que o usuário favoritou.

<br>

## :construction: Rotas

A aplicação utiliza as seguintes rotas:

- Tela de login: **"/"**
- Tela principal de receitas de comidas: **"/meals"**
- Tela principal de receitas de bebidas: **"/drinks"**
- Tela de detalhes de uma receita de comida: **"/meals/:id-da-receita"**
- Tela de detalhes de uma receita de bebida: **"/drinks/:id-da-receita"**
- Tela de receita em progresso de comida: **"/meals/:id-da-receita/in-progress"**
- Tela de receita em progresso de bebida: **"/drinks/:id-da-receita/in-progress"**
- Tela de perfil: **"/profile"**
- Tela de receitas **feitas: "/done-recipes"**
- Tela de receitas favoritas: **"/favorite-recipes"**

<br>

## :briefcase: Instalação e Execução

Para executar o projeto, siga as instruções a seguir:

1. Faça o clone do repositório:

   ```
   git clone <url_do_repositório>
   ```

2. Instale as dependências do projeto:

   ```
   npm install
   ```

3. Execute o projeto:

   ```
   npm start
   ```

4. Acesse o aplicativo no navegador em `http://localhost:3000`.

<br>

5. Após executar o comando **npm start**, a aplicação será aberta em seu navegador padrão. Na tela inicial, você será solicitado a fazer login. Após o login, você será levado à página de receitas, onde poderá navegar pelas diferentes categorias e filtrar receitas por nome, ingrediente ou primeira letra. Cada receita possui uma página de detalhes onde você pode ver informações adicionais. Você pode iniciar a receita, marcar as etapas concluídas, favoritar ou compartilhar a receita. Você também pode acessar as páginas de receitas favoritas, receitas feitas ou a tela de perfil, que também tem recomendações!


<br>

## LocalStorage (Armazenamento Local)

O uso do LocalStorage é necessário para garantir que as informações não sejam perdidas caso a página seja atualizada.
Os seguintes dados devem ser armazenados no LocalStorage:

- Chave "user": Contém o email do usuário.
- Chave "doneRecipes": Contém as receitas concluídas, incluindo informações como ID, tipo (comida ou bebida), nacionalidade, categoria, nome, imagem, data de conclusão e tags.
- Chave "favoriteRecipes": Contém as receitas favoritas, incluindo informações como ID, tipo (comida ou bebida), nacionalidade, categoria, nome e imagem.
- Chave "inProgressRecipes": Contém as receitas em progresso, incluindo informações sobre os ingredientes utilizados.

<br>

## Observações Técnicas

- A biblioteca "clipboard-copy" é utilizada nos componentes que possuem a funcionalidade de favoritar comidas ou bebidas, permitindo copiar as informações da receita para a área de transferência.

- O projeto inclui testes unitários e de integração utilizando a biblioteca "React Testing Library", com o objetivo de alcançar uma boa cobertura de testes.

<br>

## Testes

Para executar os testes e verificar a cobertura de testes do projeto, utilize o seguinte comando:

```
npm run test-coverage
```

Você também pode verificar a cobertura de testes de uma página específica, substituindo "caminho/da/Pagina" pelo caminho do arquivo da página de interesse:

```
npm run test-coverage -- --collectCoverageFrom=caminho/da/Pagina
```

Por exemplo, para verificar a cobertura de testes da página de Login, execute o comando:

```
npm run test-coverage -- --collectCoverageFrom=src/pages/Login.js
```
<br>

Certifique-se de que você possui o Node.js e o npm instalados em seu ambiente de desenvolvimento.

Espero que essas instruções atendam aos requisitos fornecidos. Se você tiver alguma dúvida adicional, sinta-se à vontade para perguntar.

<br>

### Conclusão

O App de Receitas é uma aplicação completa que permite aos usuários descobrir, favoritar e acompanhar o progresso de receitas de comidas e bebidas. Com uma interface intuitiva e funcionalidades úteis, o aplicativo oferece uma experiência agradável para os amantes da culinária.
