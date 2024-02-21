export default function LoginMobile(){
    return(
        <div className="bg-sky-800 h-screen flex flex-col items-center justify-center">
            <img src="src\assets\caixa.png" alt="" className="mb-8" />
            <div className="bg-white w-4/5 h-5/6 flex flex-col items-center justify-center">
                <h1 className="font-bold">Fazer Login</h1>
                <form action="" className="flex flex-col justify-center w-4/5 h-5/6">

                    <label htmlFor="email" className="font-bold">Email:</label>
                    <input type="email" id="email" placeholder="Digite seu email" className="w-5/6 bg-slate-200 rounded" />

                    <label htmlFor="password" className="font-bold">Senha:</label>
                    <input type="password" id="password" placeholder="Digite sua senha" className="w-5/6 bg-slate-200 rounded" />

                    <button type="submit" className="bg-orange-500 rounded text-white mt-4 w-5/6">Fazer Login</button>
                    <p>Já possui cadastro? <span className="text-orange-500">Clique Aqui</span></p>
                </form>
            </div>
        </div>
    )
}