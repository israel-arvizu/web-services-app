import classes from "./Footer.module.css"

export default function Footer(){
    return(
       <div className={classes.footer_container}>
            <div className={classes.footer_left_section}>
                <p>Designed & Developed by:</p>
                <h2>Israel Arvizu</h2>
            </div>
            <div className={classes.footer_middle_section}>
            <i className="fa-brands fa-linkedin-in"></i>
                <a><i className="fa-brands fa-linkedin-in"></i></a>
                <a><i className="fa-brands fa-github"></i>bruh</a>
                <a><i className="fa-regular fa-star"></i>Email</a>
                <a>Portfolio</a>
            </div>
            <div className={classes.footer_right_section}>
                <h3>Hours</h3>
            </div>
       </div>
    )
}
