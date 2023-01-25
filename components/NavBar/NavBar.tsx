import classes from "./NavBar.module.css";

export default function NavBar(){
    return(
        <div className={classes.nav_bar}>
            <div><a href="#">ISRAEL ARVIZU</a></div>
            <div><a>SERVICES</a></div>
        </div>
    )
}
