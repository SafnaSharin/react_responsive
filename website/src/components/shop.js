import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from './shop.module.css';
import {MdFilterAlt} from 'react-icons/md'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/esm/Button';
import img1 from '../images/_stock_sample_yellowLuggageB.webp'
import img2 from '../images/_stock_sample_xsSteelWaterBottleA.webp'
import img3 from '../images/_stock_sample_shapesWhiteSprayBottleB.png'
import img4 from '../images/_stock_sample_cafeMagazineBookB.webp'
import img5 from '../images/_stock_sample_brownPurseB.webp'
import img6 from '../images/_stock_sample_diamondLuggageB.webp'

const shop = () => {
  return (
    <div>
      <Row className={styles.row}>
        <h1  className={styles.para1}>All Products</h1>
      </Row>
      <Row>
        <Col>
           <h1 className={styles.para2}>Shop/All Products-Showing 1-6 of 21 results</h1>
       </Col>
           <Col>
           <div class="col-md-6 text-end" className={styles.btndiv}>
           <button className={styles.btn1} type="button" varient="btn-outline-secondary "><MdFilterAlt/> Filter Products</button>
           <Dropdown className="d-inline mx-2" >
        <Dropdown.Toggle id="dropdown-autoclose-true"className={styles.btnnd} >
          Default Dropdown
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          <Dropdown.Item href="#">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
           </div>
        </Col>
      </Row>
   <div className={styles.div2}> 

   {/* item-1 */}
    <Row class='Col-12'>
        <div class='col-lg-4 col-md-4 justify-content-center '>
          <img
          className={styles.img1}
          src={img1}
          alt='img'
           ></img>
        </div>
        <div class='col-lg-8 col-md-8 '>
           <p className={styles.detail}>$175.00</p>
           <p className={styles.headings}>Daisy Suitcase</p>
           <p class="text-secondary">This is a great place for you to add a short description about your product. Click the Store icon and click the "Manage Product" button to customize your product description.</p>
           <p> <Button variant="outline-success">Add to cart</Button></p>
        </div>
        <hr class='justify-content-center'></hr>
   </Row>

{/* item-2 */}
   <Row class='Col-12'>
        <div class='col-lg-4 col-md-4 justify-content-center '>
          <img
          className={styles.img1}
          src={img2}
          alt='img'
           ></img>
        </div>
        <div class='col-lg-8 col-md-8 '>
           <p className={styles.detail}>$40.00</p>
           <p className={styles.headings}>Confetti Steel Tumbler</p>
           <p class="text-secondary">This is a great place for you to add a short description about your product. Click the Store icon and click the "Manage Product" button to customize your product description.</p>
           <p> <Button variant="outline-success">Add to cart</Button></p>
        </div>
        <hr class='justify-content-center'></hr>
   </Row>

{/* item-3 */}
   <Row class='Col-12'>
        <div class='col-lg-4 col-md-4 justify-content-center '>
          <img
          className={styles.img1}
          src={img3}
          alt='img'
           ></img>
        </div>
        <div class='col-lg-8 col-md-8 '>
           <p className={styles.detail}>$20.00</p>
           <p className={styles.headings}>Hydrating Face Mist</p>
           <p class="text-secondary">This is a great place for you to add a short description about your product. Click the Store icon and click the "Manage Product" button to customize your product description.</p>
           <p> <Button variant="outline-success">Add to cart</Button></p>
        </div>
        <hr class='justify-content-center'></hr>
   </Row>

   {/* item-4 */}
   <Row class='Col-12'>
        <div class='col-lg-4 col-md-4 justify-content-center '>
          <img
          className={styles.img1}
          src={img4}
          alt='img'
           ></img>
        </div>
        <div class='col-lg-8 col-md-8 '>
           <p className={styles.detail}>$40.00</p>
           <p className={styles.headings}>Dark Roast Issue #20</p>
           <p class="text-secondary">This is a great place for you to add a short description about your product. Click the Store icon and click the "Manage Product" button to customize your product description.</p>
           <p> <Button variant="outline-success">Add to cart</Button></p>
        </div>
        <hr class='justify-content-center'></hr>
   </Row>

   {/* item-5 */}
   <Row class='Col-12'>
        <div class='col-lg-4 col-md-4 justify-content-center '>
          <img
          className={styles.img1}
          src={img5}
          alt='img'
           ></img>
        </div>
        <div class='col-lg-8 col-md-8 '>
           <p className={styles.detail}>$250.00</p>
           <p className={styles.headings}>Vegan Leather Bag</p>
           <p class="text-secondary">This is a great place for you to add a short description about your product. Click the Store icon and click the "Manage Product" button to customize your product description.</p>
           <p> <Button variant="outline-success">Add to cart</Button></p>
        </div>
        <hr class='justify-content-center'></hr>
   </Row>

    {/* item-6 */}
    <Row class='Col-12'>
        <div class='col-lg-4 col-md-4 justify-content-center '>
          <img
          className={styles.img1}
          src={img6}
          alt='img'
           ></img>
        </div>
        <div class='col-lg-8 col-md-8 '>
           <p className={styles.detail}>$250.00</p>
           <p className={styles.headings}>Vegan Leather Bag</p>
           <p class="text-secondary">This is a great place for you to add a short description about your product. Click the Store icon and click the "Manage Product" button to customize your product description.</p>
           <p> <Button variant="outline-success">Add to cart</Button></p>
        </div>
   </Row>
 </div>
    </div>
  )
}

export default shop