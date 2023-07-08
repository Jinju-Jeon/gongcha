import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhiskeyGlass, faMugHot } from '@fortawesome/free-solid-svg-icons'


export default function Option() {
  const item = useLocation().state.menu



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
        <div className='select select_cold'>

        </div>

        <div className='select select_ice'>
          <h2>얼음양</h2>
        <ul>
          {item.ice.map((opt,i)=>{
            return(              
              <li key={i}>
                <input type="radio" name={'iceOpt'} id={'ice_'+opt} value={opt}></input>
                <label htmlFor={'ice_'+opt}>
                  <img src={process.env.PUBLIC_URL + '/img/ice_'+opt+'.png'}></img>
                  <p>{opt===0 ? "Less Ice" : (opt===1 ? "Regular Ice" : "Full Ice")}</p>
                  </label>
              </li>
              )
          })}
          </ul>
        </div>

        <div className='select select_cup'>

        </div>
        <div className='select select_cup'>

        </div>

      </div>
    </div>
  )
}
