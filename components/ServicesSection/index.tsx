import classes from "./ServicesSection.module.css"

export default function ServicesSection(){
    return(
        <section id="section-2-main">
            <div className={classes.services_wrapper}>
                <h1>Services</h1>
                <div className={classes.row}>
                    <div className={classes.column}>
                        <div><h3>1</h3></div>
                        <h3>Starter</h3>
                        <p>Perfect to start your digital footprint</p>
                    </div>
                    <div className={classes.column}>
                        <div><h3>2</h3></div>
                        <h3>Business+</h3>
                        <p>Ready to improve your business?</p>
                    </div>
                    <div className={classes.column}>
                        <div><h3>3</h3></div>
                        <h3>Premium</h3>
                        <p>Elevate your online presence</p>
                    </div>
                    <div className={classes.column}>
                        <div><h3>4</h3></div>
                        <h3>Deluxe</h3>
                        <p>Unlease the full potential of your online brand</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
