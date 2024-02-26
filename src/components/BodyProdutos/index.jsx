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
        <div className="flex flex-row w-screen">
            <div className="bg-slate-200 w-32 h-32 rounded drop-shadow flex flex-col m-8">
              <div className="flex flex-row gap-1">
                <input type="radio" id="tenis" name="same"/>
                <label htmlFor="tenis">Tenis</label>
              </div>
              <div className="flex flex-row gap-1">
                <input type="radio" id="blusa" name="same"/>
                <label htmlFor="blusa">Blusa</label>
              </div>
              <div className="flex flex-row gap-1">
                <input type="radio" id="acessorios" name="same"/>
                <label htmlFor="acessorios">Acessórios</label>
              </div>
              <div className="flex flex-row gap-1">
                <input type="radio" id="calcas" name="same"/>
                <label htmlFor="calcas">Calças</label>
              </div>
            </div>
            <div>
                <ul>
                    <li><CardHome/></li>
                </ul>
            </div>
        </div>
        </>
    )
}