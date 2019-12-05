import React from "react"
import { Container, Row } from 'react-bootstrap';


const Header = () => {
    return (

        <section className="header flex items-center">

            <Container>
                <Row>
                    <div class="ml-6 pt-1">
                        <h4 class="text-xl text-white-900 leading-tight"> <i className="fas fa-map-pin"></i> São Paulo/SP</h4>
                        <p class="text-base text-white-600 leading-normal">Confira o clima em sua cidade!</p>
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Header