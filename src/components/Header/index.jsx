import { IoMenuSharp } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
export default function Header(){
    return(
        <>
        <header className="bg-sky-800  w-screen flex flex-col items-center justify-center">
        <div className="flex flex-row gap-8 text-white mt-6 justify-center w-full md:justify-between">
            <IoMenuSharp size={28} className="md:hidden"/>
            <img src="src\assets\caixa.png" alt="" className="md:pl-4" />
            <BsCart3 size={28} className="md:pr-4"/>
        </div>
        <div className="flex justify-center relative h-40">
        <HiMiniMagnifyingGlass style={{position:"absolute", top:"30px", left: "-100px", zIndex:"1" }}/>
        <input type="text" className="rounded mt-6 pl-6 absolute" placeholder="Buscar"/>
        </div>

        <div className="flex flex-row text-white w-full justify-center gap-2 max-md:hidden"> 
        <a href="">Home</a>
        <a href="">Produtos</a>
        <a href="">Categorias</a>
        <a href="">Meus Produtos</a>
        </div>
        </header>
        </>
    )
}