import React from 'react';
import './footer.css';
import { Container, Col, Row } from 'reactstrap';
import fb from '../assert/icon/footer/fb.png';
 import insta from '../assert/icon/footer/insta.png';
 import google from '../assert/icon/footer/google.png';
 import tweet from '../assert/icon/footer/tweet.png';
 import linkedin from '../assert/icon/footer/linkedIn.png';

import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer id="footer" className="footer">
            <Container>
                <Row>        
                    <Col>
                        <div className="storage2">
                         <a href="https://in.linkedin.com/ "><img src={linkedin} alt="Icon" /></a>
                            <a href="https://instagram.com/" ><img src={insta} alt="Icon" /> </a>
                            <a href="https://facebook.com/" ><img src={fb} alt="Icon" /></a>
                
                            <a href="https://twitter.com/" ><img src={tweet} alt="Icon" /></a>
                            <a href="https://google.com/" ><img src={google} alt="Icon" /></a> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
export default Footer;