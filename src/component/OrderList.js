import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCreditCard } from '@fortawesome/free-solid-svg-icons'



export default function OrderList() {
  return (
    <div className='bottom'>
          <h1>주문 내역</h1>
          <div>
            <div className='order_cover'>
                <ul className='order_list'>
                  <li>주문리스트를적기</li>
                  <li>주문리스트를적기</li>
                  <li>주문리스트를적기</li>
                  <li>주문리스트를적기</li>
                  <li>주문리스트를적기</li>
                  <li>주문리스트를적기</li>
                  <li>주문리스트를적기</li>
                </ul>
            </div>
            <div className='menu_btn'>
                <button className='delete'><FontAwesomeIcon icon={faXmark} /> 전체 삭제</button>
                <div className='total'>
                  <p>총 금액</p>
                  <p>
                    얼마얼마 원
                  </p>
                </div>
                <button className='pay'>
                  <p><FontAwesomeIcon icon={faCreditCard} /></p>                
                  결제하기
                </button>
            </div>
          </div>
    </div>
  )
}
