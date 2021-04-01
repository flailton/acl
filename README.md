# Access Control List (Front-end)

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) varsão 11.0.1.

## Development server

É necessário baixar e realizar os procedimentos de instalação do projeto [API.ACL](https://github.com/flailton/api.acl), para que este projeto funcione corretamente.

Após clonar o projeto do [ACL](https://github.com/flailton/acl) do GitHub, na pasta do projeto, execute os comandos `npm install`, para instalar as dependências do projeto e, após finalizado, `ng serve` para iniciar o ambiente de desenvolvimento. 

O ambiente ficará acessível através do endereço `http://localhost:4200/`, ou através de uma porta diferente, caso esta já esteja ocupada.

## Acesso

Só será possível dar seguimento caso já tenha finalizado os procedimentos de instalação do projeto [API.ACL](https://github.com/flailton/api.acl).

Inicialmente haverão dois Usuários cadastrados, podendo ser adicionados outros através da aplicação:
- admin
  - E-mail: admin@admin.com
  - Senha:  admin@123
  - Função: Administrador
- user
  - E-mail: user@user.com
  - Senha:  user@123
  - Função: Usuário

O usuário deve inserir o e-mail e a senha nos respectivos campos e se conectar para ter acesso ao sistema.

## Navegação

Ao realizar o login o usuário será redirecionado, de acordo com a sua função.
- Usuário
  O usuário terá acesso a página de visualização de seus dados, além de ter acesso à tela para edição dos seus dados, exceto sua Função.
  Na tela de Edição, só será permitida a alteração do Nome, E-mail e Telefone. Caso lhe seja dada a permissão de Listar as Funções, ele também poderá alterar a sua Função.
  
- Administrador
  O usuário terá acesso a página de listagem dos usuários, onde será possível visualizar, editar ou excluir um usuário.
  Na tela de Edição será permitida a alteração dos campos Nome, E-mail, Telefone e Função.
  Esta Função terá acesso às Permissões. Lá será exibida a lista de Funções, para que o usuário selecione a qual deseja atualizar as permissões.

## Requisitos Funcionais (RF)

Requisitos funcionais, caracterizam exigências da aplicação que devem ser atendidas através de suas funcionalidades.

RF1: Deve ser possível a visualização, edição, criação e exclusão de Usuários, conforme as permissões atualmente definidas.
RF2: O sistema deve restringir o acesso do Usuário a funcionalidades não definidas nas permissões de sua Função.
RF3: Deve ser possível gerenciar as Permissões de cada Função, conforme as permissões atualmente definidas.

## Requisitos Não Funcionais (RNF)

Requisitos funcionais, caracterizam exigências da aplicação que devem ser atendidas através de suas funcionalidades.

RNF1: O front-end e o back-end do sistema devem estar desacoplados, divididos entre uma API REST e uma outra aplicação, responsável pelo front-end, que irá consumir a API.
RNF2: O back-end deve ser desenvolvido em PHP (7.x >), sendo opcional o uso de algum framework.
RNF3: O sistema deve garantir a segurança dos dados, exigindo autenticação de acesso para utilização.
