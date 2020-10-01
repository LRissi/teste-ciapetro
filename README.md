
# Teste Desenvolvedor Ciapetro

Olá seja muito bem vindo ao teste de desenvolvedor Ciapetro Distribuidora de Combustíveis.

Lembre-se de ler esse documento com **atenção** para você melhorar suas chances para a vaga!

## Informações do Teste

O teste consiste em criar uma aplicação FullStack que deve armazenar consultas de uma API e apresentar o histórico das pesquisas efetuadas.

### Descrição da Aplicação
Construir uma aplicação que efetue uma chamada em uma API, fazendo a pesquisa da cotação de uma moeda para outras. Ex: Valor do dólar americano (USD) para Euro (EUR) e Real (BRL) e demonstre os dados retornados pela API na tela de forma que o usuário possa entendê-la.

As informações deverão ser armazenadas em um banco de dados e o histórico de pesquisa deve estar disponível para consulta pelo usuário.

A interface da aplicação deve ter dois campos um para escolher a moeda de referência e outra pra escolher uma ou mais moedas para comparação de cotação. Ao realizar a consulta a aplicação deve mostrar na tela as informações da consulta.

A aplicação também deverá conter uma área que irá mostrar o histórico das pesquisas, ao clicar sobre uma pesquisa específica, o usuário visualizará os dados detalhados sobre a cotação daquele dia.

Para esse teste será necessário implementar um servidor que será o responsável pela comunicação com a API de cotações, fornecer os dados para aplicação web e salvar os dados no banco de dados.

Na aplicação web deverá apresentar as informações de cada pesquisa individual e também do histórico, onde para cada pesquisa deverá ser mostrado os dados consultados.  

A aplicação cliente e servidor deverão se comunicar por meio de uma API REST.  

### Observações

- Você deverá usar a API da [Currency layer](https://currencylayer.com/) é so fazer o cadastro gratis.
- A api gratis não permite trocar a moeda de referência(Dolar americano USD) mas ainda sim o sistema deve ter a opção de trocar a modeda de origem e o erro deve ser trato para usuário informando o motivo.
- Para buscar os dados da cotações use o endpoint dos dados realtime que é https://api.currencylayer.com/live
- Para listar as moedas que a API suporta pode usar https://api.currencylayer.com/list
- Para saber como usar a API acesse a [Documentação](https://currencylayer.com/documentation).


### Requisitos

- Para o servidor você poderá utilizar qualquer linguagem de programação.
- Para a aplicação web utilizar algum dos seguintes frameworks: React, Vue ou Angular 2+.
- Você pode utilizar qualquer bando de dados.
- Você pode utilizar qualquer dependência/módulo/pacote que você tenha conhecimento.
- Lembre-se de fazer commits no github pequenos e concisos para que podemos entender sua linha de raciocínio.

### Entrega

- Você tem 7 dias para entrega do teste.
- Tudo que for feito será avaliado, mesmo que o projeto esteja incompleto.
- O projeto deve ser entregue em um repositório do github contendo um README.md
- No README.md deve ser explicado como executar/compilar a aplicação e também explicar a razão de utilizar cada dependência/módulo/pacote que você utilizou.

## Avaliação e Critérios

Uma vez que seu projeto seja disponibilizado a nós, a avaliação de seu código será feita de acordo com os seguintes critérios:

### Ausência de bugs

Seu código deve funcionar corretamente, atendendo a todos os requisitos da especificação representada por este documento.

### Legibilidade e Formatação

Lembre-se que um trecho de código em geral será lido muito mais vezes do que escrito. Escreva seu código pensando em quem for lê-lo. Busque minimizar dificuldades de leitura. Use a indentação a seu favor. Siga boas práticas de formatação de código da linguagem escolhida.

### Seguir os princípios do padrão REST

Os endpoints deverão utilizar os Métodos HTTP corretos e suas semânticas.
