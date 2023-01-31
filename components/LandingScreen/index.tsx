import LandingText from "../LandingHeader";
import NavBar from "../NavBar/NavBar";
import classes from './LandingScreen.module.css'

export default function LandingScreen(){
    return(
        <section>
            <div className={classes.splash_wrapper}>
                <NavBar />
                <LandingText />
            </div>
        </section>
    )
}
