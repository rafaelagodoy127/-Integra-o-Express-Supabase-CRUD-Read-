# -Integra-o-Express-Supabase-CRUD-Read-
Iniciei a atividade criando um projeto na minha organização do Supabase, a qual nomeei de “Aula 11".
No SQL Editor, criei a tabela “quartos_pousada”
e inseri seus respectivos dados me atentando a colocar quartos disponíveis e indisponíveis.
Após o primeiro passo no supabase, parti para o VSCode, onde iniciei criando uma pasta chamada “Aula 11”, e dentro dela adicionei/criei:
Documento chamado “server.js”.
Pasta “config”.
Dentro da pasta config, criei “supabaseClient.js”.
E por fim criei o documento “.env”.
*Os packge eu criei no terminal rodando os comandos “npm init -y”.
Por fim deste passo, instalei as extensões “Dracula’” e Thunder Client”. 
*Loguei minha conta que criei no Thunder Client para conseguir realizar as consultas de GET.
Dentro do server.js copiei o código completo do passo 5 disponibilizado pelo professor, apenas modifiquei os dados e nome do servidor para encaixar com meu tema de Hotel Pousada Beira-Mar, como mostra a imagem ao lado.
Neste copiei o código já aprendido e passado pelo professor em aulas anteriores de express.
No .env eu realizei da mesma forma que o supabaseClient.js, copiei um código já aprendido e passado pelo professor em aulas passadas, apenas alterei os campos de URL e KEY, onde inseri a url e key do meu projeto, qu ficam disponíveis na tela inicial do projeto.
No terminal rodei o comando de sempre padrão para rodar o servidor “node server.js”.
Por fim, realizei as consultas GET solicitadas pelo professor em meu exercício.
GET -  http://localhost:3000/quartos
Este GET busca por todos os quartos cadastrados no sistema.
GET -  http://localhost:3000/quartos
Este GET busca por especificamente por um dos quartos correspondentes ao número de ID, neste caso o id 1.
GET -  http://localhost:3000/quartos/disponíveis
Este GET busca por pelos quartos que esão disponíveis, mostrando TRUE quando está disponivel e FALSE quando está indisponível.
