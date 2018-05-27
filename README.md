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

1. Dentro do diretório gerado monte o container com o Docker da aplicação com: 
```
sudo docker build -t <nome do container> .
```
2. Execute o container do Docker com o comando:
```
sudo docker run -p <porta de saida>:5000 -d <nome do container>
```
3. Remova a imagem com o comando:
```
sudo docker rmi -f <nome do container>
```
