import classes from "./NavBar.module.css";

export default function NavBar(){
    return(
        <div className={classes.nav}>
            <div><a>Israel Arvizu</a></div>
            <div><a>Services</a></div>
        </div>
    )
}
