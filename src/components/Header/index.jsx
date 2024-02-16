import { IoMenuSharp } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
export default function Header(){
    return(
        <>
        <header className="bg-sky-700 h-36 w-screen flex flex-col items-center justify-center">
        <div className="flex flex-row gap-8 text-white justify-center mt-6">
            <IoMenuSharp size={28}/>
            <img src="src\assets\caixa.png" alt="" />
            <BsCart3 size={28}/>
        </div>
        <div className="flex flex-row justify-center relative h-40 w-full">
        <HiMiniMagnifyingGlass style={{position:"absolute", top:"30px", left: "60px", zIndex:"1" }}/>
        <input type="text" className="rounded mt-6 pl-6 absolute" placeholder="Buscar"/>
        </div>
        </header>
        </>
    )
}