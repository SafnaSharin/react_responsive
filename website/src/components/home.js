import React from 'react'
import styles from './home.module.css'
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/esm/CardImg';
import Row from 'react-bootstrap/Row'
import img1 from '../images/imageProxy.webp'
import img2 from '../images/imageProxy (1).webp'
// import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import img3 from '../images/imageProxy (2).webp';
import img4 from '../images/imageProxy (3).webp';
import img5 from '../images/imageProxy (4).webp';
import img6 from '../images/imageProxy (5).webp';

const home = () => {
  return (
    <div>
      <CardGroup >
        <Card className={styles.card}>
          <CardImg src={img1} className={styles.img1}></CardImg>
        </Card>
        <Card className={styles.card}>
            <CardImg src={img2}  className={styles.img2}></CardImg>
        </Card>
      </CardGroup>
      <container className={styles.container}>
        <Row className={styles.row}>
            <div class="col-md-6"> 
              <h1 className={styles.head}>Find the perfect Gift!</h1>
            </div>
            <div class="col">
            <p className={styles.para}>A Spring Collection with a brand new look, inspired by Scandinavian and minimalist styles. Find a timeless aesthetic that lets you imagine all possibilities and complete your home.</p>
            <Button className={styles.btn} variant="outline-success">See what's New</Button>
            </div>
        </Row>
      </container>
      <div id={styles.div3}>
          <CardGroup className={styles.cardg}>
            <Card  className={styles.card1} >
                <CardImg className={styles.img3} src={img3}></CardImg>
            </Card>
            <Card className={styles.card1}>
                <CardImg className={styles.img4} src={img4}></CardImg>
            </Card>
            <Card className={styles.card1}>
                <CardImg className={styles.img5} src={img5}></CardImg>
            </Card>
            <Card className={styles.card1}>
                <CardImg className={styles.img6} src={img6}></CardImg>
            </Card>
         </CardGroup>
      </div>
      
    </div>
  )
}

export default home