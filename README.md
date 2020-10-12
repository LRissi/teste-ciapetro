## EXECUÇÂO

# Requisitos

* NodeJS / npm
* MySQL

 -- Executar os seguintes comandos no banco de dados;
```sql
CREATE DATABASE `ciapretro`;

USE DATABASE `ciapretro`;

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `register_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `history` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `source_coin` varchar(3) DEFAULT NULL,
  `destiny_coin` varchar(3) DEFAULT NULL,
  `conversion_value` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

```

-- Clonar o repositório e instalar as dependencias
```
git clone https://github.com/LRissi/teste-ciapetro.git
cd teste-ciapetro
npm install
```

-- Para executar a aplicação podemos utilizar
```
nodemon src/index.js
```