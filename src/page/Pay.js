import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { deleteAll, deleteItem } from '../data/store'

import { Modal, Button } from 'react-bootstrap'



import { iceTxt, cupTxt, toppingTxt } from '../data/optTxt'
const memberList = ['1234','abcd','1113','a098']

export default function Pay() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const state = useSelector(state=>state).order

    let liShape = []
    if(state.length<6){
        liShape = Array(6-state.length).fill('')
    }


    let wholePrice = 0
    state.forEach((el)=>(wholePrice+=el.onePrice))

    


    //modal
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [nowPw,setPw] = useState('')
    
    
    const [discount,setDiscount] = useState(1)
    function discountChk(){
        if(discount===0.9){
            alert('이미 할인이 적용되었습니다.')
        } else{
            handleShow()
        }

    }


    function pwChk (){

        if(memberList.includes(nowPw)){
            setDiscount(0.9)
            alert('아이디가 존재합니다. 할인이 적용됩니다.')
            
            document.querySelector('.m_apply').classList.add('on')
            document.querySelector('.m_apply').innerText = '*멤버십 적용'
            handleClose()

        } else{
            alert('아이디가 존재하지 않습니다.')
            document.querySelector('#pwInput').select()
        }
    }//pwChk


    function payed(){
        alert('총'+(wholePrice*discount).toLocaleString()+'원 주문 완료 되었습니다. 메인 화면으로 돌아갑니다.')
        dispatch(deleteAll())
        navigate('/')
    }

  return (
    <div className='pay_js'>
        <div className='back'>
          <p onClick={()=>(navigate('/menu/newseason'))}><FontAwesomeIcon icon={faArrowLeft} />이전화면으로</p>
        </div>
        <h1>주문 내역</h1>
        <div className='pay_inner'>
        <ul className='pay_list'>
        {state.map((el,i)=>{
            const topNow = toppingTxt.filter((element,i)=>(el.topping[i]===1))            
            return (
            <li key={i}>
                <div>
                    <div>
                        <img src={process.env.PUBLIC_URL + el.item.img} />
                    </div>
                    <div>
                        <div className='info_top'>
                            <p>{i+1} {el.item.name}</p>
                            <p>{el.onePrice.toLocaleString()}원</p>
                        </div>
                        <div className='selected_opt'>
                            <p>
                                <b>옵션: </b>
                                {cupTxt[el.cup]} 
                                 - {iceTxt[el.ice]} 
                                 - {el.sugarSelect}% 
                                 - {topNow.length>0 ? 
                                    topNow.map((topp,j)=>(<span key={j}>{topp.name}</span>))
                                    : <span>없음</span>}
                                - 수량: {el.quant}
                            </p>
                            <p className='button_cover'>
                                <button
                                  onClick={()=>(navigate('/editpage',{state: {index: i, editted: el}}))}
                                >수정</button>
                                <button className='delete'
                                  onClick={()=>(dispatch(deleteItem(i)))}
                                >삭제</button>                                
                            </p>
                        </div>
                    </div>
                </div>
            </li>) ////map
        }
        )}
        {state.length<6 ? 
            liShape.map((e,k)=>(<li key={k}></li>))
        : "아니요"}

        </ul>

        <div className='pay_total'>
            <p>총 <span>{(wholePrice*discount).toLocaleString()}원 </span></p>
            <p className='m_apply'>*멤버십 미적용</p>
        </div>
        
        <div className='membership'>
            <button onClick={()=>{
                discountChk()
            }}>멤버십 할인</button>
            <button
                onClick={()=>{payed()}}
            >결제하기</button>

        </div>

        </div> {/* inner */}

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} className='m_modal'>
        <Modal.Header closeButton>
          <Modal.Title>멤버십 할인(10%)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>할인을 적용하려면 멤버 아이디 4자리를 입력해주세요</p>
          <input id="pwInput" type='text' placeholder='예시) 1234' value={nowPw} onChange={(e)=>setPw(e.target.value)}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button className='m_ok' onClick={()=>{pwChk()}}
          >확인</Button>
          <Button className='m_no' onClick={()=>{
            handleClose()
            setPw('')
            }}> 취소 </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
