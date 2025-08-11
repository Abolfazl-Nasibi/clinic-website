import Head from "./head"
import FillerBenefits from "../filler-benefits/FillerBenefits"
import HowFillerWorks from "../HowFillerWorks"
import FAQ from "../FAQ/FAQ"

export default function MainPage(){

    return(
        <div>
            <Head />
            <FillerBenefits />
            <HowFillerWorks />
            <FAQ />
        </div>
    )
}