import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCreditCard } from '@fortawesome/free-solid-svg-icons'

import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, deleteAll } from '../data/store'



export default function OrderList() {
  const state = useSelector(state=>state)
  const nowOrder = state.order
  let wholePrice = 0

  nowOrder.forEach((item)=>(wholePrice+=item.onePrice))
  




  let liShape = []
  if(nowOrder.length<4){
    liShape = Array(4-nowOrder.length).fill('')    
  }

  const dispatch = useDispatch()


  return (
    <div className='bottom'>
          <h1>주문 내역</h1>
          <div>
            <div className='order_cover'>
                <ul className='order_list'>
                  {nowOrder.map((el,i)=>{
                    return(
                      <li key={i}>
                        <p>
                          <span>{i+1}. {el.item.name}</span>
                          <span>
                            {el.onePrice.toLocaleString()}원
                          </span>
                        </p>
                        {el.cup} - 
                        얼음 {el.ice} - 
                        당도 {el.sugarSelect}% - 
                        {el.topping.length===0 ? " 토핑 없음" : 
                          el.topping.map((element,j) => (<span key={j}> {element.name}</span>))
                        } - 
                        수량: {el.quant}
                        <button
                          onClick={()=>(dispatch(deleteItem(i)))}
                        >
                          삭제 
                        </button>
                      </li>
                    )})}

                  {nowOrder.length<4 ? liShape.map((item,i)=>(<li key={i}></li>)) : ""}
                    
                </ul>
            </div>
            <div className='menu_btn'>
                <button className='delete'
                  onClick={()=>(dispatch(deleteAll()))}
                ><FontAwesomeIcon icon={faXmark} /> 전체 삭제</button>
                <div className='total'>
                  <p>총 금액</p>
                  <p>{wholePrice.toLocaleString()}원</p>
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
