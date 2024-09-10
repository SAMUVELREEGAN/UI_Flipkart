import React from 'react'
import Moblie from '../Page/Moblie'
import { mobile ,laptop,fashion, shoe} from '../data/AllData'
import Laptop from '../Page/Laptop'
import Fashion from '../Page/Fashion'
import Shoe from '../Page/Shoe'
import '../Maping/Map.css'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'

const DataMap = ({type}) => {

  return (
    <div>
      {/* <h1>{type === 'mobile' ? 'Mobile Products' : type === 'laptop' ? 'Laptop Products' : type === 'fashion' ? 'Fashion Products' : type ==='shoe' ? 'Shoe Product': 'Appliances' }</h1> */}
      <Container fluid className='map_container'>
      <Row>
        <Col lg={2} ></Col>
        <Col lg={10}>
        <div className='map_style'>
        <a href="/mobile">Mobiles <span className='ps-3'>|</span></a>
        <a href="/laptop">Laptops  <span className='ps-3'>|</span></a>
        <a href="/fashion">Fashions  <span className='ps-3'>|</span></a>
        <a href="/shoe">Shoes  <span className='ps-3'>|</span></a>
        <a href="/shoe">Appliances  <span className='ps-3'>|</span></a>
        <a href="/shoe">Golds </a>
      </div>
        </Col>
      </Row>
      </Container>
      <div className="product-list">
        {type === 'mobile' && 
        mobile.map(product => (<Moblie key={product.id} name={product.name} description={product.description} imageUrl={product.imageUrl} price={product.price}/>))}

        {type === 'laptop' && 
        laptop.map(product => ( <Laptop key={product.id} name={product.name} description={product.description} imageUrl={product.imageUrl} price={product.price} />))}

        {type === 'fashion' && 
        fashion.map(product => ( <Fashion key={product.id} name={product.name} description={product.description} imageUrl={product.imageUrl}  price={product.price} />))}

        {type === 'shoe' && 
        shoe.map(product => ( <Shoe key={product.id} name={product.name} description={product.description} imageUrl={product.imageUrl}  price={product.price} />))}
      </div>
    </div>
  )
}

export default DataMap