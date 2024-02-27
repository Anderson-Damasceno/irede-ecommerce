import Header from "./../../components/Header"
import Footer from "../../components/Footer"
import Destaque from "../../components/Destaque"
import Promotion from "../../components/Promotion"

export default function Home(){
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