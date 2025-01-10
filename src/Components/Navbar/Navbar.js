import React from 'react'
import css from './Navbar.module.css'
import Button from '../Button/Button'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { BsEmojiExpressionlessFill } from "react-icons/bs";






function Navbar() {
 const navigate = useNavigate()

    function handling() {
        navigate("/")
    }
    function handling2() {
        navigate("/About")
    }




    return (

        <Container className={css.navbarmain}>
            <Row>
                <Col xs={12} md={6} lg={6} className={css.Logomain}>
                <BsEmojiExpressionlessFill className={css.logo}/>
                <h1>Tamba</h1>
                </Col>
                <Col xs={12} md={6} lg={6} className={css.linksmain}>
                    <ul className={css.links}>
                        <li onClick={()=> handling()}>Home</li>
                        <li onClick={()=> handling2()}>About</li>
                        <li><Button text="Contact" buttonicon={<FaArrowRight />}/></li>
                    </ul>
                </Col>
             
            </Row>
        </Container>

    )
}

export default Navbar
