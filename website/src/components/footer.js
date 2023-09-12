import React from 'react'
import Row from 'react-bootstrap/esm/Row'
import styles from './footer.module.css';
import Container from 'react-bootstrap/esm/Container';
import {FaFacebookF} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';

const footer = () => {
  return (
    <div class='col-md-12'>
        <Container className={styles.footer}>
            <Row ><h1 className={styles.para1}>Elemental Lifestyle</h1></Row>
            <Row><p  className={styles.para2}>888 Griffiths Way, Mainland ML 12345<br></br>
                    (987) 654-3210<br></br>
                    info@yoursite.com</p></Row>
                    <Row className={styles.para3} >
                    <p className={styles.icon1}><FaFacebookF /></p>
                    <p className={styles.icon2}><AiOutlineTwitter /></p>
                    <p className={styles.icon3}><AiFillInstagram /></p></Row>
                    <Row ><p className={styles.para3}>Copyright 2023 Website.com. All Rights Reserved.</p></Row>
                    <Row><h1 className={styles.para4}>W</h1></Row>
                    <Row ><p className={styles.para5}>Copyright 2023 Website.com. All Rights Reserved.</p></Row>
        </Container>
    </div>
  )
}

export default footer