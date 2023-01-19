import classes from "./NavBar.module.css";

export default function NavBar(){
    return(
        <div className={classes.nav_bar}>
            <div><a href="#">Israel Arvizu</a></div>
            <div><a>Services</a></div>
        </div>
    )
}
