import CardHome from "../CardHome";

export default function Destaque(){
    return(
        <div className="mt-4 mb-4">
            <h1 className="text-blue-700 font-bold pl-4">Destaques</h1>
            <ul className="flex flex-row justify-center">
                <li><CardHome/></li>
                <li><CardHome/></li>
            </ul>
        </div>
    )
}