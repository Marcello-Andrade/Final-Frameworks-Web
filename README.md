# Bookshelf Manager

Sistema completo de gerenciamento de biblioteca desenvolvido com **Next.js 15**, **TypeScript**, **Prisma ORM** e **SQLite**.

O sistema permite que usuários realizem autenticação, consultem o catálogo de livros, efetuem empréstimos, devoluções e acompanhem seus empréstimos ativos por meio de uma interface moderna e responsiva.

---

# Sobre o Projeto

Este projeto foi desenvolvido como Trabalho Final da disciplina de Frameworks Web, aplicando conceitos de desenvolvimento Full Stack, arquitetura em camadas, autenticação com JWT, banco de dados relacional utilizando Prisma ORM e boas práticas de desenvolvimento com TypeScript.

---

# Funcionalidades

## Autenticação

- Login de usuários
- Logout
- Autenticação utilizando JWT
- Senhas criptografadas com bcrypt
- Cookies HTTP Only
- Rotas protegidas

---

## Livros

- Listagem de livros
- Consulta de disponibilidade
- Visualização das informações do livro
- Capa do livro
- Categoria
- Autor

---

## Empréstimos

- Realizar empréstimos
- Devolver livros
- Atualização automática da disponibilidade
- Histórico de empréstimos
- Validação para impedir empréstimos duplicados
- Validação de livros indisponíveis

---

## Perfil do Usuário

- Dados do usuário
- Avatar
- Livros emprestados
- Empréstimos ativos

---

# Tecnologias Utilizadas

| Tecnologia | Finalidade |
|------------|------------|
| Next.js 15 | Front-end e Back-end |
| React | Interface do usuário |
| TypeScript | Tipagem estática |
| Prisma ORM | ORM |
| SQLite | Banco de dados |
| JWT | Autenticação |
| bcrypt | Criptografia de senhas |
| Tailwind CSS | Estilização |

---

# Estrutura do Projeto

```
src/
│
├── app/
│   ├── api/
│   ├── cart/
│   ├── profile/
│   └── page.tsx
│
├── common/
├── components/
├── context/
├── lib/
├── modules/
│   ├── auth/
│   ├── books/
│   └── loans/
│
└── prisma/
```

---

# Instalação

Clone o repositório

```bash
git clone https://github.com/Marcello-Andrade/Trabalho-Final-Frameworks-Web.git
```

Acesse o diretório do projeto

```bash
cd bookshelf-manager
```

Instale as dependências

```bash
npm install
```

---

# Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto.

```env
DATABASE_URL="file:./dev.db"

JWT_SECRET="sua-chave-secreta"
```

---

# Banco de Dados

Gerar o Prisma Client

```bash
npx prisma generate
```

Executar as migrations

```bash
npx prisma migrate dev
```

Popular o banco de dados

```bash
npx prisma db seed
```

---

# Executando a Aplicação

Modo de desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:3000
```

---

# Usuários para Teste

## Administrador

E-mail

```
admin@bookshelf.com
```

Senha

```
123456
```

---

## Cliente

E-mail

```
john@test.com
```

Senha

```
123456
```

---

# Endpoints da API

## Autenticação

| Método | Endpoint |
|---------|----------|
| POST | `/api/auth/login` |
| POST | `/api/auth/logout` |

---

## Livros

| Método | Endpoint |
|---------|----------|
| GET | `/api/books` |

---

## Empréstimos

| Método | Endpoint |
|---------|----------|
| GET | `/api/loans` |
| POST | `/api/loans` |
| PUT | `/api/loans/:id` |

---

# Fluxo de Autenticação

1. O usuário realiza login.
2. A senha é validada utilizando bcrypt.
3. Um token JWT é gerado.
4. O token é armazenado em um Cookie HTTP Only.
5. As rotas protegidas validam o token antes de processar as requisições.

---

# Modelo de Dados

## Usuário

| Campo | Tipo |
|--------|------|
| id | Int |
| name | String |
| email | String |
| password | String |
| role | String |
| avatar | String |
| phone | String |
| address | String |
| memberSince | String |

---

## Livro

| Campo | Tipo |
|--------|------|
| id | Int |
| title | String |
| author | String |
| isbn | String |
| price | Float |
| category | String |
| image | String |
| available | Boolean |

---

## Empréstimo

| Campo | Tipo |
|--------|------|
| id | Int |
| userId | Int |
| bookId | Int |
| createdAt | DateTime |
| returnedAt | DateTime |

---

# Funcionalidades Testadas

- Login de usuários
- Validação de JWT
- Rotas protegidas
- Empréstimo de livros
- Devolução de livros
- Atualização de disponibilidade
- Validação de credenciais inválidas
- Prevenção de empréstimos duplicados
- Validação de livros já devolvidos
- Validação de usuários inexistentes
- Validação de livros inexistentes

---

# Conceitos Aplicados

Durante o desenvolvimento deste projeto foram aplicados os seguintes conceitos:

- Desenvolvimento Full Stack
- REST API
- Next.js App Router
- React Context API
- TypeScript
- Prisma ORM
- SQLite
- JWT Authentication
- Cookies HTTP Only
- Criptografia de senhas com bcrypt
- Arquitetura em camadas
- Repository Pattern
- Service Layer
- Tratamento de exceções
- Relacionamento entre entidades

---

# Autor

Marcello Andrade

Estudante de Análise e Desenvolvimento de Sistemas

GitHub:

https://github.com/Marcello-Andrade

---

# Licença

Projeto desenvolvido exclusivamente para fins acadêmicos como Trabalho Final da disciplina de Frameworks Web.