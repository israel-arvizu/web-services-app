import classes from "./ServicesSection.module.css"
import Image from 'next/image'

export default function ServicesSection(){
    return(
        <section id="section-2-main">
            <div className={classes.services_wrapper}>
                <h1>Services</h1>
                <div className={classes.row}>
                    <div className={classes.column}>
                        <div> <Image src="/Starter-1.png" alt="Starter Icon" width="90" height="90"/> </div>
                        <h3>Starter</h3>
                        <p>Perfect to start your digital footprint</p>
                        <ul>
                            <li>One Page Site</li>
                            <li>Hosting & Doming Setup</li>
                            <li>Custom Design</li>
                        </ul>
                        <h2>$149.00</h2>
                    </div>
                    <div className={classes.column}>
                        <div><Image src="/Business-1.png" alt="Starter Icon" width="90" height="90"/></div>
                        <h3>Business+</h3>
                        <p>Ready to improve your business?</p>
                        <ul>
                            <li>Up to 5 Pages</li>
                            <li>Hosting & Domain Setup</li>
                            <li>Up to 3 Re-Designs</li>
                        </ul>
                        <h2>$299.00</h2>
                    </div>
                    <div className={classes.column}>
                        <div><Image src="/Premium-1.png" alt="Starter Icon" width="100" height="100"/></div>
                        <h3>Premium</h3>
                        <p>Elevate your online presence</p>
                        <ul>
                            <li>Up to 10 pages</li>
                            <li>One Database configuration</li>
                            <li>6-month Site Support</li>
                        </ul>
                        <h2>Get a Quote</h2>
                    </div>
                    <div className={classes.column}>
                        <div><Image src="/Deluxe-1.png" alt="Starter Icon" width="90" height="90"/></div>
                        <h3>Deluxe</h3>
                        <p>Unlease the full potential of your online brand</p>
                        <ul>
                            <li>Unlimited Pages</li>
                            <li>3 Database Configurations</li>
                            <li>1-year Site Support</li>
                        </ul>
                        <h2>Get a Quote</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}
