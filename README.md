## EXECUÇÃO

# Requisitos

* NodeJS / npm
* yarn (recomendado)
* expo
* MySQL

# Clonar o repositório e instalar as dependências
```
git clone https://github.com/LRissi/teste-ciapetro.git
cd teste-ciapetro
cd back-end
yarn install
cd ../front-end
expo install
```
# Configurar projetos
* Executar o arquivo `back-end/db/db.sql` na database local
* Configurar o arquivo `back-end/src/config/db.js` com as informações da database local
* Configurar o endereço da API REST no arquivo `front-end/src/config/Api.js` de acordo com a configuração que for utilizada no expo. Colocar o ip (interno) do dispositivo que está sendo executado a API REST, caso for utilizada a configuração `LAN` (default)

# Executar projetos
* Para executar a API REST:
```
# troque para o diretório `back-end` com:
cd back-end
# para iniciar
yarn start
```
* Para executar a aplicação com expo e react-native:
```
# troque para o diretório `front-end` com:
cd front-end
# para iniciar
expo start
# observação: utilizar emulador ou dispotisivo para execução
```

# Adicionais
* Segue alguns comandos para facilitar a instalação dos requisitos (somente linux): 
```
sudo apt update
sudo apt install mysql-server
sudo apt install nodejs
sudo apt install npm
sudo npm install -g yarn@latest
sudo npm install -g expo-cli
```
# Docker
(indisponível)
