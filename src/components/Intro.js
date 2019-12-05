import React, { Fragment } from "react"
import { Flip } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Intro = () => {

    const handleClick = (e) => {
        e.preventDefault();
        document.getElementById("section-home").scrollIntoView({ behavior: "smooth" });
    }

    return (
        <Fragment>

            
            <div className="intro">
                <Flip bottom>
                    <h1>Seja Bem Vindo!</h1>
                </Flip>
                <Flip delay={600} bottom>
                    <h3>A Previsão do Tempo</h3>
                </Flip>
                <Flip delay={1300} bottom>
                    <h5>Da sua cidade você encontra aqui!</h5>
                </Flip>


                <button onClick={(e) => handleClick(e)} className="bounce" >
                    <FontAwesomeIcon icon={faAngleDown} />
                </button>
                <div class="ocean">
                <div class="wave"></div>
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
            </div>
        </Fragment>
    )
}

export default Intro