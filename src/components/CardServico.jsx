import React from 'react'

import styles from './CardServico.module.css'

import Card from 'react-bootstrap/Card'
import CardServicoIcon from './CardServicoIcon'

const CardServico = ( { titulo, conteudo, icon } ) => {
    return (
        <Card className={`${styles.cardServico}`}>
            <Card.Body className={`d-flex flex-column align-items-center justify-content-center text-center`}>
                <CardServicoIcon icon={icon}/>
                <h3 className={`${styles.cardTitulo}`}>{titulo}</h3>
                <p className={`${styles.cardConteudo}`}>{conteudo}</p>
            </Card.Body>
        </Card>
    )
}

export default CardServico