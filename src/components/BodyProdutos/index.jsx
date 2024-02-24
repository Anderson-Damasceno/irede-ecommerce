import CardHome from "../CardHome";

export default function BodyProdutos(){
    return(
        <>
        <div className=" flex flex-col items-center justify-center md:hidden">
            <div className="m-4">
            <button className="bg-orange-500 rounded flex flex-row items-center justify-center gap-4 w-64 h-12 mb-4">Tenis<span><img src="src\assets\seta.png" alt="" /></span></button>
            <div className="bg-slate-200 w-64 rounded">
                <ul>
                    <li>
                        <CardHome/>
                        <div className="flex flex-row gap-16"><span>Status:</span> <span className="text-green-600 font-bold">Finalizado</span></div>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        </>
    )
}