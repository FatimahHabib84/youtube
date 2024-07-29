import React from 'react'
import { useNavigate , Link } from 'react-router-dom'


function VideoFrameHome(props) {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col my-4 max-sm:col-span-3 p-4 gap-4 items-center max-sm:justify-center justify-start'>
        {/* <iframe className='rounded-lg' width="480" height="360" src={props.src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}
        <Link to={`/Video/${props.index}`} >
        <img className='w-[550px] h-[360px] max-sm:w-auto max-sm:h-auto rounded-xl max-sm:m-auto' src={props.url} />
        <div className='flex flex-col max-sm:m-auto'>
        <h1 className='font-bold text-lg w-[550px] max-sm:w-auto'>{props.title}</h1>
        <p>{props.username}</p>
        <p>{props.detailes}</p>
        </div>
        </Link>
    </div>
)
}

export default VideoFrameHome