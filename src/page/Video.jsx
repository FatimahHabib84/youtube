import React, { useState, useEffect } from 'react'
import VideoFrame from '../component/VideoFrame'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Comments from '../component/Comments'
import Nav from '../component/Nav'
import linkedin from '../assets/linkedin.jpg'


function Video() {
    const [data, setData] = useState([])
    const [singleData, setSingleData] = useState()
    const [user, setUser] = useState({})
    const [allUsers, setAllUsers] = useState([])
    const [likesAndComments, setLikesAndComments] = useState([])
    const [thisVideo, setThisVideo] = useState({})
    const [commenst, setCommenst] = useState('')
    const params = useParams()
    const [search, setSearch] = useState('')
    const id = params.id

    const navigate = useNavigate()

    useEffect(() => {

        // setTimeout(() => {
            axios.get(`https://665736bb9f970b3b36c86669.mockapi.io/youtube/${localStorage.getItem('id')}`)
            .then(function(res){
            setUser(res.data)
            setLikesAndComments(res.data.likesAndComments)
            const object = res.data.likesAndComments.find(element => element.postId == id)
            if(object==undefined){
                // user.likesAndComments.push({postId:id , state:'none' ,statedisLike:'none',subscribe:'اشتراك',comments:[]})
                likesAndComments.push({postId:id , state:'none' ,statedisLike:'none',subscribe:'اشتراك',comments:[]})
                const object = likesAndComments.find(element => element.postId == id)
                setThisVideo(object)
                axios.put(`https://665736bb9f970b3b36c86669.mockapi.io/youtube/${localStorage.getItem('id')}`,{
                    'username':user.username,
                    'email':user.email,
                    'pwd':user.pwd,
                    'likesAndComments':likesAndComments
                })

            } else {
                setThisVideo(object)
            }
        })
        // }, 1000);
        

        axios.get(`https://665736bb9f970b3b36c86669.mockapi.io/youtube`)
        .then(function(res){
            setAllUsers(res.data)
        })

      axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=SA&key=AIzaSyDX_Qq3hUuAxNhLWXMScN5vlEyUMSVlsDs')
        .then(function(res){
            setData(res.data.items)
        })
        axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyDX_Qq3hUuAxNhLWXMScN5vlEyUMSVlsDs`)
        .then(function(res){
            setSingleData(res.data.items)
        })
        
    }, [user])

    const likeVideo = () => {
        const temp = likesAndComments.find(element =>
            element.postId==id )
        const i = likesAndComments.indexOf(temp)
        temp.state=='none'?likesAndComments[i].state='white':likesAndComments[i].state='none'
        setUser(prev=>({...prev,likesAndComments:likesAndComments}))
        axios.put(`https://665736bb9f970b3b36c86669.mockapi.io/youtube/${localStorage.getItem('id')}`,{
            'username':singleData.username,
            'email':singleData.email,
            'pwd':singleData.pwd,
            'likesAndComments':likesAndComments
        })
        .then(function(res){
            // console.log(res.data)
        })

    }

    const dislikeVideo = () => {
        const temp = likesAndComments.find(element =>
            element.postId==id )
        const i = likesAndComments.indexOf(temp)
        temp.statedisLike=='none'?likesAndComments[i].statedisLike='white':likesAndComments[i].statedisLike='none'
        setUser(prev=>({...prev,likesAndComments:likesAndComments}))
        axios.put(`https://665736bb9f970b3b36c86669.mockapi.io/youtube/${localStorage.getItem('id')}`,{
            'username':singleData.username,
            'email':singleData.email,
            'pwd':singleData.pwd,
            'likesAndComments':likesAndComments
        })
        .then(function(res){
            // console.log(res.data)
        })

    }


    const addComments = () => {
        const temp = likesAndComments.find(element =>
            element.postId==id )
        const i = likesAndComments.indexOf(temp)
        likesAndComments[i].comments.push(commenst)
        setUser(prev=>({...prev,likesAndComments:likesAndComments}))
        axios.put(`https://665736bb9f970b3b36c86669.mockapi.io/youtube/${localStorage.getItem('id')}`,{
            'username':singleData.username,
            'email':singleData.email,
            'pwd':singleData.pwd,
            'likesAndComments':likesAndComments
        })
        .then(function(res){
            setCommenst('')
        })
    }

    const subscribeToThisVideo = () => {
        const temp = likesAndComments.find(element =>
            element.postId==id )
        const i = likesAndComments.indexOf(temp)
        temp.subscribe=='اشتراك'?likesAndComments[i].subscribe='مشترك':likesAndComments[i].subscribe='اشتراك'
        setUser(prev=>({...prev,likesAndComments:likesAndComments}))
        axios.put(`https://665736bb9f970b3b36c86669.mockapi.io/youtube/${localStorage.getItem('id')}`,{
            'username':singleData.username,
            'email':singleData.email,
            'pwd':singleData.pwd,
            'likesAndComments':likesAndComments
        })
        .then(function(res){
            // console.log(res.data)
            // setCommenst('')
        })
    }

    const searchFor = () => {
        axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${search}&regionCode=SA&type=video&key=AIzaSyDX_Qq3hUuAxNhLWXMScN5vlEyUMSVlsDs`)
        .then(function(res){
            setData(res.data.items)
            console.log(res.data.items);
        })

    }
    

  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-row w-full items-center p-4 justify-between'>
            <div className='flex flex-row items-center'>
                <Nav/>
                <h1 role='button' onClick={()=>navigate('/')} className='font-bold text-primary text-3xl max-sm:text-xl'>YouTube</h1>
                <svg role='button' onClick={()=>navigate('/')} className="w-20 h-20 max-sm:w-14 max-sm:h-14 text-[#ff0000]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clipRule="evenodd"/>
                </svg>
            </div>
            <div className='max-sm:hidden w-1/3 rounded-full bg-base-300 flex flex-row items-center px-4'>
            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search" className=" input bg-transparent w-full focus:outline-none focus:border-none" />
            <svg role='button' onClick={()=>searchFor()} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
            </svg>

            </div>


            <div>
            {
            localStorage.getItem('username')!==null?
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
        <div className='flex flex-row items-center w-full justify-evenly p-2  max-sm:flex-col'>
            {singleData!==undefined&&<div className='flex flex-col self-start justify-start gap-4'>
            <iframe className='rounded-xl mt-6 w-[1280px] h-[720px] max-sm:w-[400px] max-sm:h-[360px]' src={`https://www.youtube.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <h1 className='text-primary text-start font-extrabold text-2xl'>{singleData[0].snippet.title}</h1>
            <div className='flex flex-row gap-4 items-center'>
                <img className='w-20 h-20 rounded-full' src="https://images.pexels.com/photos/26547171/pexels-photo-26547171/free-photo-of-canadian-goose-by-the-lake.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <div className='flex flex-col'>
                    <p className='font-bold'>{singleData[0].snippet.channelTitle}</p>
                    <p className='text-sm text-neutral'>{singleData[0].statistics==undefined?'65003':singleData[0].statistics.viewCount} مشترك</p>
                </div>
                {localStorage.getItem('username')==null?null:
                <div className='flex flex-row p-0 m-0 w-fit h-fit items-center gap-2'>
                <button className='btn btn-primary rounded-full' onClick={()=>subscribeToThisVideo()} >{thisVideo.subscribe}</button>
                <svg onClick={()=>likeVideo()} className="w-8 h-8 justify-self-end text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={thisVideo.state} viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"/>
                </svg>

                <svg onClick={()=>dislikeVideo()} className="w-8 h-8 justify-self-end text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={thisVideo.statedisLike} viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 13c-.889.086-1.416.543-2.156 1.057a22.322 22.322 0 0 0-3.958 5.084 1.6 1.6 0 0 1-.582.628 1.549 1.549 0 0 1-1.466.087 1.587 1.587 0 0 1-.537-.406 1.666 1.666 0 0 1-.384-1.279l1.389-4.114M17 13h3V6.5A1.5 1.5 0 0 0 18.5 5v0A1.5 1.5 0 0 0 17 6.5V13Zm-6.5 1H5.585c-.286 0-.372-.014-.626-.15a1.797 1.797 0 0 1-.637-.572 1.873 1.873 0 0 1-.215-1.673l2.098-6.4C6.462 4.48 6.632 4 7.88 4c2.302 0 4.79.943 6.67 1.475"/>
                </svg>
                </div>}

                
            </div>
            
        <div className='flex flex-col p-4 items-start my-4 gap-2'>
            <h1 className='font-bold text-xl'>{singleData[0].statistics.commentCount} تعليقًا</h1>
            <div className='flex flex-row items-center gap-4 w-full'>
            {localStorage.getItem('username')==null?null:<img className='w-14 h-14 rounded-full' src={user.src} />}
                <textarea disabled={localStorage.getItem('username')==null?true:false} name="input" id="input" className='input w-full outline outline-secondary' onChange={(e)=>setCommenst(e.target.value)} value={commenst} placeholder='أضف تعليق...' />
            </div>
            {likesAndComments&&<div className='flex flex-row items-center gap-4 w-full justify-end'>
                <button onClick={()=>setCommenst('')} className='btn rounded-full text-lg font-semibold'>إلغاء</button>
                <button disabled={localStorage.getItem('username')==null?true:false} onClick={()=>addComments()} className='btn btn-primary rounded-full text-lg font-semibold'>تعليق</button>
            </div>}

            {likesAndComments && <div className='flex flex-col gap-4 items-start'>
                {
                    allUsers.map(items =>
                        items.likesAndComments.map(item => 
                            item.postId == id?
                            item.comments.map(i => 
                                <Comments comentImg={items.src} comntusername={items.username} comenttext={i} />
                            ):null

                        )
                     )
                }
            </div>}

        </div>
            </div>}

        <div className='flex flex-col max-sm:items-center'>
            {/* <div className='flex flex-col m-4 py-4 gap-4 items-center'>
                <h1 className='font-bold text-lg text-primary text-center'>تبحث عن اقوى فرونت اند في السعودية؟ محتاااار وخاطرك توظف احد وماحصلت؟ زور حساب  </h1>
                <h1 className='font-bold text-3xl text-[#ff0000]'>فاطمة الشومري!</h1>
                <h1 className='font-bold text-lg text-primary'>على لنكد ان وشوف اكاونتها الخطير ولاتتردد</h1>
                <img className='w-80 h-80 rounded-3xl' src={linkedin} alt="" />
            </div> */}
            <div role='button' onClick={()=>window.open('https://www.linkedin.com/in/fatimah-alshawmari-83797227b/','_blank')} className='card absolute z-50 w-1/3 mr-4 h-80 mt-5 p-4 pl-8 bg-transparent hover:bg-neutral hover:bg-opacity-30'></div>
            <div className="card lg:card-side bg-base-100 shadow-xl p-6 pl-8 gap-2">
            <figure>
                <img className=' rounded-xl w-80'
                src={linkedin} />
            </figure>
            <div className="flex flex-col justify-evenly gap-2">
            <h1 className='text-right text-primary text-sm '>تبحث عن اقوى فرونت اند في السعودية؟ محتاااار وخاطرك توظف احد وماحصلت؟ زور حساب  </h1>
            <h1 className='font-bold text-3xl text-red-100'>فاطمة الشومري!</h1>
            <h1 className=' text-sm text-primary'>دش على لنكد ان وشوف اكاونتها الخطير ولاتتردد</h1>
                <button className="btn btn-primary" onClick={()=>window.open('https://www.linkedin.com/in/fatimah-alshawmari-83797227b/','_blank')} >دش الآن!!</button>
            </div>
            </div>
        {
            data.map((item,index) => 
                <VideoFrame key={typeof(item.id)=='object'?item.id.videoId:item.id} index={typeof(item.id)=='object'?item.id.videoId:item.id} url={item.snippet.thumbnails.medium.url} title={item.snippet.title} username={item.snippet.channelTitle} detailes={item.statistics==undefined?'7500':item.statistics.viewCount} contentDetails={'2 يوم'} />
            )
        } 
        </div>

        </div>
    </div>
  )
}

export default Video