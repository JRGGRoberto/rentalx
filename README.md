# Cadastro de carro

**RF**

[x] Deve ser possível cadastrar um novo carro.
-- not here-  Deve ser possível listar todas as categorias.

**RN**

[x] Não deve ser possível cadastar um carro com uma placa já existente.
[x] O carro deve ser cadastrado, por padrão como disponível.
[x] O usuário responsável pelo cdadastro deve ser um usuário administrador.

# Listagem de carros

**RF**

[x] Deve ser possível listar todos os carros disponíveis.
[x] Deve ser possível listar todos os carros disponíveis pelo nome da categoria.
[x] Deve ser possível listar todos os carros disponíveis pelo nome da marca.
[x] Deve ser possível listar todos os carros disponíveis pelo nome do carro.

**RN**
O usuário não precisa estar logado no sistema.

# Cadastro de Especicação no carro

**RF**

Deve ser possível cadastrar um especificação para um carro.


**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadatro deve ser um usuário administrador.

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a imagem do carro

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
O usuário pode cadastar mais de uma imagem para o mesmo carro
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel

**RNF**

**RN**
O aluguel deve ter duração mínima de 24 horas
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para um mesmo usuário
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para um mesmo carro





----
----

**Requisitos funcionais RF**
Funcionalidades que a aplicação pode ter.


Ex:. Usuário poderá cadastar uma categoria

**Requisitos não funcionais RNF**
Ex.:Os dados devem ser salvos no banco de dados Postgres

**Regra de negócio**

Ex.: Não deve ser possível cadastrar uma categoria com o nome já existente