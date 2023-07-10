import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCreditCard } from '@fortawesome/free-solid-svg-icons'

import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, deleteAll } from '../data/store'
import { useNavigate } from 'react-router-dom'



export default function OrderList() {
  const state = useSelector(state=>state)
  const nowOrder = state.order
  let wholePrice = 0

  const topping = [
    {name: "밀크폼", price: 500},
    {name: "펄(타피오카)", price: 500},
    {name: "코코넛", price: 500},
    {name: "알로에", price: 500},
    {name: "화이트폼", price: 500},
    {name: "치즈폼", price: 700},
  ]

  nowOrder.forEach((item)=>(wholePrice+=item.onePrice))
  console.log(nowOrder)
  const iceTxt = ['적게','보통','많이']
  const cupTxt = ['매장컵','일회용컵','개인컵']
  
  const navigate = useNavigate()



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
                    const topTxt = topping.filter((txt,i)=>(el.topping[i]===1))
                    
                    return(
                      <li key={i}>
                        <div>
                          <p><b>{(i+1)+". "+el.item.name}</b></p>
                          <div className='li_top'>
                            <p>{el.onePrice.toLocaleString()}원</p>
                            <p>
                              <button
                                onClick={()=>(navigate('/editpage',{state: {index: i, editted: el}}))}
                              >수정</button>
                              <button className='delete'
                                onClick={()=>(dispatch(deleteItem(i)))}
                              >삭제</button>
                            </p>
                          </div>
                        </div>
                        <div>
                          <p>
                          <b>옵션: </b>
                            {cupTxt[el.cup]} - 
                            얼음:{iceTxt[el.ice]} - 
                            당도:{el.sugarSelect}% - 
                            토핑:{topTxt.length===0 ? " 없음" : 
                            topTxt.map((element,j,arr) => (
                              <span key={j}>{element.name}{j===arr.length-1? "" : ", "}</span>
                            )) 
                            } - 
                            수량: {el.quant}
                          </p>
                        </div>
                      </li>
                    )})//nowOrder map
                    }

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
