import CardCategorias from "../CardCategorias";

export default function BodyCategorias(){
    return(
        <div className=" flex flex-col items-center justify-center w-screen">
            <ul className="m-8">
                <li>
                <CardCategorias/>
                </li>
            </ul>
            
        </div>
    )
}