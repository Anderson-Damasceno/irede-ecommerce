
import BodyProdutos from "../../components/BodyProdutos"
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Produtos(){
    return(
        <div>
            <Header/>
            <div className="min-h-[90vh]">
            <BodyProdutos/>
            </div>
            
            <Footer/>
        </div>
    )
}