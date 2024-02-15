import Header from "./../../components/Header"
import Footer from "../../components/Footer"
import Destaque from "../../components/Destaque"
import Promotion from "../../components/Promotion"

export default function Home(){
    return(
        <div>
        <Header/>
        <Promotion/>
        <Destaque/>
        <Footer/>
        </div>
    )
}