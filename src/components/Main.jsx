import React from 'react'

import styles from './Main.module.css'
import '../App.css'
import Container from 'react-bootstrap/Container'

const Main = ( {page} ) => {
    return (
        <main>
            
            <Container fluid className={`d-flex flex-column p-0`}>
                {page === "main" && (
                    <Container fluid="sm" className={`d-flex flex-column align-items-center justify-content-center text-white ${styles.mainContent}`}>
                        <h2 className={`display-6 fw-normal`}>FAZEMOS <span className={`text-r`}>OQUE</span> TEM</h2>
                        <h2 className={`display-6 fw-bold fs-2`}>PARA <span className={`text-b`}>VOCÊ</span> QUE PRECISA</h2>
                        <h2 className={`display-6 fw-normal`}>PORQUE VOCÊ <span className={`text-p`}>MERECE</span>!</h2>
                    </Container>
                )}

                {page === "sobre" && (
                    <Container fluid="sm" className={`d-flex flex-column align-items-center justify-content-center text-center text-white ${styles.mainContent}`}>
                        <h2 className={`display-6 fw-normal`}>QUEM SOMOS NÓS?</h2>
                        <h2 className={`display-6 fw-bold`}>OU MELHOR, <span className={`text-r`}>QUEM</span> NÃO SOMOS?</h2>
                    </Container>
                )}

                {page === "servicos" && (
                    <Container fluid="sm" className={`d-flex flex-column align-items-center justify-content-center text-white ${styles.mainContent}`}>
                        <h2 className={`display-6 fw-normal`}>FAZEMOS OQUE TEM</h2>
                        <h2 className={`display-6 fw-bold`}>NOS <span className={`text-r`}>DIGA</span> O QUE PRECISA</h2>
                    </Container>
                )}

                {page === "contato" && (
                    <Container fluid="sm" className={`d-flex flex-column align-items-center justify-content-center text-white ${styles.mainContent}`}>
                        <h2 className={`display-6 fw-normal`}>ENTRE EM CONTATO</h2>
                        <h2 className={`display-6 fw-bold`}><span className={`text-r`}>FONDOLHACA</span> <span className={`text-b`}>TE</span> <span className={`text-p`}>ATENDE</span>  </h2>
                    </Container>
                )}
                
                

                {(() => {
  
                        switch (page) {
                            case 'main':
                                return (
                                    <Container fluid className={`${styles.skillsContainer} align-items-center justify-content-center p-0`}>
                                        <div className={`flex-grow-1 display-6 ${styles.skill}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#eb1f85" class={`${styles.skillIcon} bi bi-house`} viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                            </svg>
                                            <p>Atendimento remoto e local, basta entrar em contato que iremos ajudar</p>
                                        </div>
                                        <div className={`flex-grow-1 display-6 ${styles.skill}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#16acd1" class={`${styles.skillIcon} bi bi-clock`} viewBox="0 0 16 16">
                                                <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                                            </svg>
                                            <p>Insatisfação garantida, pode gostar mas não se satisfaça, pois a satisfação é inimiga da evolução</p>
                                        </div>
                                        <div className={`flex-grow-1 display-6 ${styles.skill}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#922dc5" class={`${styles.skillIcon} bi bi-gear`} viewBox="0 0 16 16">
                                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                                            </svg>
                                            <p>Oferecemos todos serviços</p>
                                        </div>
                                    </Container> 
                                )
                            case 'sobre':
                                return (
                                    <Container fluid className={`${styles.skillsContainer} align-items-center justify-content-center p-0`}>
                                        <div className={`flex-grow-1 display-6 ${styles.skill}`}>
                                            <p className={`fs-2`}>Atendimento aos mais <span className={`text-b`}>diversos</span> serviços!</p>
                                        </div>
                                    </Container> 
                                )
                            case 'servicos':
                                return (
                                    <Container fluid className={`${styles.skillsContainer} align-items-center justify-content-center p-0`}>
                                        <div className={`flex-grow-1 display-6 ${styles.skill}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#922dc5" class={`${styles.skillIcon} bi bi-gear`} viewBox="0 0 16 16">
                                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                                            </svg>
                                            <p className={`fs-3`}>Oferecemos todos serviços</p>
                                        </div>
                                    </Container> 
                                )
                            case 'contato':
                                return (
                                    <></>
                                )
                            default:
                                return ''
                        }
                })()}

            </Container>
        </main>
    )
}

export default Main