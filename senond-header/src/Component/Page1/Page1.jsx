import React from 'react'
import './Page1.scss'
import mainImg from '../../assets/img/page1.png'


function Page1() {
  return (
    <div className='main-part1'>
        <div className="left-part">
            <div className="small-data">
                <p>Blue dot furniture bestsellers</p>
                <p>$1,999.00</p>
            </div>
            <h1>Toro lounge chair</h1>
            <h5>shop now</h5>
        </div>
        <div className="right-part">
            <img src={mainImg}/>
        </div>
    </div>
  )
}

export default Page1