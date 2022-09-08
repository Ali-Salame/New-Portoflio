import React from 'react'
import Dancing from '../Img/Dancing.svg'
import Load from '../Img/Load.svg'

const Loading = () => {
  return (
    <div className='Loading'>
        <div className='Loading_Animation'>
            
            <img className='Loading_Animation_dance' src={Dancing} alt="" />
            <img className='Loading_Animation_dance2' src={Load} alt="" />
            
        </div>
    </div>
  )
}

export default Loading