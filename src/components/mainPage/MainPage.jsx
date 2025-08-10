import Head from "./head"
import FillerBenefits from "../filler-benefits/FillerBenefits"
import HowFillerWorks from "../HowFillerWorks"

export default function MainPage(){

    return(
        <div>
            <Head />
            <FillerBenefits />
            <HowFillerWorks />
        </div>
    )
}