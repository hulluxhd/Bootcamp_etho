# Projeto feito durante o Bootcamp Etho + McFadyen
Aplicação SPA utilizando o template da Netflix.

## Tecnologias e Libs
| Front | Back |
| ----------- | ----------- |
| Styled Components | Node |
| Redux | TS-Node | 
| React Router | Inquirer.js | 
| Yup | Express | 
| Toastify | MySQL2 | 
| Typescript | Typeorm | 
| Saga | Nodemon | 
| React Router Dom | Joi | 
| Slider | Morgan | 

### Cronograma
- [x] Semana 1 (Frontend) | 30/05 - 03/06
- [x] Semana 2 (Typescript)  | 06/06 - 10/06
- [x] Semana 3 (Backend) | 13/06 - 17/06
- [x] Semana 4 (Integração) | 20/06 - 24/06

### Projeto
O projeto tem por finalidade aprofundar o conhecimento em diversos fluxos de trabalho bem como a utilização de tecnologias em sua forma mais correta.

* Gerenciamento de estados globais por meio de redux 
* Tematização da aplicação
* Tipagem com typescript
* Gerenciamento de estados e efeitos colaterais com Redux + Saga (bom d++)
* Componentização com Styled-Components
* Utilização de hooks de performance (useMemo, useCallback) para maximizar a eficiência da aplicação
* Criação de interação com o usuário via CLI com Inquirer.js
* Modelagem de backend com node + express


## Estrutura
Há três branchs principais: frontend, backend e typescript.
- Na branch de `frontend` está o projeto de clone do netflix, utilizando as tecnologias supramencionadas.
- Na branch de `typescript` há um projeto de CLI com typescript.
- Na branch de `backend` está toda a estrutura de backend (CRUD) + banco de dados.

# Como rodar a aplicação 
1. Faça o clone da aplicação com `git clone https://github.com/hulluxhd/Bootcamp_etho.git`
2. Você irá precisar de duas instâncias locais para rodar o front-end e o back-end.
3. Rode um container com o docker localmente, usando `docker run --name netflix-db -p 3307:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql`
4. Abra seu gerenciador de banco de dados (como o mysql workbench) e conecte um novo banco na porta 3307: 
  - user: root
  - password: 123456
5. Crie uma nova database: 
  - `CREATE DATABASE netflix;`
  - `USE netlix;`
6. Rode o back-end. Lembre que está em uma branch diferente, e você precisará separá-la para poder rodar. 
  - vá para a branch de back usando `git checkout backend`
  - copie o conteúdo para outra pasta
  - digite `yarn run start` ou `npm run start`
7. Volte para a branch de front-end e execute a instância
  - `yarn start` ou `npm start`
8. Abra o postman ou insomnia e faça algumas requisições (localhost:3001/shows): 
  - requisição para criação da lista de filmes:
    ```
    {
      "title": "teste",
      "director": "teste",
      "actors": "teste",
      "description": "teste",
      "cover": "https://e.snmc.io/i/300/s/ba1069c598dacf0983be0dfa20c6fa6d/4835652",
      "category": "MOVIE",
    }
    ```
    Repita 6 vezes;
  - requisição para criação de séries:
    ```
    {
      "title": "teste",
      "director": "teste",
      "actors": "teste",
      "description": "teste",
      "cover": "https://e.snmc.io/i/300/s/ba1069c598dacf0983be0dfa20c6fa6d/4835652",
      "category": "TV_SHOW",
    }
    ```
    Repita 6 vezes.
  - requisição para criação de usuário (localhost:3001/users): 
     ```
     {
      "email": "teste@teste.com",
      "password": "123456"
     }
     ```
9. Faça login na aplicação e obtenha o token retornado pelo JWT no back-end. Você pode recuperá-lo pelo redux devtools ou pelo devtools do navegador (há um console.log para o token).
10. Volte para o postman ou insomnia e gere algumas requisições para adicionar títulos à lista de usuário. 
  - Passe o seu token no campo de autenticação da ferramenta, no tipo de autenticação 'bearer'. No body da requisição, passe um json como o do exemplo (localhost:3001/list):
    ```
      {
        showId: 1,
        loggedUser: {
          "email": "teste@teste.com",
          "password": "123456"
       }
      },
      {
        showId: 2,
        loggedUser: {
          "email": "teste@teste.com",
          "password": "123456"
       }
      },
      {
        showId: 3,
        loggedUser: {
          "email": "teste@teste.com",
          "password": "123456"
       }
      },
      {
        showId: 4,
        loggedUser: {
          "email": "teste@teste.com",
          "password": "123456"
       }
      },
      {
        showId: 5,
        loggedUser: {
          "email": "teste@teste.com",
          "password": "123456"
       }
      },
      {
        showId: 6,
        loggedUser: {
          "email": "teste@teste.com",
          "password": "123456"
       }
      }
    ```
11. Volte para a aplicação.

**Nota**: há dois contribuidores para o projeto pois muitas vezes continuo o trabalho do computador de um familiar.
