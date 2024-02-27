
import BodyPedidos from "../../components/BodyPedidos";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Pedidos(){
    return(
        <div>
            <Header/>
            <div className="min-h-[90vh]">
            <BodyPedidos/>
            </div>
            
            <Footer/>
        </div>
    )
}