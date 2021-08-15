<img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">


<h3 align="center">
    Desafio Tecnico Jet (Backend)
</h3>


<p align="center">
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#teste-da-aplicação">Testes</a>
 <a href="#autor">Autor</a>
</p>

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- Node.js
- TypeScript
- MySql
- Jest

## Teste Local
### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [MySql](https://dev.mysql.com/downloads/mysql/), além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Rodando o Backend (Servidor)

```bash
# Clone este repositório
$ git clone https://github.com/HebertRyann/challenger-jet-backend

# Acesse a pasta do projeto no terminal/cmd
$ cd challenger-jet-backend

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor ficara disponivel em http://localhost:3333
```
### Teste da Aplicação
```bash
Para roda os teste basta digitar yarn test ou npm run test
# Os teste checam as rotas de controle de cadastro de um operador,
# a listagem de operadores cadastrados, também checam a rota de controle de
# cadastro de uma distribuição e a listagem de todas as distribuições
```

### Rotas da aplição

#### Operator (operador)

```bash
# Listar todos os operadores
 GET http://localhost:3333/operator

# Criar um operador
 POST http://localhost:3333/operator 
# ex:
# post('/operator, {
#  name: opertorName,
# })

# Deletar operador
 DELETE http://localhost:3333/operator/:id
# ex:
# delete(/operator/operatorNumber)

# Alterar nome do operador
 PUT http://localhost:3333/operator
# ex: 
#  put('/operator, {
#   "name": operatorName,
#   "modification": modificationName
})
```

#### Clients (Client)

```bash
# Import arquivo csv e adicona no banco de dados
 POST http://localhost:3333/clients
# ex:
#  api.post('/clients', file, {
#   headers: {
#      'Content-Type': 'multipart/form-data'
#    }
#  })
```

#### Distribution (Distribuição)
```bash
# Executa a destribuição de cliente entre os operadores
 GET http://localhost:3333/distribution

# Lista as distribuições feitas
 GET http://localhost:3333/distribution/list

# Disponibiliza um arquivo csv com as distribuiçoes realizadas
 GET http://localhost:3333//distribution/export

```


### Autor
---

<a href="https://www.linkedin.com/in/hebertryansantos/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/58072948?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Hebert Santos</b></sub></a> <a href="https://www.linkedin.com/in/hebertryansantos/" title="Perfil">🚀</a>


Feito com ❤️ por Hebert Santos 👋🏽 Entre em contato!
#### Para conferir mais sobre meu trabalho e ver mais projetos acesse meu [Portfolio](https://hebertryann.github.io/portfolio/)

[![Linkedin Badge](https://img.shields.io/badge/-Hebert-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/hebertryansantos/)](https://www.linkedin.com/in/hebertryansantos/) 
[![Gmail Badge](https://img.shields.io/badge/-hebertryann40@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:hebertryann40@gmail.com)](mailto:hebertryann40@gmail.com)
