import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Order() {
  return (
    <>
        <div>상품 카테고리를 넣기</div>
        <div>
          <Outlet></Outlet>
          <div>Outlet으로 리스트를 불러오기</div>
          <div>여기에 우측메뉴를 넣기</div>
        </div>
        <div>여기에 하단메뉴를 넣기</div>
        

    </>
  )
}
