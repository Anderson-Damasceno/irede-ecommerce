export default function Detalhes(){
    return(
        <div className="">
            <div className="bg-slate-300 rounded m-4">
                <div className="flex justify-center">
                    <img src="src\assets\acessorio.png" alt="" />
                    <h1 className="max-md:hidden">Quantidade Disponível</h1>
                    <h2 className="max-md:hidden">100 itens disponíveis</h2>
                </div>
                <div className="flex flex-col items-center">
                    <h1>Smart Watch</h1>
                    <h2>relógio</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                        est laborum.
                    </p>
                    <div className="flex flex-col">
                        <div>
                            <label htmlFor="" className="pr-1">Quantidade</label>
                            <select name="itens">
                                <option>Tenis</option>
                            </select>
                        </div>
                        <button className="bg-sky-800 rounded p-1 m-2">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}