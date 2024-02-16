import CardHome from "../CardHome";

export default function Destaque(){
    return(
        <div className="rounded drop-shadow-lg">
            <h1 className="text-blue-700 font-bold">Destaques</h1>
            <ul className="flex flex-row gap-6">
                <li><CardHome/></li>
                <li><CardHome/></li>
            </ul>
        </div>
    )
}