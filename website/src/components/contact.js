import React from 'react'
import styles from '../components/contact.module.css'
import Row from 'react-bootstrap/esm/Row'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'

const contact = () => {
  return (
    <div>
        <div className={styles.div1}>
            <Row>
             <div class='col-lg-12'>
              <h1 className={styles.head} >Contact Us</h1>
              <div className={styles.div2}>
              <p className={styles.para}>Have a question or comment? Please fill out the form below, and we will respond to your inquiry shortly.<br></br>For bulk and rushed orders, please call us for an immediate response.</p>
              </div>
             </div>
            </Row>
            </div>

           <div className={styles.form}>
           <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label  class="text-secondary">First Name*</Form.Label>
          <Form.Control type="name" className={styles.label} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label  class="text-secondary">Last Name*</Form.Label>
          <Form.Control type="password" className={styles.label} />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label  class="text-secondary">Email*</Form.Label>
        <Form.Control type="email" className={styles.label}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label  class="text-secondary">Message*</Form.Label>
        <Form.Control as="textarea" rows={3} className={styles.label}/>
      </Form.Group>

     </Form>

      </div>
       
    </div>
  )
}

export default contact