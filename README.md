# Prototipo

### Descrição

Protótipo para a materia de arquitetura de software utilizando as seguintes ferramentas: 

| Nome | Detalhe |
|-------|--------|
| Expressjs | Acima de 4.15.2 |
| Node | 4.2.6
| mocha | Acima de 4.0.1 |
| chai | Acima de 4.1.2 |
| chai-http | Acima de 3.0.0 |
| Typescript | Acima de 2.5.3 |
| Gulp | Acima de 3.9.1 |
| Docker | 17.12.0-ce Build c97c6d6 |

# Instalação e Remoção
1. Clone o repositório com:
```
git clone https://github.com/PedroDrim/Prototipo-Arquitetura.git

## Via docker
```
2. Dentro do diretório **MainApp** monte o container com o Docker da aplicação com: 
```
sudo docker build -t <nome do container> .
```
3. Execute o container do Docker com o comando:
```
sudo docker run -p <porta de saida>:5000 -d <nome do container>
```
4. Remova a imagem com o comando:
```
sudo docker rmi -f <nome do container>
```

## Via npm
```
2. Instale o gulp com o comando: 
```
sudo npm install gulp-cli -g && npm install gulp -D 
```
3. Instale as dependências npm:
```
npm install
```
4. Compile o protótipo com:
```
npm run build
```
5. Execute o protótipo:
```
npm start
```
6. Para remover o protótipo exclua o diretório clonado.
