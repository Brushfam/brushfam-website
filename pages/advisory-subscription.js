import TitleSection from "sections/advisory-subscription/TitleSection"
import HowItWork from "sections/advisory-subscription/HowItWork"
import Challenges from "sections/advisory-subscription/Challenges"
// import Packages from "sections/advisory-subscription/Packages"

export default function advisorySubscription() {
    return(
        <div style={{backgroundImage: 'url("/advisory-subscription-bg.jpg")'}}>
            <TitleSection></TitleSection>
            <HowItWork></HowItWork>
            <Challenges></Challenges>
            {/*<Packages></Packages>*/}
        </div>
    )
}
