# single-tuple-worksheet-handler

## Sumário

- [single-tuple-worksheet-handler](#single-tuple-worksheet-handler)
  - [Sumário](#sumário)
  - [Motivação](#motivação)
  - [Pilha de tecnologia](#pilha-de-tecnologia)
  - [Como rodar](#como-rodar)
    - [Pré-requisitos](#pré-requisitos)
    - [Passo a passo](#passo-a-passo)

## Motivação

Este foi o terceiro repositório de código apresentado no [Curso Superior de TSI do IFMS](https://www.ifms.edu.br/campi/campus-aquidauana/cursos/graduacao/sistemas-para-internet/sistemas-para-internet) como requisito para obtenção da nota parcial de uma atividade da unidade curricular Linguagem de Programação II, a qual consistiu em modificar o arquivo [`UserPropertyDAO.ts`](./src/models/dao/UserPropertyDAO.ts) adicionando os métodos `setCsv` e `getCsv` à classe `UserPropertyDAO` para que a classe passe em todos os testes presentes no arquivo [`UserPropertyDAO.test.ts`](./src/models/dao/UserPropertyDAO.test.ts) e escritos pelo professor.

## Pilha de tecnologia

As seguintes tecnologias foram utilizadas para desenvolver este app:

| Papel | Tecnologia |
|-|-|
| Ambiente de execução | [Node](https://nodejs.org/en/) |
| Linguagem de programação | [TypeScript](https://www.typescriptlang.org/) |
| Framework de teste | [Jest](https://jestjs.io/pt-BR/) |

## Como rodar

### Pré-requisitos

- [Node](https://nodejs.org/en/download/);
- [Yarn](https://yarnpkg.com/) (opcional).

### Passo a passo

1. Clone o repositório de código em sua máquina;
   
2. Abra um shell de comando de sua preferência (prompt de comando, PowerShell, terminal _etc_.);

3. Instale as dependências do projeto através do seguinte comando:

```console
$ npm install
```

Caso esteja utilizando o gerenciador de pacotes Yarn, execute o seguinte comando como alternativa:

```console
$ yarn
```

4. Finalmente, execute o seguinte comando para iniciar o app:

Para npm:

```console
$ npm run test
```

Para Yarn:

```console
$ yarn test
```