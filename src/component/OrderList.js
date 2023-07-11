import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCreditCard } from '@fortawesome/free-solid-svg-icons'

import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, deleteAll } from '../data/store'
import { Link, useNavigate } from 'react-router-dom'

import { iceTxt, cupTxt, toppingTxt } from '../data/optTxt'



export default function OrderList() {
  const state = useSelector(state=>state)
  
  const nowOrder = state.order
  let wholePrice = 0

  nowOrder.forEach((item)=>(wholePrice+=item.onePrice))
  
  
  const navigate = useNavigate()
  const dispatch = useDispatch()



  let liShape = []
  if(nowOrder.length<5){
    liShape = Array(5-nowOrder.length).fill('')    
  }

  function payTest(){
    if(nowOrder.length<1){
      alert('1개 이상의 메뉴를 주문해주세요.')
    } else{
      navigate('/pay')
    }
  }



  return (
    <div className='right'>
      <h1>주문 내역</h1>
        <div className='order_cover'>
            <ul className='order_list'>
              {nowOrder.map((el,i)=>{
                const topTxt = toppingTxt.filter((txt,i)=>(el.topping[i]===1))
                
                return(
                  <li key={i}>
                    <div>
                      <p><b>{(i+1)+". "+el.item.name}</b></p>
                      <p>
                        <button
                          onClick={()=>(navigate('/editpage',{state: {index: i, editted: el}}))}
                        >수정</button>
                        <button className='delete'
                          onClick={()=>(dispatch(deleteItem(i)))}
                        >삭제</button>
                      </p>
                    </div>

                    <div>
                      <p>
                        {cupTxt[el.cup]} - 
                        얼음:{iceTxt[el.ice]} - 
                        당도:{el.sugarSelect}%<br/>
                        토핑:{topTxt.length===0 ? " 없음" : 
                        topTxt.map((element,j,arr) => (
                          <span key={j}>{element.name}{j===arr.length-1? "" : ", "}</span>
                        )) 
                        }
                      </p>
                      <p>
                        수량: {el.quant}<br/>
                        {el.onePrice.toLocaleString()}원
                      </p>
                    </div>
                  </li>
                )})//nowOrder map
                }

              {nowOrder.length<4 ? liShape.map((item,i)=>(<li key={i}></li>)) : ""}
                
            </ul>
        </div>
        <div className='menu_btn'>
            <div className='total'>
              <p>총 금액</p>
              <p>{wholePrice.toLocaleString()}원</p>
            </div>
            <div className='btn_cover'>
              <button className='delete'
                onClick={()=>(dispatch(deleteAll()))}
              ><FontAwesomeIcon icon={faXmark} /> 전체 삭제</button>
              <button className='pay' onClick={()=>{
                    payTest()
                  }}>
                  <FontAwesomeIcon icon={faCreditCard} />
                  결제하기
              </button>
              </div>
        </div>
      </div>
  )
}
