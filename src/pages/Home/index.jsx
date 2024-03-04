import Header from "./../../components/Header"
import Footer from "../../components/Footer"
import Destaque from "../../components/Destaque"
import Promotion from "../../components/Promotion"

export default function Home(){
    const getProdutos = async() => {
        const produto = await fetch('http://localhost:3000/product')
        const teste = await produto.json()
        console.log(teste.rows)
        return teste
        
    }
   getProdutos()
    return(
        <div>
        <Header/>
        <div className="min-h-[90vh]">
        <Promotion/>
        <Destaque/>
        </div>
        <Footer/>
        </div>
    )
}