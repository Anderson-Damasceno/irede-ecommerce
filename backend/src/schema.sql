
CREATE TABLE Produto(
    id_produto int NOT NULL PRIMARY KEY,
    imagem VARCHAR NOT NULL,
    nome VARCHAR NOT NULL,
    categoria VARCHAR NOT NULL,
    preco FLOAT NOT NULL,
    quantidade INT,
    descricao TEXT
)

CREATE TABLE Cliente (
    id_cliente INT NOT NULL PRIMARY KEY,
    nome VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    senha VARCHAR NOT NULL
)

CREATE TABLE ProdutoCliente(
    id_produto int REFERENCES Produto(id_produto) ON UPDATE CASCADE ON DELETE CASCADE
    id_cliente int REFERENCES Cliente(id_cliente) ON UPDATE CASCADE ON DELETE CASCADE
)