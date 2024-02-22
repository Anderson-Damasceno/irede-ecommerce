export default function Promotion(){
    return(
        <div className="relative">
            <img src="src\assets\tenismobile.png" alt="" className="md:hidden w-screen" />
            <img src="src\assets\destaque.png" alt="" className="max-md:hidden"/>
            <button className="bg-orange-500 text-white rounded absolute bottom-2 right-2 max-md:left-2">Aproveitar oferta</button>
        </div>
    )
}