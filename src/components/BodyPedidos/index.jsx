import CardPedidos from "../CardPedidos";

export default function BodyPedidos(){
    return(
        <>
        <div className="flex flex-row items-center gap-2 max-md:hidden">
            <div className="bg-slate-200 rounded w-[250px] h-[135px]">
                <h1>Meus Pedidos</h1>
                <div className="border-t-4 border-slate-500"></div>
                <h1>Minhas Informações</h1>
            </div>
            <div className="bg-slate-200 rounded w-[850px] h-[300px]">
                <div className="flex justify-between"><span>Meus Pedidos</span><span>Status Meus Pedidos</span></div>
                <ul className="flex justify-between items-center">
                    <li><CardPedidos/></li>
                    <h1>Finalizado</h1>
                </ul>

            </div>
        </div>
        <div className=" flex flex-col items-center justify-center md:hidden">
            <div className="m-4">
            <button className="bg-orange-500 rounded flex flex-row items-center justify-center gap-4 w-64 h-12 mb-4">Meus pedidos <span><img src="src\assets\seta.png" alt="" /></span></button>
            <div className="bg-slate-200 w-64 rounded">
                <h1>Meus pedidos</h1>
                <ul>
                    <li>
                        <CardPedidos/>
                        <div className="flex flex-row gap-16"><span>Status:</span> <span className="text-green-600 font-bold">Finalizado</span></div>
                    </li>
                </ul>
            </div>
            </div>
           
        </div>
        </>
    )
}