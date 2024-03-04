import { IoMenuSharp } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <>
        <header className="bg-sky-800  w-screen h-36 flex flex-col items-center justify-center">
        <div className="flex flex-row gap-8 text-white mt-6 justify-center w-full md:justify-between">
            <IoMenuSharp size={28} className="md:hidden"/>
            <img src="src\assets\caixa.png" alt="" className="md:pl-4" />
            <div className="flex flex-row gap-4 justify-center items-center">
            <h1 className="text-white max-md:hidden">Cadastre-se</h1>
            <button className="bg-orange-500 rounded p-2">Entrar</button>
            <BsCart3 className="md:pr-4 text-4xl md:text-5xl"/>
            </div>
        </div>
        <div className="flex justify-center relative h-40">
        <HiMiniMagnifyingGlass style={{position:"absolute", top:"30px", left: "-100px", zIndex:"1" }}/>
        <input type="text" className="rounded mt-6 pl-6 absolute" placeholder="Buscar"/>
        </div>

        <nav className="flex flex-row text-white w-full justify-center gap-2 max-md:hidden"> 
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/categorias">Categorias</Link>
        <Link to="/pedidos">Meus Produtos</Link>
        </nav>
        </header>
        </>
    )
}