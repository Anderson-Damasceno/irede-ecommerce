export default function Footer(){
    return(
        <div>
        <footer className="bg-sky-700 mb-0 w-full"> 
        <div className="">
        <div className="flex flex-row gap-4">
        <div>
        <img src="src\assets\caixa.png" alt="" />
        <img src="src\assets\icones.png" alt="" className="mt-4"/>
        </div>
        <p className="text-xs text-white">Lorem ipsum lorem ipsum lorem lorem  ipsum lorem loram lorem lorem lorem ipsum ipsum ipsum </p>
        </div>
        <section className="text-xs flex flex-row gap-4 text-white">
            <div>
            <h1>Informações</h1>
            <ul>
                <li>Sobre o E-Rede Store</li>
                <li>Segurança</li>
                <li>Lista de desejos</li>
                <li>Trabalhe conosco</li>
            </ul>
            </div>
            <div>
            <h1>Informações</h1>
            <ul>
                <li>Tênis</li>
                <li>Camiseta</li>
                <li>Acessórios</li>
                <li>Esportivo</li>
            </ul>
            </div>
            <div>
            <h1>Localização</h1>
            <ul>
                <li>Rua Martinho Rodrigues, 331</li>
                <li>Bairro de Fátima, Fortaleza-CE</li>
            </ul>
            </div>
            
        </section>
        <hr className="text-white"/>
        <p className="flex flex-row justify-center text-white">2023 Irede</p>
        </div>

        </footer>
        </div>
    )
}