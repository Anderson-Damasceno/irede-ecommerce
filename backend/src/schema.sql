
CREATE TABLE Produto(
    id_produto int NOT NULL PRIMARY KEY,
    imagem VARCHAR NOT NULL,
    nome VARCHAR NOT NULL,
    categoria_id INT NOT NULL REFERENCES Categoria(id_categoria),
    preco FLOAT NOT NULL,
    descricao TEXT
)

CREATE TABLE Cliente (
    id_cliente INT NOT NULL PRIMARY KEY,
    nome VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    senha VARCHAR NOT NULL
)

CREATE TABLE ProdutoCliente(
    id_produto int REFERENCES Produto(id_produto) ON UPDATE CASCADE ON DELETE CASCADE,
    id_cliente int REFERENCES Cliente(id_cliente) ON UPDATE CASCADE ON DELETE CASCADE
)

CREATE TABLE Categoria(
    id_categoria INT NOT NULL PRIMARY KEY,
    nome VARCHAR NOT NULL UNIQUE
)

CREATE TABLE Pedido(
    id_pedido INT NOT NULL PRIMARY KEY,
    
)