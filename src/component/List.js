import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function List(props) {
    const list = props.list
    const item = list[0]

  return (
<Container className='menu'>
    <Row>
        {list.map((item,i)=>{
            return(
            <Col className='col' lg={1} key={i}>
                <div>
                    <img src={process.env.PUBLIC_URL + item.img}/>
                    <p className='name'>{item.name}</p>
                    <p className='price'>{item.price.toLocaleString()}원</p>
                </div>
            </Col>
            )
        }) ////map
        }            
    </Row>
</Container>
  )
}
