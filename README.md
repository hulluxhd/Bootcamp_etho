# Projeto feito durante o Bootcamp Etho + McFadyen
Estamos desenvolvendo uma aplicação SPA utilizando o template da Netflix.

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
* Gerenciamento de estados com Redux + Saga (bom d++)
* Componentização com Styled-Components
* Utilização de hooks de performance (useMemo, useCallback) para maximizar a eficiência da aplicação
* Criação de interação com o usuário via CLI com Inquirer.js
* Modelagem de backend com node + express


## Estrutura
Há três branchs principais: frontend, backend e typescript.
- Na branch de `frontend` está o projeto de clone do netflix, utilizando as tecnologias supramencionadas.
- Na branch `typescript` há um projeto de CLI com typescript.
- Na branch `backend` está toda a estrutura de backend + banco de dados.

# Como rodar a aplicação 
1. Faça o clone da aplicação com `git clone https://github.com/hulluxhd/Bootcamp_etho.git`
2. Você irá precisar de duas instâncias locais para rodar o front-end e o back-end.
3. Rode um container com o docker localmente, usando `docker run --name netflix-db -p 3307:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql`
4. Abra seu gerenciador de banco de dados (como o mysql workbench) e conecte um novo banco: 
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
8. Abra o postman ou insomnia e faça algumas requisições: 
  - requisição para criação de usuário:
    code

**Nota**: há dois contribuidores para o projeto pois muitas vezes continuo o trabalho do computador de um familiar.
