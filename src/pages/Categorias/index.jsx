import BodyCategorias from "../../components/BodyCategorias";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Categorias(){
    return(
        <div>
            <Header/>
            <div className="min-h-[90vh]">
            <BodyCategorias/>
            </div>
            
            <Footer/>
        </div>
    )
}