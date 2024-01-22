# 🎬 API Movies
 criada no intuito de praticar o framework express e o ORM TypeORM. Uma API de filmes onde o CRUD consiste em criar, fazer a busca por paginação, deletar e atualizar um filme. Foi utilizado o SGBD PostgreSQL para banco de dados relacional.

## Como Rodar a API?

### Docker:

1. **Configure o arquivo `.env`:**
   - Crie um arquivo `.env` na raiz do projeto.
   - Copie o conteúdo do arquivo `.env.example` para dentro do novo arquivo `.env`.
   - Preencha as variáveis de ambiente no arquivo `.env` conforme indicado abaixo:

   ```env
   PORT=3000
   PGPORT=5432
   DATABASE_URL=postgres://postgres:1234@db:5432/movies
   SECRET_KEY=(insira_sua_chave_secreta)
   EXPIRES_IN=1hr
   POSTGRES_USER=postgres
   POSTGRES_DB=movies
   POSTGRES_PASSWORD=1234

### Execute o seguinte comando no terminal:
  - Docker-compose up

## Documentação:
 ##  Documentação:
  - Acesse a documentação através deste link após estar executando a API: http://localhost:3000/api-docs/
  - Obs: Coloque a porta que você configurou, neste exemplo estou utilizando a porta 3000. 

 

