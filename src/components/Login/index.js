import React from 'react';
import { Col, Row, Image,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loginform from './LoginForm';
import './style.css';
import "antd/dist/antd.css";

// images
import Rectangle26 from '../../Images/Rectangle 26.png';
import Rectangle27 from '../../Images/Rectangle 27.png';
import Ellipse1 from '../../Images/Ellipse 1.png';
import Hamburger from '../../Icons/Hamburger.svg';
import GlobalIcon from '../../Icons/globe.svg';
import Logo from '../../Icons/Layer 1.svg';
import Vector from '../../Images/Vector 1.svg'


const Login = () => {
    return ( 
        <>
            <Button className="menu-button" variant="none" as='img' src={Hamburger} />
            <Row >
                <Col xs='auto' style={{position:'relative'}}>
                    <Image src={Rectangle26}/>
                    <Image style={{position:'absolute',top:"-153",left:"120px",zIndex:"3"}} src={Vector}/>
                    <Image style={{position:'absolute',left: "172px",top: "140px",width:"64%",zIndex:"1",maxHeight:"480px",objectFit:"cover",objectPosition:"center"}} src={Rectangle27}/>
                    <Image style={{position:'absolute',left: "7px",top: "380px",objectPosition:"0 0"}} src={Ellipse1}/>
                </Col>
                <Col>
                    <Row className='mt-4'>
                        <Col>
                        <Button className="GlobalIcon" variant="none" as='img' src={GlobalIcon} />
                        English</Col>
                        <Col style={{textAlign:"right",paddingRight:"1.5rem"}}>Already have an account?
                            <Button className="loginBtn" variant="outline-dark">Log in</Button>
                        </Col>
                    </Row>
                    <div className="form-container">
                        <h1 style={{marginTop:"5rem"}}><Image style={{height: "23px"}} src={Logo}/></h1>
                        <h4 style={{margin:"3rem 0 1rem",lineHeight: "2",maxWidth:"400px"}}>Great information should probably come here</h4>
                        <Loginform/>
                    </div>    
                </Col>
            </Row>
        </>
 );
}
 
export default Login;