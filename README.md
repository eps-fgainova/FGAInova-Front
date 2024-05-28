<div align="center">
<p style="display: flex; justify-content: center;">
    <img src='https://i.ibb.co/h7hg8PL/logo-Botom-Info.png' width="300" height="auto">
</p>
</div>








# FGA Inova - Front End 📢
Repositório voltado para o desenvolvimento da interface de interação da aplicação da disciplina "Engenharia De Produto De Software" da UnB no Semestre 2024/1 do Grupo 04. Para mais detalhes consultar a documentação do projeto <a href="https://fgaad-docs-fga-eps-rmc-marketing-digital-g4-2-fe120e506e2a802aa.gitlab.io/#/" target="_blank">AQUI!</a> 

## Alunos 👩‍💻

| Matrícula  | Aluno                            |
| ---------- | -------------------------------- |
| 17/0032591 | Edvan Barreira Gomes Junior      |
| 17/0020525 | Pedro Henrique de Lima Malaquias |
| 16/0141842 | Philipe Rosa Serafim             |


## Sobre 📣

O FGAInova se trata de uma aplicação web voltada para o marketing digital de projetos de inovação desenvolvidos em ambiente universitário. Após o cadastro, o usuário pode promover suas ideias e conectar-se com uma comunidade de estudantes, pesquisadores e profissionais.

## Executar o projeto 💻

Para executar o projeto localmente sera necessário ter instalado o Docker e Docker Compose. Para se ter uma maior praticidade foi elaborado um Makefile.
Primeiramente é necessário clonar o projeto e entrar na pasta raiz.

```
git clone https://gitlab.com/fga-eps-rmc/marketing-digital/g4.2/front.git
```
Para rodar o projeto na primeira vez é necessário o comando abaixo.

```
make build
```

Para rodar outras vezes basta rodar o comando abaixo
```
make run
```

### Caso não seja possível rodar o comando do makefile basta rodar os comandos abaixo.

Para  rodar a primeira vez
```
npm install && docker-compose up --build
```
Para rodar outras vezes
```
docker-compose up
```

Após rodar os comandos o projeto estará disponível ao acesso pelo navegador na porta 5173
```
http://localhost:5173/
```

Ocorrendo tudo certo deve ser possivel visível a seguinte tela.
<p align='center'>
    <img src='https://i.ibb.co/4F366cD/fga-Inova-Front-End.gif' width="90%" height="auto">
</p>
