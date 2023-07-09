import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhiskeyGlass, faMugSaucer } from '@fortawesome/free-solid-svg-icons'


const topping = ["밀크폼","펄(타피오카)","코코넛","알로에","화이트펄","치즈폼"]




export default function Option() {

  const item = useLocation().state.menu
  
  //topping chk
  let topChktemp = new Array(6).fill(0)
  const [topChk,setTopChk] = useState(Array(6).fill(0))

  function toppingAction(e){
    const index = e.target.value
    const chkNow = Number(e.target.checked)
    let count = topChk.filter((el)=>(el==1)).length 

    if(count+chkNow>3){
      alert('토핑은 최대 3개까지 가능합니다.')
      e.target.checked = false

      return
    }    

    topChktemp = topChk
    topChktemp[index] = chkNow
    setTopChk(topChktemp)

    const eLabel = document.querySelectorAll('.select_topping label')[index]
    if(chkNow){
      eLabel.classList.add('checked')
    } else{
      eLabel.classList.remove('checked')
    }
    
  }



  return (
    <div className='Option'>
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
        </div>{/* info_txt */}
      </div>{/* info */}

      <div className='select_cover'>
        <div className='select select_cup'>
          <h2>컵 선택</h2>
          <ul>
            <li>
              <label htmlFor='cup_1'>
                <input type="radio" name="cupOpt" id="cup_1" value="store" />
                <p><FontAwesomeIcon icon={faMugSaucer} /></p>            
                <p>매장컵</p>
              </label>
            </li>
            <li>
              <label htmlFor='cup_2'>
                <input type="radio" name="cupOpt" id="cup_2" value="disposable" />
                <p><FontAwesomeIcon icon={faWhiskeyGlass} /></p>            
                <p>일회용컵</p>
              </label>
            </li>
            <li>
              <label htmlFor='cup_3'>
                <input type="radio" name="cupOpt" id="cup_3" value="personal" />
                <p><FontAwesomeIcon icon={faWhiskeyGlass} /></p>            
                <p>개인컵</p>
              </label>
            </li>
            
          </ul>
        </div>

        <div className='select select_ice'>
          <h2>얼음양</h2>
        <ul>
          {item.ice.map((opt,i)=>{
            return(              
              <li key={i}>
                <label htmlFor={'ice_'+opt}>
                <input type="radio" name={'iceOpt'} id={'ice_'+opt} value={opt}></input>
                  <img src={process.env.PUBLIC_URL + '/img/ice_'+opt+'.png'}></img>
                  <p>{opt===0 ? "Less Ice" : (opt===1 ? "Regular Ice" : "Full Ice")}</p>
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
                <label htmlFor={'sugar_'+opt}>
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
                    <p>{item}</p> 
                  </label>
                </li>
                ) ///map-return
              })
            }
          </ul>

        </div>

      </div>
    </div>
  )
}
