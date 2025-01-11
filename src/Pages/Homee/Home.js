


import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import css from './Home.module.css'
import Button from '../../Components/Button/Button'
import {  Col, Container, Row } from 'react-bootstrap'
import Accordion from '../../Components/Accordian/Accordian'
import image1 from '../../images/Group 1000002519.webp'
import image2 from '../../images/Group 1000002520.webp'
import image3 from '../../images/Group 1000002521.webp'
import image4 from '../../images/Group 1000002522.webp'
import image6 from '../../images/Mask group (1).webp'
import image7 from '../../images/Mask group (2).webp'

function Home() {
const imagesection = [image1, image2, image3, image4, image6, image7]


  return (
  <>
<Navbar/>
{/* First section start */}
<div className={css.frstsection}>
  <p>Your Full-Service Digital Product Agency</p>
  <h1>Branding, Design, Development, and Beyond.</h1>
  <Button text="Let's build something" hello={{margin: "40px auto 70px", fontSize: "18px"}}/>
  <p style={{fontSize: "25px"}}>Tamba designs and builds beautiful, high-converting websites, mobile apps, and web apps. Our roster of happy clients spans successful Silicon Valley startups, global enterprises, emerging startups, and influencers launching their online brand.
</p>
</div>
{/* First section end */}

{/* second section start */}
<Container>
  <Row>
    <Col md={12} lg={6}>
    <div className={css.scndsection}>
    <p>OUR SERVICES</p>
    <h2>From idea to launch, we can help you at every stage!</h2>
    </div>
    <p style={{fontSize: "23px", color: "#E7D3F8"}}>We help companies innovate, launch, and lead through holistic product design and development.
</p>
    </Col>
    <Col md={12} lg={6}>
   <Accordion text1="Strategy" text2="Whether it’s improving an existing digital product with 100’s of thousands of users, or building an MVP to get to that series A - We’ve done that and everything in between. We’ve got you. "/>
   <Accordion text1="User Experience" text2="Our research-based UX design relies on proven methodologies to build experiences that are seamless, intuitive, and user-centric."/>
   <Accordion text1="Design" text2="Whether it’s improving an existing digital product with 100’s of thousands of users, or building an MVP to get to that series A - We’ve done that and everything in between. We’ve got you. "/>
   <Accordion text1="Development" text2="Whether it’s improving an existing digital product with 100’s of thousands of users, or building an MVP to get to that series A - We’ve done that and everything in between. We’ve got you. "/>
    </Col>
  </Row>
</Container>
{/* second section end */}


{/* third section start */}
<marquee className={css.marquemain}>
{imagesection.map((image) => 
  <img src={image }/>)}
</marquee>
{/* third section end */}

 
{/* fourth section start */}

{/* fourth section end */}

  </>
  )
}

export default Home
