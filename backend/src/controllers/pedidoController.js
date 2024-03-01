

const createPedido = async (req, res) {
    const pedido = req.body
    const createPedido = pedidoService.createPedido(pedido)
    return res.status(201).json(createPedido)
} 