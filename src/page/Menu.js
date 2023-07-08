import React from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import OrderList from '../component/OrderList'

export default function Menu() {
  const nowPath = useLocation().pathname.replace('/Menu/','')

  

  return (
    <div className='Menu'>
      <div className='back'><Link to ='/'><FontAwesomeIcon icon={faHouse} />메인화면으로</Link></div>
        <ul className='category'>
          <li className={nowPath==='newseason' ? 'on' : ''}><Link to='newseason'>NEW 시즌</Link></li>
          <li className={nowPath==='best' ? 'on' : ''}><Link to='best'>베스트 콤비</Link></li>
          <li className={nowPath==='milktea' ? 'on' : ''}><Link to='milktea'>밀크티</Link></li>
          <li className={nowPath==='jewelry' ? 'on' : ''}><Link to='jewelry'>쥬얼리</Link></li>
          <li className={nowPath==='smoothie' ? 'on' : ''}><Link to='smoothie'>스무디</Link></li>
          <li className={nowPath==='original' ? 'on' : ''}><Link to='original'>오리지널 티</Link></li>
          <li className={nowPath==='fruit' ? 'on' : ''}><Link to='fruit'>프룻티</Link></li>
          <li className={nowPath==='fruitmix' ? 'on' : ''}><Link to='fruitmix'>프룻믹스</Link></li>
          <li className={nowPath==='coffee' ? 'on' : ''}><Link to='coffee'>커피</Link></li>
        </ul>
        <div className='center'>
          <Outlet></Outlet>
          
        </div>
        <OrderList />
        

    </div>
  )
}
