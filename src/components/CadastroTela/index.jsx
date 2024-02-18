export default function CadastroTela(){
    return(
        <div className="flex flex-row">
            <div className="bg-slate-200">
                <div className="bg-white w-4/5 h-5/6 flex flex-col items-center justify-center">
                    <h1 className="font-bold">Cadastre-se</h1>
                    <form action="" className="flex flex-col justify-center w-4/5 h-5/6">
                        <label htmlFor="name" className="font-bold">Nome:</label>
                        <input type="text" id="name" placeholder="Digite seu nome" className="w-5/6 bg-slate-200 rounded" />

                        <label htmlFor="email" className="font-bold">Email:</label>
                        <input type="email" id="email" placeholder="Digite seu email" className="w-5/6 bg-slate-200 rounded" />

                        <label htmlFor="password" className="font-bold">Senha:</label>
                        <input type="password" id="password" placeholder="Digite sua senha" className="w-5/6 bg-slate-200 rounded" />

                        <button type="submit" className="bg-orange-500 rounded text-white mt-4 w-5/6">Cadastrar</button>
                        <p>Já possui cadastro? <span className="text-orange-500">Clique aqui</span></p>
                    </form>
                </div>
            </div>
            <div className="bg-sky-800 flex flex-col items-center justify-center">
                <h1>Sua nova experiência em compras online</h1>
                <img src="src\assets\caixa.png" alt="" />
            </div>
        </div>
    )
}