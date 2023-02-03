import classes from "./ServicesSection.module.css"

export default function ServicesSection(){
    return(
        <section id="section-2-main">
            <div className={classes.services_wrapper}>
                <h1>Services</h1>
                <div className={classes.row}>
                    <div className={classes.column}>
                        <div><h3>01</h3></div>
                        <h3>Starter</h3>
                        <p>Perfect to start your digital footprint</p>
                        <ul>
                            <li>One Page Site</li>
                            <li>Hosting & Doming Setup</li>
                            <li>Custom Design</li>
                        </ul>
                    </div>
                    <div className={classes.column}>
                        <div><h3>02</h3></div>
                        <h3>Business+</h3>
                        <p>Ready to improve your business?</p>
                        <ul>
                            <li>Live feed of </li>
                            <li>DOnt worry about it</li>
                            <li>yo yo yo</li>
                        </ul>
                    </div>
                    <div className={classes.column}>
                        <div><h3>03</h3></div>
                        <h3>Premium</h3>
                        <p>Elevate your online presence</p>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>

                    </div>
                    <div className={classes.column}>
                        <div><h3>04</h3></div>
                        <h3>Deluxe</h3>
                        <p>Unlease the full potential of your online brand</p>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
