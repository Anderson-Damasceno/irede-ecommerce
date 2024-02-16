import CardPedidos from "../CardPedidos";

export default function BodyPedidos(){
    return(
        <div className="">
            <button className="bg-orange-500 rounded flex flex-row items-center justify-center gap-4 w-64 h-12">Meus pedidos <span><img src="src\assets\seta.png" alt="" /></span></button>
            <div className="bg-slate-200 w-64">
                <h1>Meus pedidos</h1>
                <ul>
                    <li>
                        <CardPedidos/>
                        <div className="flex flex-row gap-16"><span>Status</span> <span className="text-green-600 font-bold">Finalizado</span></div>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}