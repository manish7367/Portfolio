import React from 'react'
import { skills } from '../data'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Skill = () => {
  return (
    <>
        {skills.map(({title,percentage},index)=>{
            return(
                <div className='progress_box' key={index}>
                    <div className="progress__circle">
                        <CircularProgressbar strokeWidth={2.5} 
                        text={`${percentage}`}
                        value={percentage}/>
                    </div>

                    <h3 className="skills__title">{title}</h3>
                </div>
            )
        })}
    </>
  )
}

export default Skill