import React, { useState, useEffect } from 'react'
import VideoFrameHome from '../component/VideoFrameHome'
import axios from 'axios'
import Nav from '../component/Nav'


function LikedPage() {

    // states
    const [data, setData] = useState([])
    const [user, setUser] = useState()
    const [search, setSearch] = useState()
    const [likesAndComments, setLikesAndComments] = useState()

    // useEffect
    useEffect(() => {

        // fetchUserData()
        axios.get(`https://665736bb9f970b3b36c86669.mockapi.io/youtube/${localStorage.getItem('id')}`)
        .then(function(res){
            setUser(res.data)})
        console.log('user inside')
        
    }, [])
    console.log('user outside')

    useEffect(() => {
        if (user!==undefined) {
            fetchData()
        } else {
            console.log('its undefind');
        }

        console.log('data inside')

    }, [])
    console.log('data outside')



        // const arr = []
        // console.log(user)
        // user.likesAndComments.filter(i => i.state=='white').map((row) => 
        //     axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${row.postId}&regionCode=SA&key=AIzaSyDQgg9iN4yo8vByMNHhZvxup3ZCk5q29Po`)
        //     .then(function(res){
        //         // console.log(res.data.items)
        //         res!==undefined?
        //         arr.push(res.data.items):null
        //     })
        // )
        // setData(arr)
        
    // }, [])
    // console.log('data outside')

    // functions
    // const fetchUserData = () => {
        // axios.get(`https://665736bb9f970b3b36c86669.mockapi.io/youtube/${localStorage.getItem('id')}`)
        // .then(function(res){
        //     setUser(res.data)})
    // }
    const fetchData = () => {
        const arr = []
        user.likesAndComments.filter(i => i.state=='white').map((row) => 
            axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${row.postId}&regionCode=SA&key=AIzaSyDy2HW_N0HwGOc7RVoJEOi-q9QfucuVToc`)
            .then(function(res){
                // console.log(res.data.items)
                res!==undefined?
                arr.push(res.data.items):null
            })
        )
        setData(arr)
    }
    

    // const searchFor = () => {
    //     axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search}&regionCode=SA&type=video&key=AIzaSyDX_Qq3hUuAxNhLWXMScN5vlEyUMSVlsDs`)
    //     .then(function(res){
    //         setData(res.data.items)
    //         console.log(res.data.items);
    //     })

    // }
  return (
    <div className='flex flex-col items-center min-h-screen'>
        <div className='flex flex-row w-full items-center p-4 justify-between'>
            <div className='flex flex-row items-center'>
                <Nav/>
                <h1 role='button' onClick={()=>navigate('/')} className='font-bold text-primary text-3xl max-sm:text-xl'>YouTube</h1>
                <svg role='button' onClick={()=>navigate('/')} className="w-20 h-20 max-sm:w-14 max-sm:h-14 text-[#ff0000]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd"/>
                </svg>
            </div>
            {/* <div className='max-sm:hidden w-1/3 rounded-full bg-base-300 flex flex-row items-center px-4'>
            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search" className=" input bg-transparent w-full focus:outline-none focus:border-none" />
            <svg role='button' onClick={()=>searchFor()} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
            </svg>

            </div> */}


            
            <div>
            {
            localStorage.getItem('username')!==null&&user!==undefined?
            <div className="gap-4 w-fit h-fit flex flex-row items-center">
                
                    <h1 className='text-white text-xl font-bold'>{user.username}</h1>
                    <img src={user.src} className='w-16 h-16 max-sm:w-14 max-sm:h-14 rounded-full' />
                
            </div>:null
            }
            </div>
        
        
        </div>
        <div className='md:hidden w-full m-2 rounded-full bg-base-300 flex flex-row items-center px-4'>
            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search" className=" input bg-transparent w-full focus:outline-none focus:border-none" />
            <svg role='button' onClick={()=>searchFor()} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
            </svg>

        </div>
            



        
            <div className='grid grid-cols-3 max-sm:grid-cols-1 min-h-[50vh]'>
                { 
                        // user.likesAndComments==undefined?
                        // <h1 className='m-auto col-span-3 text-neutral font-bold text-center text-3xl p-4'>لا يوجد شيء بالمفضلة</h1>:
                            
                        data.map(item => 
                            // console.log(item)
                            <VideoFrameHome src={`https://www.youtube.com/embed/${item[0].id}`} key={item[0].id}  index={item[0].id} url={item[0].snippet.thumbnails.medium.url} title={item[0].snippet.title} username={item[0].snippet.channelTitle}  />
                        )
                }
            </div>
        
        
    </div>
  )
}

export default LikedPage