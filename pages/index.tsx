import NavBar from "../components/NavBar/NavBar"
import LandingText from "../components/LandingHeader"

export default function SplashPage(){
    return(
        <>
            <div>
                <div className="nav-bar-wrapper">
                    <NavBar />
                    <LandingText />
                </div>
            </div>
        </>)
}
