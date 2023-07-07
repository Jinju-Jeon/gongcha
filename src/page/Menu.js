import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

export default function Menu() {
  const nowPath = useLocation().pathname.replace('/Menu/','')
  console.log(nowPath)
  

  return (
    <div className='Menu'>
      <div className='back'><FontAwesomeIcon icon={faHouse} />메인화면으로</div>
        <ul>
          <li className='on'><Link to='newseason'>NEW 시즌</Link></li>
          <li><Link to='best'>베스트 콤비</Link></li>
          <li><Link to='milktea'>밀크티</Link></li>
          <li><Link to='jewelry'>쥬얼리</Link></li>
          <li><Link to='smoothie'>스무디</Link></li>
          <li><Link to='original'>오리지널 티</Link></li>
          <li><Link to='fruit'>프룻티</Link></li>
          <li><Link to='fruitmix'>프룻믹스</Link></li>
          <li><Link to='coffee'>커피</Link></li>
        </ul>
        <div className='center'>
          <Outlet></Outlet>
          
        </div>
        <div className='bottom'>
          <h1>주문 내역</h1>
          <div>
            <div className=''>여기에 주문 내역 띄우기</div>
            <div>여기에 결제 버튼 놓기</div>
          </div>
        </div>
        

    </div>
  )
}
