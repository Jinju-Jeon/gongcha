import React from 'react'
import { Outlet, Link } from 'react-router-dom'


export default function Order() {
  return (
    <div className='Order'>
        <ul>
          <li><Link to='new'>NEW 시즌 메뉴</Link></li>
          <li><Link to='best'>베스트 콤비네이션</Link></li>
          <li><Link to='milktea'>밀크티</Link></li>
          <li><Link to='jewelry'>쥬얼리</Link></li>
          <li><Link to='smoothie'>스무디</Link></li>
          <li><Link to='original'>오리지널 티</Link></li>
          <li><Link to='fruit'>프룻티</Link></li>
          <li><Link to='fruitmix'>프룻믹스</Link></li>
          <li><Link to='coffee'>커피</Link></li>
        </ul>
        <div>
          <Outlet></Outlet>
          <div>Outlet으로 리스트를 불러오기</div>
          <div>여기에 우측메뉴를 넣기</div>
        </div>
        <div>여기에 하단메뉴를 넣기</div>
        

    </div>
  )
}
