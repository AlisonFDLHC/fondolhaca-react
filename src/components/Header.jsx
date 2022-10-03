import React from 'react'

import styles from './Header.module.css'

import { Link, useLocation } from 'react-router-dom';

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import SocialIcon from './SocialIcon'
import Logo from './Logo';

const Header = () => {

    const url = useLocation()

    return (
        <header>
            <Container fluid className={`${styles.header} p-0`}>
                <Container fluid className={`${styles.headerTop}`}>
                    <Container fluid="sm" className={`d-flex gap-3 p-3 ${styles.IconsContainer}`}>
                        <a href="https://www.facebook.com/fondolhaca" target={"_blank"}>
                            <SocialIcon social="facebook" size="25" color="rgba(255,255,255,0.5)"/>
                        </a>
                        <a href="https://www.instagram.com/fondolhaca_" target={"_blank"}>
                            <SocialIcon social="instagram" size="25" color="rgba(255,255,255,0.5)"/>
                        </a>
                        <a href="https://www.twitter.com/fondolhaca" target={"_blank"}>
                            <SocialIcon social="twitter" size="25" color="rgba(255,255,255,0.5)"/>
                        </a>
                        <div className={`${styles.contact} d-flex align-items-center justify-content-center display-6 fs-5 gap-5 ms-auto`}>
                            <a href="mailto:fondolhaca@gmail.com" target={"_blank"} className={`d-flex align-items-center justify-content-center gap-2`}>
                                <SocialIcon social="email" size="25" color="rgba(255,255,255,0.5)"/>
                                <span className={styles.headerContactText}>
                                    fondolhaca@gmail.com
                                </span>
                            </a>
                            <a href="tel:+5519989661879" target={"_blank"} className={`d-flex align-items-center justify-content-center gap-2`}>
                                <SocialIcon social="phone" size="25" color="rgba(255,255,255,0.5)"/>
                                <span className={styles.headerContactText}>
                                    +55 (19) 9 8966-1879
                                </span>
                               
                            </a>
                        </div>              
                    </Container>
                </Container>
                <Container fluid="sm">
                <Navbar collapseOnSelect expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <div className={`${styles.logoContainer}`}>
                                <Logo/>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ms-auto text-end">
                                <Link to="fondolhaca-react" className={`${styles.headerLink} display-6 fs-5`}>
                                    <Nav.Link href="#fondolhaca-react" className={url.pathname === '/fondolhaca-react' ? `${styles.active}` : `${styles.inactive}` } >Home</Nav.Link>
                                </Link>
                                <Link to="sobre" className={`${styles.headerLink} text-danger display-6 fs-5`}>
                                    <Nav.Link href="#sobre" className={url.pathname === '/sobre' ? `${styles.active}` : `${styles.inactive}` }>Sobre Nós</Nav.Link>
                                </Link>
                                <Link to="servicos" className={`${styles.headerLink} display-6 fs-5`}>
                                    <Nav.Link href="#servicos" className={url.pathname === '/servicos' ? `${styles.active}` : `${styles.inactive}` } >Serviços</Nav.Link>
                                </Link>
                                <Link to="contato" className={`${styles.headerLink} display-6 fs-5`}>
                                    <Nav.Link href="#contato" className={url.pathname === '/contato' ? `${styles.active}` : `${styles.inactive}` } >Contato</Nav.Link>
                                </Link>
                               
                                
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </Container>
            </Container>
        </header>
    )
}

export default Header