import React from 'react'
import Row from 'react-bootstrap/esm/Row' 
import styles from '../components/about.module.css'
import Col from 'react-bootstrap/esm/Col'
import img1 from '../images/imageProxy (6).webp'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card';
import img2 from '../images/imageProxy (7).webp'
import img3 from '../images/imageProxy (8).webp'
import img4 from '../images/imageProxy (9).webp'
import img5 from '../images/imageProxy (10).webp'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'



const about = () => {
  return (
    <div>
        <div className={styles.div}>
            <Row className={styles.row1}>
             <div class='col-lg-8'>
              <h1 className={styles.content1} >Established in 2020, Elemental provides quality lifestyle products that help you transform a house into a home.</h1>
             </div>
            </Row>
        </div>
        <Row>
            <Col>
             <img 
              className={styles.img1}
              src={img1}
              alt='pic'></img>
            </Col>
            <Col>
             <h1 className={styles.head1}>About us</h1>
             <p className={styles.para1}>You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours. This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here? Tell the world about your business, and make this text yours.</p>
             <p className={styles.btn}><Button variant="outline-success" >Contact us</Button></p>
            </Col>
        </Row>
        <div className={styles.div3}>
            <Row>
                <h1 className={styles.head2}>Our Team</h1>
            </Row>
      
           <div className={styles.div4}>
            <Row class='Col-sm-1 Col-md-2 Col-lg-4' >
                 {/* card1 */}
            <Col >
                <Card className={styles.card}>
             <Card.Img variant="top" src={img2} />
               <Card.Body className={styles.body1}>
                <Card.Title className={styles.title}>Josie Lane</Card.Title>
                <Card.Title class="text-secondary">Job Position</Card.Title>
                <Card.Text>
                This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here?
             </Card.Text>
            <FaFacebookF />
            <BsTwitter />
           

             </Card.Body>
            </Card>
            </Col>
                {/* card2 */}
            <Col class='col-md-6'>
            <Card className={styles.card}>
             <Card.Img variant="top" src={img3} />
               <Card.Body className={styles.body1}>
                <Card.Title className={styles.title}>Candace Lee</Card.Title>
                <Card.Title class="text-secondary">Job Position</Card.Title>
                <Card.Text>
                This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here?
             </Card.Text>
             <FaFacebookF />
            <BsTwitter />
             </Card.Body>
            </Card>
            </Col>

                 {/* card3 */}
            <Col>
            <Card className={styles.card}>
             <Card.Img variant="top" src={img4} />
               <Card.Body className={styles.body1}>
                <Card.Title className={styles.title}>Gregory Khan</Card.Title>
                <Card.Title class="text-secondary">Job Position</Card.Title>
                <Card.Text>
                This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here?
             </Card.Text>
             <FaFacebookF />
            <BsTwitter />
             </Card.Body>
            </Card>
            </Col>

                  {/* card4 */}
            <Col>
            <Card className={styles.card}>
             <Card.Img variant="top" src={img5} />
               <Card.Body className={styles.body1}>
                <Card.Title className={styles.title}>Martin Reed</Card.Title>
                <Card.Title class="text-secondary">Job Position</Card.Title>
                <Card.Text>
                This is a paragraph. You can write your own content here, and fill in the blanks. What's your story and where do you go from here?
             </Card.Text>
             <FaFacebookF />
            <BsTwitter />
             </Card.Body>
            </Card>
            </Col>
            </Row>
         </div>
            
        </div>
    </div>
  )
}

export default about