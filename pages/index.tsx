import Footer from "../components/Footer"
import LandingScreen from "../components/LandingScreen"
import ServicesSection from "../components/ServicesSection"

export default function SplashPage(){
    return(
        <>
            <div className="page-wrapper">
                <LandingScreen />
                <ServicesSection />
                <Footer />
            </div>
        </>
        )
}
