import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhiskeyGlass, faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft, faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'

import { editItem } from '../data/store'


export default function Editpage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const before = useLocation().state.editted
    const item = before.item

    const editIndex = useLocation().state.index

    const toppingTxt = [
        {name: "밀크폼", price: 500},
        {name: "펄(타피오카)", price: 500},
        {name: "코코넛", price: 500},
        {name: "알로에", price: 500},
        {name: "화이트폼", price: 500},
        {name: "치즈폼", price: 700},
      ]

    const [nowPrice,setPrice] = useState(before.onePrice)

    //cup chk
    const cupTxt = ['매장컵','일회용컵','개인컵']
    const [cupSelect, setCup] = useState(before.cup)
    function cupAction(e){
      setCup(Number(e.target.value))
    }
    
    //ice chk
    let iceDefault = before.ice
    const iceTxt = ['적게','보통','많이']
    const [iceSelect, setIce] = useState(iceDefault)
    if(item.ice.length>1){
      iceDefault=-1
    }

    function iceAction(e){
        setIce(Number(e.target.value))
        
    }

    //sugar chk
    let sugarDefault = before.sugarSelect
    const [sugarSelect, setSugar] = useState(sugarDefault)
    if(item.sugar.length>1){
      sugarDefault=-1
    }

    function sugarAction(e){
      setSugar(Number(e.target.value))
      const sugarEl = document.querySelectorAll('.select_sugar label')
      sugarEl.forEach((item)=>{
        const index = item.htmlFor.replace('sugar_','')
        if(index===e.target.value){
          item.classList.add('checked')
        } else{
          item.classList.remove('checked')
        }
      })
    }//sugarAction
  
    

  //topping chk
  let topSelecttemp = new Array(6)
  const [topSelect,setTopSelect] = useState(before.topping)
  function toppingAction(e){
    const index = e.target.value
    const chkNow = Number(e.target.checked)
    let count = topSelect.filter((el)=>(el==1)).length 

    if(count+chkNow>3){
      alert('토핑은 최대 3개까지 가능합니다.')
      e.target.checked = false

      return
    }    

    topSelecttemp = [...topSelect]
    topSelecttemp[index] = chkNow
    setTopSelect(topSelecttemp)

    let additional = 0
    const tempPrice = toppingTxt.filter((el,i)=>(topSelecttemp[i]===1))
    tempPrice.forEach((item)=>(additional+=item.price)) 
    setPrice(item.price+additional)

  }//topping Action

  function chkClear(){
    const chkEl = document.querySelectorAll('.select input')
    const chkLabel = document.querySelectorAll('.select label')
    chkEl.forEach((item)=>(item.checked=false))

    chkLabel.forEach((item)=>(item.classList.remove('checked')))

    setCup(-1)
    setIce(iceDefault)
    const iceLabel = document.querySelectorAll('.select_ice label')
    iceLabel.forEach((item)=>{
      if(item.htmlFor.replace('ice_','')==iceDefault){
        item.classList.add('checked')
      }
    })


    setSugar(sugarDefault)
    const sugarLabel = document.querySelectorAll('.select_sugar label')
    sugarLabel.forEach((item)=>{
      if(item.htmlFor.replace('sugar_','')==sugarDefault){
        item.classList.add('checked')
      }
    })



    setTopSelect(Array(6).fill(0))
    setPrice(item.price)
  }


  const [quantity,setQuantity] = useState(1)
  function quantChange(value){
    if(value<1){
      alert('1개 이상부터 주문이 가능합니다.')
    } else{
      setQuantity(value)
    }    
  }

  function storing(){
    if(cupSelect===-1){
      alert('컵을 선택해주세요')
      return
      } else if(iceSelect===-1){
        alert('얼음량을 선택해주세요')
        return
      } else if(sugarSelect===-1){
        alert('당도를 선택해주세요')
        return
      }
    //if


    
    dispatch(editItem({index: editIndex, item: item, cup: cupSelect, ice: iceSelect, sugarSelect: sugarSelect, topping: topSelect, quant: quantity, onePrice: nowPrice*quantity}))
    navigate('/menu/newseason')
    
  }
    















  return (
    <div className='Option'>
      <div className='back'>
        <p onClick={()=>(navigate(-1))}><FontAwesomeIcon icon={faArrowLeft} />이전화면으로</p>
      </div>
      <div className='info'>
        <div className='info_img'>
          <img src={process.env.PUBLIC_URL + item.img} />
        </div>
        <div className='info_txt'>
          <div>
            <p>{item.name}</p>
            <p>{item.price.toLocaleString()}</p>
          </div>
          <p>{item.desc}</p>
          <button
            onClick={()=>(chkClear())}
          >전체 선택 해제</button>
        </div>{/* info_txt */}
      </div>{/* info */}

      <div className='select_cover'>
        <div className='select select_cup'>
          <h2>컵 선택</h2>
          <ul>
            <li>
              <label htmlFor='cup_1' className={0===cupSelect ? "checked" : ""}>
                <input type="radio" name="cupOpt" id="cup_1" value={0}
                  onChange={(e)=>{cupAction(e)}}
                />
                <p><FontAwesomeIcon icon={faMugSaucer} /></p>            
                <p>매장컵</p>
              </label>
            </li>
            <li>
              <label htmlFor='cup_2' className={1===cupSelect ? "checked" : ""}>
                <input type="radio" name="cupOpt" id="cup_2" value={1}
                  onChange={(e)=>{cupAction(e)}}
                />
                <p><FontAwesomeIcon icon={faWhiskeyGlass} /></p>            
                <p>일회용컵</p>
              </label>
            </li>
            <li>
              <label htmlFor='cup_3' className={2 === Number(cupSelect) ? "checked" : ""}>
                <input type="radio" name="cupOpt" id="cup_3" value={2}
                  onChange={(e)=>{cupAction(e)}}
                />
                <p><FontAwesomeIcon icon={faWhiskeyGlass} /></p>            
                <p>개인컵</p>
              </label>
            </li>
            
          </ul>
        </div>

        <div className='select select_ice'>
          <h2>얼음량</h2>
        <ul>
          {item.ice.map((opt,i)=>{
            return(
              <li key={i}>
                <label htmlFor={'ice_'+opt} className={iceSelect == opt ? "checked" : ""}
                  onClick={(e)=>{iceAction(e)}}
                >
                <input type="radio" name={'iceOpt'} id={'ice_'+opt} value={opt} ></input>
                  <img src={process.env.PUBLIC_URL + '/img/ice_'+opt+'.png'}></img>
                  <p>{iceTxt[opt]}</p>
                  </label>
              </li>
              )
          })}
          </ul>
        </div>

        <div className='select select_sugar'>
          <h2>당도</h2>
        <ul>
          {item.sugar.map((opt,i)=>{
            return(
              <li key={i}>
                <label htmlFor={'sugar_'+opt} className={opt == sugarSelect ? 'checked' : ' '}
                  onClick={(e)=>(sugarAction(e))}
                >
                <input type="radio" name={'sugarOpt'} id={'sugar_'+opt} value={opt}></input>
                  <img src={process.env.PUBLIC_URL + '/img/sugar_'+opt+'.png'}></img>
                  <p>{opt}%</p>
                  </label>
              </li>
              )
          })}
          </ul>
        </div>

        <div className='select select_topping'>
          <h2>추가 토핑<span>(선택사항 / 최대 3개)</span></h2>
          <ul>
            {
              toppingTxt.map((item,i)=>{
                if(topSelect[i]===1){
                  return(
                    <li key={i}>
                      <label className="checked">
                        <input type="checkbox" name="topOpt" id={"top"+i} value={i} 
                          onChange={(e)=>{toppingAction(e)}} checked
                        />
                        <img src={process.env.PUBLIC_URL + '/img/top'+i+'.gif'}></img>
                        <p>
                          {item.name}<br/>
                          (+{item.price}원)
                        </p> 
                      </label>
                    </li>
                  )
                } else{
                  return(
                  <li key={i}>
                    <label className={""}>
                      <input type="checkbox" name="topOpt" id={"top"+i} value={i} 
                        onChange={(e)=>{toppingAction(e)}}
                      />
                      <img src={process.env.PUBLIC_URL + '/img/top'+i+'.gif'}></img>
                      <p>
                        {item.name}<br/>
                        (+{item.price}원)
                      </p> 
                    </label>
                  </li>
                  ) ///map-return

                }

              })//map-end
            }
          </ul>
        </div>


      </div>
      
      <div className='item_total'>
          <h2>주문 확인</h2>
          <div>
            <div className='now_option'>
              <ul>
                <li><b>컵: </b>{cupTxt[cupSelect]}</li>
                <li><b>얼음: </b>{iceTxt[iceSelect]}</li>
                <li><b>당도: </b>{sugarSelect===-1 ? "" : sugarSelect+"%" }</li>
                <li>
                  <b>추가 토핑: </b>
                  {
                  toppingTxt.filter((item,i)=>(topSelect[i]===1)).length === 0 ? "없음" :
                  toppingTxt.filter((item,i)=>(topSelect[i]===1)).map((item,i)=>(
                        <span key={i}>{item.name}</span>
                    ))
                }</li>

              </ul>
            </div>{/* now_option */}
            <div className='order_detail'>
              <div className='quantity'>
                <h4>수량</h4>
                <p>
                  <button onClick={()=>(quantChange(quantity-1))}>
                    <FontAwesomeIcon icon={faCircleMinus} />
                  </button>
                  <span className='now_quant'>{quantity}</span>
                  <button onClick={()=>(quantChange(quantity+1))}>
                    <FontAwesomeIcon icon={faCirclePlus} />
                  </button>
                </p>

              </div>
              <div className='total'>
                <h4>현재 금액</h4>
                <p>{(nowPrice*quantity).toLocaleString()}원</p>                
              </div>
              <div className='btn_cover'>
                <button className='add_other' onClick={()=>{
                    storing()
                  }}>다른 메뉴 추가</button>
                <button className='pay'>바로결제</button>
              </div>
            </div>
          </div>
      </div>

    </div>
  )
}
