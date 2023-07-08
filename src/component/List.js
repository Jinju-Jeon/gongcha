import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

export default function List(props) {
    const list = props.list

  return (
<Container className='menu'>
    <Row>
        {list.map((item,i)=>{
            return(
            <Col className='col' lg={1} key={i}>
                <Link to={'/option/'+item.id} state={{menu: item}}>
                    <img src={process.env.PUBLIC_URL + item.img}/>
                    <p className='name'>{item.name}</p>
                    <p className='price'>{item.price.toLocaleString()}원</p>
                </Link>
            </Col>
            )
        }) ////map
        }            
    </Row>
</Container>
  )
}
