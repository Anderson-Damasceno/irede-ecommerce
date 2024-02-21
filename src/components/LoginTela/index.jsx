export default function LoginTela(){
    return(
        <div className="flex flex-row h-screen w-screen">
            <div className="bg-slate-200 w-1/2 h-screen">
                <div className="bg-white w-4/5 h-5/6 flex flex-col items-center justify-center m-16">
                    
                    <form action="" className="flex flex-col justify-center w-4/5 h-5/6">
                        <h1 className="font-bold mb-2 text-lg">Fazer Login</h1>
                    
                        <label htmlFor="email" className="font-bold mb-1">Email:</label>
                        <input type="email" id="email" placeholder="Digite seu email" className="w-5/6 bg-slate-200 rounded mb-2" />

                        <label htmlFor="password" className="font-bold mb-1">Senha:</label>
                        <input type="password" id="password" placeholder="Digite sua senha" className="w-5/6 bg-slate-200 rounded mb-2" />

                        <button type="submit" className="bg-orange-500 rounded text-white mt-4 w-5/6">Fazer Login</button>
                        <p>Já possui cadastro? <span className="text-orange-500">Clique aqui</span></p>
                    </form>
                </div>
            </div>
            <div className="bg-sky-800 flex flex-col items-center justify-center w-1/2 h-screen">
                <h1 className="text-white text-2xl">Sua nova experiência em compras online</h1>
                <img src="src\assets\caixa.png" alt="" height={200} width={200}/>
            </div>
        </div>
    )
}