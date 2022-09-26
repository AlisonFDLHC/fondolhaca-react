import React from 'react'

import styles from './Footer.module.css'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'

import Logo from './Logo'
import ImgPartner from '../imgs/partner.png'

const Footer = () => {
    return (
        <Container fluid className={`${styles.footer} d-flex flex-column align-items-center justify-content-center`}>
            <Link to="/">
                <a href="/" className={`text-white display-6 text-decoration-none my-4`}>
                    <div className={`${styles.logoContainer}`}>
                        <Logo />
                    </div>
                </a>
            </Link>
            
            <div className="container-sm d-flex align-items-center justify-content-center gap-5 flex-wrap">
                    <address>
                        <a
                            href="mailto:fondolhaca@gmail.com" 
                            className={`text-white display-6 fs-5 text-decoration-none`}
                        >
                            fondolhaca@gmail.com
                        </a>
                    </address>           
                    <address className={`text-center`}>
                        <a 
                            href="https://www.google.com/maps/place/Sede+Fondolhaca/@-23.1265311,-47.234856,17z/data=!4m12!1m6!3m5!1s0x94cf4d4fb589c86f:0x9fef407328977e50!2sSede+Fondolhaca!8m2!3d-23.1265311!4d-47.234856!3m4!1s0x94cf4d4fb589c86f:0x9fef407328977e50!8m2!3d-23.1265311!4d-47.234856"
                            className={`text-white display-6 fs-5 text-decoration-none`}
                        >
                            Rua 80<br/>
                            Morada do Sol - Indaiatuba/SP
                        </a>
                    </address>
            </div>
            <div className={`d-flex align-items-center justify-content-center gap-4`}>
                <img src={ImgPartner} alt="partnerLogo" style={{width: "12rem"}}/>
            </div>
            <small className={`display-6 fs-5 text-center text-white my-4`}>Fondolhaca - 2004.</small>
        </Container>
    )
}

export default Footer