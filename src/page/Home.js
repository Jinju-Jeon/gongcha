import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Button } from 'react-bootstrap'

export default function Home() {
  return (
    <>
        <Carousel fade>
        <Carousel.Item>
          <img src={process.env.PUBLIC_URL + '/img/main1.jpg'} alt="공차×흑요석 구매인증 EVENT" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={process.env.PUBLIC_URL + '/img/main2.jpg'} alt="K-밀크티 쫀득 약과·초당 옥수수" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={process.env.PUBLIC_URL + '/img/main3.jpg'} alt="BEST COMBINATION" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={process.env.PUBLIC_URL + '/img/main4.jpg'} alt="2023 대한민국 브랜드 명예의 전당 '프리미엄 티 전문점' 부문 대상 수상 " />
        </Carousel.Item>
      </Carousel>
      <Button className='intro_btn'><span>주문하기</span></Button>
    </>
  )
}
