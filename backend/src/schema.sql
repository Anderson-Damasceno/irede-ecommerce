
CREATE TABLE Produto(
    id_produto SERIAL NOT NULL PRIMARY KEY,
    imagem VARCHAR NOT NULL,
    nome VARCHAR NOT NULL,
    categoria_id INT REFERENCES Categoria(id_categoria) ON DELETE SET NULL,
    preco FLOAT NOT NULL,
    descricao TEXT,
    estoque INT
)

CREATE TABLE Cliente (
    id_cliente INT SERIAL NOT NULL PRIMARY KEY,
    nome VARCHAR NOT NULL,
    email VARCHAR NOT NULL UNIQUE,
    senha VARCHAR NOT NULL
)

CREATE TABLE ProdutoCliente(
    id_produto INT REFERENCES Produto(id_produto) ON UPDATE CASCADE ON DELETE CASCADE,
    id_cliente INT REFERENCES Cliente(id_cliente) ON UPDATE CASCADE ON DELETE CASCADE,
    quantidade_produto INT,
    preco_hora_da_compra FLOAT,
    pedido_id INT REFERENCES Pedido(id_pedido)
)

CREATE TABLE Categoria(
    id_categoria SERIAL NOT NULL PRIMARY KEY,
    nome VARCHAR NOT NULL UNIQUE
)

CREATE TABLE Pedido(
    id_pedido INT SERIAL NOT NULL PRIMARY KEY,
    data_compra TIMESTAMP NOT NULL,
    status_pedido BOOLEAN NOT NULL
    
)