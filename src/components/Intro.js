import React from "react"
import { Flip } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Intro = () => {

    const handleClick = (e) => {
        e.preventDefault();
        document.getElementById("section-home").scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="intro">
            <Flip left>
                <p >Teste 1</p>
            </Flip>
            <Flip delay={400} right>
                <p>Teste 2</p>
            </Flip>
            <Flip delay={800} bottom>
                <p>Teste 3</p>
            </Flip>


            <button onClick={(e) => handleClick(e)} className="bounce" >
                <FontAwesomeIcon icon={faAngleDown} />
            </button>
        </div>
    )
}

export default Intro