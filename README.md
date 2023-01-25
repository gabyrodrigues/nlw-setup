<h1 align="center">Habits</h1>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<br>

<p align="center">
  <img alt="projeto Habits" src=".github/cover.png" width="100%">
</p>

## 🚀 Iniciando o projeto

Clone o projeto e acesse a pasta.

```bash
$ git clone https://github.com/gabyrodrigues/nlw-setup.git
$ cd nlw-setup
```

Siga os passos abaixo, para instalar os serviços Web, Mobile e Server:

### Server

```bash
# Instalando as dependências do server
$ cd server
$ npm install

# Iniciando server do projeto 
$ npx prisma migrate deploy
$ npm run dev
```

### Web

```bash
# Instalando as dependências web
$ cd web
$ npm install

# Iniciando o projeto web
$ npm run dev
```
### Mobile

```bash
# Instalando as dependências mMobile
$ cd mobile
$ npm install

# Iniciando server do mobile
$ npx expo start
```
## ⚙️ Tecnologias

A aplicação Habits utiliza-se das seguintes tecnologias para o seu desenvolvimento:

&nbsp;

<p align="center">
  <a href= "https://html5.org/"><img alt="html 5 badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=E34F26&logo=HTML5&label=Markup Language&message=HTML5&color=E34F26"></a>
  <a href= "https://developer.mozilla.org/pt-BR/docs/Web/CSS"><img alt="CSS 3 badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=1572B6&logo=CSS3&label=Style&message=CSS3&color=1572B6"></a>
  <a href= "https://tailwindcss.com/"><img alt="Tailwind CSS badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=06b6d4&logo=Tailwind CSS&label=Style&message=Tailwind CSS&color=06b6d4"></a>
  <a href= "https://www.javascript.com/"><img alt="JavaScript badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=F7DF1E&logo=JavaScript&label=Language&message=JavaScript&color=F7DF1E"></a>
  <a href= "https://www.typescriptlang.org/"><img alt="TypeScript badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=3178c6&logo=TypeScript&label=Language&message=TypeScript&color=3178c6"></a>
  <a href= "https://nodejs.org/en/"><img alt="Node.js badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=339933&logo=Node.js&label=Runtime Environment&message=Node.js&color=3139933"></a>
  <a href= "https://reactjs.org/"><img alt="React badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=61dafb&logo=React&label=Framework&message=React&color=61dafb"></a>
  <a href= "https://reactnative.dev/"><img alt="React Native badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=61dafb&logo=React&label=Framework&message=React Native&color=61dafb"></a>
  <a href= "https://expo.dev/"><img alt="Expo badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=000020&logo=Expo&label=React tool&message=Expo&color=000020"></a>
  <a href= "https://www.fastify.io/"><img alt="Fastify badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=000000&logo=Fastify&label=Framework&message=Fastify&color=000000"></a>
  <a href= "https://axios-http.com/"><img alt="Axios badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=5a29e4&logo=Axios&label=HTTP Client&message=Axios&color=5a29e4"></a>
  <a href= "https://www.prisma.io/"><img alt="Prisma badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=2d3748&logo=Prisma&label=ORM&message=Prisma&color=2d3748"></a>
  <a href= "https://www.sqlite.org/index.html"><img alt="SQLite badge" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=003b57&logo=SQLite&label=Database&message=SQLite&color=003b57"></a>
  <a href= "https://www.figma.com/file/QQXvJRUjgkMA1gHHh63rFw/Habits-(i)-(Community)?t=ZIPBAGYzdRufIN0g-0"><img alt="link projeto no figma" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=F24E1E&logo=Figma&label=Designer&message=Figma&color=F24E1E"></a>
  <a href= "https://code.visualstudio.com/download"><img alt="vscode download" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=007ACC&logo=Visual Studio Code&label=IDE&message=Visual Studio Code&color=007ACC"></a>
  <a href= "https://github.com/prettier/prettier"><img alt="code formatter prettier" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=F7B93E&logo=Prettier&label=Code Formatter&message=Prettier&color=F7B93E"></a>
  <a href= "https://eslint.org/"><img alt="code standardization eslint" src="https://img.shields.io/static/v1?logoWidth=15&logoColor=4B32C3&logo=ESLint&label=Code Standardization&message=ESLint&color=4B32C3"></a>
</p>

## 💻 Projeto

Projeto fullstack de app de monitoramento de hábitos com calendário mostrando hábitos por dia com tonalidades de cores diferentes para identificar a conclusão de hábitos a cada dia. Possibilidade de criação e edição de conclusão de hábitos diariamente.

Possui as funcionalidades de:

- Calendário interativo com identificação de dia atual;
- Identificação de conclusão de hábitos nos dias, quanto mais roxo menos hábitos concluídos no dia;
- Possibilidade de criação de novos hábitos marcando os dias que o mesmo será monitorado;
- Edição (toggle) de hábitos por dia entre concluído e a concluir.
- Barra de progresso de hábitos por dia. Concluídos vs. a concluir.

![diagrama db](https://raw.githubusercontent.com/gabyrodrigues/nlw-setup/main/server/prisma/ERD.svg)

## 🔖 Layout

Você pode visualizar o layout do projeto através [DESSE LINK](https://www.figma.com/community/file/1195326661124171197). É necessário ter conta no [Figma](https://figma.com) para acessá-lo.

---

Feito com ♥ by Rocketseat :wave:
