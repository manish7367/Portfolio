import React from 'react'
import { stats } from '../data'
import parse from 'html-react-parser';

const Stats = () => {
  return (
   <>
   {
    stats.map(({no,title},index)=>{
        return(
            <div className="stats__box">
                <h3 className='stats__no'>{no}</h3>
                <p className='stats__ title'>{parse(title)}</p>
            </div>
        )
    })
   }
   </>
  )
}

export default Stats