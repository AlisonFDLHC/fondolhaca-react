import React from 'react'

import styles from './Content.module.css'

import { useState } from 'react'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/esm/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

import Iframe  from 'react-iframe'

import CardServico from './CardServico'
import SocialIcon from './SocialIcon'

import ImgQuemSomos from '../imgs/imgquemsomos.jpg'
import ImgServicos from '../imgs/imgservicos.jpg'
import ImgBanner from '../imgs/fondolhacabanner.jpg'
import ImgObjetivos from '../imgs/imgobjetivos.jpg'
import ImgMissao from '../imgs/imgmissao.jpg'


import Servicos from './Servicos'

const Content = ( { page } ) => {

 const servicos = Servicos

const [validated, setValidated] = useState(false);

const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
    
    return (
        <>
            {(() => {
  
                    switch (page) {
                        case 'main':
                            return (
                                <Container fluid className={`${styles.mainContent} align-items-center justify-content-center p-0`}>
                                    <h3 className={`${styles.mainTitle}`}>A SOLUÇÃO QUE VOCE PRECISA</h3>

                                    <Container fluid className={`${styles.section} p-0`}>
                                        <Container fluid="sm" className={`${styles.sectionContent} d-flex`}>
                                            <Card className={`m-5 shadow-lg ${styles.imgCard}`}>
                                                <Card.Body className={`p-0`}>
                                                    <img src={ImgQuemSomos} alt=".." style={{ width: "100%", height: "100%" }}/>
                                                </Card.Body>
                                            </Card>
                                            <div className={`d-flex flex-column display-6 justify-content-center ${styles.sectionText}`}>
                                                <h4 className={`fs-1 fw-normal`}>QUEM SOMOS</h4>
                                                <small className={`text-muted fs-5 my-2`}>Sobre a Fondolhaca</small>
                                                <p className={`fs-4`}>A <span className={`text-r`}>Fondolhaca</span> é uma empresa focada em atender os mais diversos tipos de <span className={`text-b`}>serviços</span>.</p>
                                                <Link to="/sobre" href="#sobre">
                                                    <a href="#sobre">
                                                        <Button className={`${styles.saberMaisButton}`}>Saber Mais</Button>
                                                    </a>                                                  
                                                </Link>
                                            </div>
                                        </Container>  
                                    </Container>
                                    <Container fluid className={`${styles.section} p-0`}>
                                        <Container fluid="sm" className={`${styles.sectionContent} d-flex`}>
                                            <div className={`d-flex flex-column display-6 justify-content-center ${styles.sectionText}`}>
                                                <h4 className={`fs-1 fw-normal`}>NÃO SE PREOCUPE</h4>
                                                <small className={`text-muted fs-5 my-2`}>NOSSOS SERVIÇOS</small>
                                                <p className={`fs-4`}>Nossa empresa é capacitada para fornecer a melhor solução, possuímos profissionais altamente qualificados, trazendo até <span className={`text-r`}>você</span> ou a sua <span className={`text-b`}>empresa</span> produtos e Serviços de qualidade, visando sempre o agrado e insatisfação dos nossos clientes, não se satisfaça, procure sempre mais.</p>
                                                <Link to="/servicos">
                                                    <a href="#servicos">
                                                        <Button className={`${styles.saberMaisButton} ${styles.dark}`}>Saber Mais</Button>
                                                    </a>   
                                                </Link>

                                            </div>
                                            <Card className={`m-5 shadow-lg ${styles.imgCard}`}>
                                                <Card.Body className={`p-0`}>
                                                    <img src={ImgServicos} alt=".." style={{ width: "100%", height: "100%" }}/>
                                                </Card.Body>
                                            </Card>
                                        </Container>  
                                    </Container>
                                    <Container>
                                        <Container className={`container-sm d-flex flex-column align-items-center justify-content-center my-5`}>
                                            <blockquote className={`blockquote text-center textResponsive`}>
                                                <p>"A satisfação é inimiga da evolução"</p>
                                            </blockquote>
                                            <figcaption className={`blockquote-footer`}>Fondolhaca</figcaption>
                                        </Container>
                                    </Container>
                                </Container> 
                            )
                        case 'sobre':
                            return (
                                <Container fluid className={`${styles.sobreContent} align-items-center justify-content-center p-0`}>
                                    <Container fluid className={`${styles.section} p-0`}>
                                        <Container fluid="sm" className={`${styles.sectionContent} d-flex`}>
                                            <div className={`d-flex flex-column display-6 justify-content-center ${styles.sectionText}`}>
                                                <h4 className={`fs-1 fw-normal`}>FONDOLHACA</h4>
                                                <p className={`fs-4`}>
                                                    A <span className={`text-r`}>Fondolhaca</span> foi criada com o objetivo de atender os mais diversos <span className={`text-b`}>serviços</span> com a melhor qualidade e <span className={`text-p`}>insatisfação</span> de nossos clientes, goste mas não se satisfaça procure sempre mais!
                                                </p>
                                            </div>
                                            <Card className={`m-5 shadow-lg ${styles.imgCard}`}>
                                                <Card.Body className={`p-0`}>
                                                    <img src={ImgBanner} alt=".." style={{ width: "100%", height: "100%" }}/>
                                                </Card.Body>
                                            </Card>
                                        </Container>  
                                    </Container>
                                    <Container fluid className={`${styles.section} p-0`}>
                                        <Container fluid="sm" className={`${styles.sectionContent} d-flex`}>
                                            <Card className={`m-5 shadow-lg ${styles.imgCard}`}>
                                                <Card.Body className={`p-0`}>
                                                    <img src={ImgObjetivos} alt=".." style={{ width: "100%", height: "100%" }}/>
                                                </Card.Body>
                                            </Card>
                                            <div className={`d-flex flex-column display-6 justify-content-center ${styles.sectionText}`}>
                                                <h4 className={`fs-1 fw-normal`}>OBJETIVO</h4>
                                                <small className={`fs-5 my-2`}>NOSSA META DE TRABALHO</small>
                                                <p className={`fs-4`}>
                                                    Tornar-se uma <span className={`text-r`}>empresa</span> referência em prestação de <span className={`text-b`}>serviços</span>, sempre buscando a <span className={`text-p`}>insatisfação</span> e evolução dos nossos clientes.
                                                </p>
                                            </div>
                                        </Container>  
                                    </Container>
                                    <Container fluid className={`${styles.section} p-0`}>
                                        <Container fluid="sm" className={`${styles.sectionContent} d-flex`}>
                                            <div className={`d-flex flex-column display-6 justify-content-center ${styles.sectionText}`}>
                                                <h4 className={`fs-1 fw-normal`}>MISSÃO</h4>
                                                <small className={`fs-5 my-2`}>NOSSO FOCO DE ATENDIMENTO</small>
                                                <p className={`fs-4`}>
                                                    Atuar no ramo de prestação de serviço, <span className={`text-r`}>entreterimento</span> ética e responsabilidade, trabalhando de forma clara e objetiva, criando parcerias de sucesso, proporcionando aos clientes segurança, <span className={`text-b`}>insatisfação</span>, confiança e <span className={`text-p`}>diversão</span>.
                                                </p>
                                            </div>
                                            <Card className={`m-5 shadow-lg ${styles.imgCard}`}>
                                                <Card.Body className={`p-0`}>
                                                    <img src={ImgMissao} alt=".." style={{ width: "100%", height: "100%" }}/>
                                                </Card.Body>
                                            </Card>
                                        </Container>  
                                    </Container>
                                    <Container className={`container-sm d-flex flex-column align-items-center justify-content-center my-5`}>
                                        <h4 className={`fw-bold fs-3`}>LIGUE OU PREENCHA NOSSO FORMULÁRIO</h4>
                                        <Link to="/servicos">
                                            <Button className={`${styles.Button} ${styles.dark} fw-bold mt-3`}>CONHEÇA NOSSOS SERVIÇOS</Button>
                                        </Link>
                                    </Container>
                                </Container> 
                            )
                        case 'servicos':
                            return (
                                <Container fluid className={`${styles.servicosContent} align-items-center justify-content-center p-0`}>
                                    <Container fluid="lg" className={`d-flex flex-wrap gap-4 align-items-center justify-content-center py-5`}>
                                        {servicos.map((servico) => (
                                            <CardServico 
                                                key={servico.id}
                                                icon={servico.icon}
                                                titulo={servico.titulo}
                                                conteudo={servico.conteudo}/>
                                        ))}
                                    </Container>
                                    <Container className={`container-sm d-flex flex-column align-items-center justify-content-center py-5`}>
                                        <h4 className={`fw-bold fs-3 text-white`}>MARQUE UM HORARIO DE ATENDIMENTO</h4>
                                        <Link to="/contato">
                                            <Button className={`${styles.Button} fw-bold mt-3`}>ENTRE EM CONTATO CONOSCO</Button>
                                        </Link>  
                                    </Container>
                                </Container> 
                            )
                        case 'contato':
                            return (
                                <Container fluid className={`p-0`}>
                                    <Container fluid="lg" className={`${styles.servicosContato} d-flex align-items-center justify-content-center gap-5 my-5 p-0`}>
                                        <div className={`${styles.contatoContainer} flex-grow-1`}>
                                            <Form 
                                                noValidate 
                                                validated={validated} 
                                                onSubmit={handleSubmit} 
                                                className={`d-flex flex-column gap-3`}
                                                action="https://getform.io/f/a1093812-7f8e-482b-b83e-26bd1eea41e5" 
                                                method="POST"
                                            >
                                                <Form.Group>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        name="nome"
                                                        placeholder="Nome"
                                                        className={`${styles.formInput}`}
                                                    />
                                                    <Form.Control.Feedback type="invalid">Insira seu nome</Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control
                                                        required
                                                        type="email"
                                                        name="email"
                                                        placeholder="E-mail"
                                                        className={`${styles.formInput}`}
                                                    />
                                                    <Form.Control.Feedback type="invalid">Insira um email valido</Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        name="assunto"
                                                        placeholder="Assunto"
                                                        className={`${styles.formInput}`}
                                                    />
                                                    <Form.Control.Feedback type="invalid">
                                                        Insira um assunto.
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control 
                                                        required 
                                                        as="textarea"
                                                        name="mensagem"
                                                        placeholder="Mensagem" 
                                                        className={`${styles.formInput}`}
                                                    />
                                                    <Form.Control.Feedback type="invalid">Digite sua mensagem</Form.Control.Feedback>
                                                </Form.Group>
                                                <Button 
                                                    type="submit"
                                                    className={`${styles.Button} ${styles.dark} ${styles.formButton} fw-bold`}
                                                >
                                                    ENVIAR MENSAGEM
                                                </Button>
                                            </Form>
                                        </div>
                                        <div className={`${styles.contatoContainer} flex-grow-1`}>
                                            <div className={`d-flex flex-column gap-3`}>
                                                
                                                    <div className={`${styles.contactIconContainer}`}>
                                                        <a href="tel:+5519989661879" target="blank_">
                                                            <SocialIcon social="phone"/>
                                                            (19) 9 8966 - 1879
                                                            
                                                        </a>
                                                    </div>
                                                
                                                    <div className={`${styles.contactIconContainer}`}>
                                                        <a href="https://api.whatsapp.com/send?phone=5519989905519&text=Fondolhaca!" target="blank_">
                                                            <SocialIcon social="whatsapp"/>
                                                            (19) 9 8990 - 5519
                                                        </a>
                                                    </div>
                                                
                                                
                                                    <div className={`${styles.contactIconContainer}`}>
                                                        <a href="https://www.facebook.com/fondolhaca" target="blank_">
                                                            <SocialIcon social="facebook"/>
                                                            Fondolhaca
                                                        </a>
                                                    </div>
                                                
                                                
                                                    <div className={`${styles.contactIconContainer}`}>
                                                        <a href="https://www.instagram.com/fondolhaca_" target="blank_">
                                                            <SocialIcon social="instagram"/>
                                                            Fondolhaca_
                                                        </a>
                                                    </div>
                                                
                                                    <div className={`${styles.contactIconContainer}`}>
                                                        <a href="mailto:fondolhaca@gmail.com" target="blank_">
                                                            <SocialIcon social="email"/>
                                                            fondolhaca@gmail.com
                                                        </a>
                                                    </div>
                                                
                                            </div>
                                        </div>
                                    </Container>
                                    <Container fluid className={`p-0 my-5`}>
                                        <h3 className={`text-center my-5`}>VENHA CONHECER NOSSA SEDE</h3>
                                        <div className={`d-flex`}>
                                            <Iframe 
                                                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.280585084324!2d-47.24842644403184!3d-23.123417142896763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf4cdea6fecfc5%3A0xf34b17c7a43a0b2c!2sR.%20Moema%2C%20157%20-%20Jardim%20Paulista%20I%2C%20Indaiatuba%20-%20SP%2C%2013349-758!5e0!3m2!1spt-BR!2sbr!4v1659027210564!5m2!1spt-BR!2sbr"
                                                width="100%"
                                                height="500"
                                                id="mapa"
                                                className={`shadow-lg`}
                                                display="initial"
                                                position="relative"
                                            />
                                        </div>
                                    </Container>
                                </Container>
                                
                            )
                        default:
                            return ''
                    }
                    })()}
        </>
    )
}

export default Content