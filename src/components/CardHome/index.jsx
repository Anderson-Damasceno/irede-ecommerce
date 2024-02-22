export default function CardHome(){
    return(
        <>
        <div className="bg-slate-100 rounded drop-shadow-lg ml-1 mr-1 mb-4 mt-4">
            <img src="src\assets\tenis.png" alt="" className="w-full" />
            <div className="pb-4 pt-4 pl-2 pr-2">
                <h1 className="text-blue-700 font-bold">Nique Air Surf</h1>
                <p className="text-lime-700">tenis</p>
                <h2 className="text-orange-500 font-bold">R$ 200,00</h2>
                <button className="bg-blue-800 rounded  text-white">Comprar</button>
            </div>
            
        </div>
        </>
    )
}
