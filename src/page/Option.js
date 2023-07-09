import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhiskeyGlass, faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


const topping = [
  {name: "밀크폼", price: 500},
  {name: "펄(타피오카)", price: 500},
  {name: "코코넛", price: 500},
  {name: "알로에", price: 500},
  {name: "화이트폼", price: 500},
  {name: "치즈폼", price: 700},
]




export default function Option() {

  const navigate = useNavigate()

  const item = useLocation().state.menu
  
  //cup chk
  const cupTxt = ['매장컵','일화용컵','개인컵']
  const [cupSelect, setCup] = useState(-1)
  function cupAction(e){
    setCup(Number(e.target.value))

    const cupEl = document.querySelectorAll('.select_cup label')
    cupEl.forEach((item,i)=>{
      if(i===(Number(e.target.value))){
        item.classList.add('checked')
      } else{
        item.classList.remove('checked')
      }
    })
  }

  //ice chk
  const iceTxt = ['적게','보통','많이']
  const [iceSelect, setIce] = useState(-1)
  function iceAction(e){
    setIce(Number(e.target.value))

    const iceEl = document.querySelectorAll('.select_ice label')
    iceEl.forEach((item,i)=>{
      if(i===(Number(e.target.value))){
        item.classList.add('checked')
      } else{
        item.classList.remove('checked')
      }
    })
    
    
  }

  //sugar chk
  const [sugarSelect, setSugar] = useState(-1)
  function sugarAction(e){

    setSugar(Number(e.target.value))

    const sugarWh = [0,30,50,70,100]
    const sugarEl = document.querySelectorAll('.select_sugar label')
    const nth = sugarWh.findIndex((el)=>(el===Number(e.target.value)))
    
    
    sugarEl.forEach((item,i)=>{
      if(i===nth){
        item.classList.add('checked')
      } else{
        item.classList.remove('checked')
      }
    })    
  }//sugarAction
  
  //topping chk
  let topSelecttemp = new Array(6)
  const [topSelect,setTopSelect] = useState(Array(6).fill(0))
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

    const eLabel = document.querySelectorAll('.select_topping label')[index]
    if(chkNow){
      eLabel.classList.add('checked')
    } else{
      eLabel.classList.remove('checked')
    }

  
  }//topping Action
  const [nowPrice,setPrice] = useState(item.price)

  





















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
            <p>{item.price}</p>
          </div>
          <p>{item.desc}</p>
          <button>전체 선택 해제</button>
        </div>{/* info_txt */}
      </div>{/* info */}

      <div className='select_cover'>
        <div className='select select_cup'>
          <h2>컵 선택</h2>
          <ul>
            <li>
              <label htmlFor='cup_1'>
                <input type="radio" name="cupOpt" id="cup_1" value={0}
                  onChange={(e)=>{cupAction(e)}}
                />
                <p><FontAwesomeIcon icon={faMugSaucer} /></p>            
                <p>매장컵</p>
              </label>
            </li>
            <li>
              <label htmlFor='cup_2'>
                <input type="radio" name="cupOpt" id="cup_2" value={1}
                  onChange={(e)=>{cupAction(e)}}
                />
                <p><FontAwesomeIcon icon={faWhiskeyGlass} /></p>            
                <p>일회용컵</p>
              </label>
            </li>
            <li>
              <label htmlFor='cup_3'>
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
                <label htmlFor={'ice_'+opt}
                  onClick={(e)=>{iceAction(e)}}
                >
                <input type="radio" name={'iceOpt'} id={'ice_'+opt} value={opt}></input>
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
                <label htmlFor={'sugar_'+opt}
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
          <h2>추가 토핑<span>(최대 3개)</span></h2>
          <ul>
            {
              topping.map((item,i)=>{
                return(
                <li key={i}>
                  <label>
                    <input type="checkbox" name="topOpt" id={"top"+i} value={i}
                      onChange={(e)=>{toppingAction(e)}}
                    />
                    <img src={process.env.PUBLIC_URL + '/img/top'+i+'.gif'}></img>
                    <p>{item.name}</p> 
                  </label>
                </li>
                ) ///map-return
              })
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
                  topping.filter((item,i)=>(topSelect[i]===1)).length === 0 ? "없음" :
                  topping.filter((item,i)=>(topSelect[i]===1)).map((item,i)=>(
                        <span key={i}>{item.name}</span>
                    ))
                }</li>

              </ul>
            </div>{/* now_option */}
            <div className='order_detail'>
              <div className='quantity'>
                <h4>수량</h4>
                <p>
                  <button>-</button>
                  <input type="number" value={1}></input>
                  <button>+</button>
                </p>

              </div>
              <div className='total'>
                <h4>현재 금액</h4>
                <p>{nowPrice.toLocaleString()}원</p>                
              </div>
              <button>다른 메뉴 추가</button>
              <button className='pay'>바로구매</button>
            </div>
          </div>
      </div>

    </div>
  )
}
