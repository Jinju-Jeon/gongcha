import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhiskeyGlass, faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft, faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons'


export default function Editpage() {
    const navigate = useNavigate()

    const before = useLocation().state.editted
    const item = before.item

    const toppingTxt = [
        {name: "밀크폼", price: 500},
        {name: "펄(타피오카)", price: 500},
        {name: "코코넛", price: 500},
        {name: "알로에", price: 500},
        {name: "화이트폼", price: 500},
        {name: "치즈폼", price: 700},
      ]
    
    const [nowPrice,setPrice] = useState(item.price)

    //cup chk
    const cupTxt = ['매장컵','일회용컵','개인컵']
    const [cupSelect, setCup] = useState(before.cup)
    function cupAction(e){
      setCup(Number(e.target.value))
    }
    
    //ice chk
    const iceTxt = ['적게','보통','많이']
    const [iceSelect, setIce] = useState(before.ice)
    function iceAction(e){
        setIce(Number(e.target.value))
        
    }

    //sugar chk
    const [sugarSelect, setSugar] = useState(before.sugarSelect)
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
  
    console.log(before)

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
      </div>

    </div>
  )
}
