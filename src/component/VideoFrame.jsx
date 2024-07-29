import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function VideoFrame(props) {

  return (
        
    <div className='flex flex-col m-4 py-4 gap-4 max-sm:flex-row max-sm:items-center' key={props.index} >
        {/* <iframe className='rounded-lg' width="480" height="360" src={props.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
        <Link to={`/Video/${props.index}`} >
        <img role='button' className='w-[320px] h-[180px] max-sm:w-[480] max-sm:h-[360] rounded-xl max-sm:mx-auto' src={props.url} />
        <div className='flex flex-col'>
        <h1 role='button' className='w-[320px] max-sm:w-[480] font-bold text-lg max-sm:mx-auto'>{props.title}</h1>
        <p className='w-[320px] max-sm:w-[480] max-sm:mx-auto'>{props.username}</p>
        <p className=' w-[320px] max-sm:w-[480] max-sm:mx-auto'>{props.detailes} مشاهدة قبل {props.contentDetails}</p>
        </div>
        </Link>
    </div>
    
)
}

export default VideoFrame