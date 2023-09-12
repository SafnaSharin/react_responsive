import React from 'react'
import styles from '../components/faq.module.css'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/Row'


const faq = () => {
  return (
    <div className={styles.div1}>
        <h1 className={styles.head}>Frequently Asked Questions</h1>
        <div  className={styles.row}>
        <Row>
        <hr></hr>
          <Col>
           <h1 className={styles.para}>Do you have any physical shop locations?</h1>
         </Col>
         <Col>
            <h1 className={styles.para1}>Yes, we do! If you are around the Mainland area, please feel free to visit us during regular business hours: 888 Griffiths Way, Mainland ML 12345.</h1>
          </Col>
        </Row>

        <Row>
          <Col>
           <h1 className={styles.para}>What are your shop hours?</h1>
         </Col>
         <Col>
            <h1 className={styles.para1}>Currently, we are open from Mondays to Fridays from 9:00AM to 7:00PM, and Saturdays from 10:30AM to 8:00PM. We are closed on Sundays for restock. Holiday hours may vary. Please give us a call at (987) 654-3210 for more information.</h1>
          </Col>
        </Row>

        <Row>
          <Col>
           <h1 className={styles.para}>What payment methods do you accept?</h1>
         </Col>
         <Col>
            <h1 className={styles.para1}>At this time, we only accept PayPal or in-store payments, as well as all major credit cards (such as MasterCard, Visa, American Express, and Discover).</h1>
          </Col>
        </Row>

        <Row>
          <Col>
           <h1 className={styles.para}>How can I contact you?</h1>
         </Col>
         <Col>
            <h1 className={styles.para1}>Feel free to contact us at info@yoursite.com, and we will respond to your inquiry within 1-3 business days.</h1>
          </Col>
        </Row>
     </div>
    </div>
  )
}

export default faq