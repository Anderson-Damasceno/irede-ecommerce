export default function Promotion(){
    return(
        <div className="relative">
            <img src="src\assets\tenismobile.png" alt="" className="md:hidden w-screen" />
            <img src="src\assets\destaque.png" alt="" className=" w-screen max-md:hidden"/>
            <button className="bg-orange-500 text-white rounded absolute p-4 bottom-4 right-2 max-md:left-2">Aproveitar oferta</button>
        </div>
    )
}