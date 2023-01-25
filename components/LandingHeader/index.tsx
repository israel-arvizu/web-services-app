import classes from "./LandingHeader.module.css"

export default function LandingText(){
    return (
        <div className={classes.Header_Text}>
            <div><h1>turning ideas into <br></br>real life <span>products</span></h1></div>
            <div><a>View ideas</a></div>
        </div>
    )
}
