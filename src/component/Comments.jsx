import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Comments(props) {
  return (
    <div className='max-w-[1280px] flex flex-row items-start gap-2 p-2'>
        <img className='w-14 h-14 rounded-full' src={props.comentImg} />
        <div className='flex flex-col items-start'>
            <h1 className='font-semibold text-lg text-primary'>{props.comntusername}</h1>
            <p className='text-sm text-neutral text-wrap break-all'>{props.comenttext}</p>
        </div>
    </div>
  )
}

export default Comments