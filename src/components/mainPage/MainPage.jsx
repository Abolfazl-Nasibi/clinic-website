import Head from "./head"
import FillerBenefits from "../filler-benefits/FillerBenefits"
import HowFillerWorks from "../HowFillerWorks"
import FAQ from "../FAQ/FAQ"
import Footer from "../footer"

export default function MainPage(){

    return(
        <div>
            <Head />
            <FillerBenefits />
            <HowFillerWorks />
            <FAQ />
            <Footer />
        </div>
    )
}