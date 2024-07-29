import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Signup() {
    const [user, setUser] = useState({
        username:'',
        email:'',
        pwd:'',
        src: 'https://mybroadband.co.za/news/wp-content/uploads/2017/04/Twitter-profile-picture.jpg',
        likeAndComments:[]
    })
    const [data, setData] = useState([])
    const [dialog, setDialog] = useState('')
    const [checkPrefEmail, setCheckPrefEmail] = useState({})

    const navigate = useNavigate()

    const validUsername = /^[0-9A-Za-z]{4,16}$/
    const validEmail = /^[a-zA-Z0-9._-]+@[a-z]+\.[a-z]{2,4}$/
    const validPwd = /^[a-zA-Z0-0.-_@]{6,}$/
    

    useEffect(() => {

        axios.get('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=SA&key=AIzaSyDX_Qq3hUuAxNhLWXMScN5vlEyUMSVlsDs')
        .then(function(res){
            res.data.items.forEach(element => {
            data.push({
                postId:element.id,
                state:'none',
                statedisLike:'none',
                subscribe:'اشتراك',
                comments:[]
            })
            });
        })

        axios.get(`https://665736bb9f970b3b36c86669.mockapi.io/youtube`)
        .then(function(res){
            const temp = res.data.find(item => item.email===user.email)
            setCheckPrefEmail(temp)
        })

    }, [ch])

    const handleClick = () => {
        if(checkPrefEmail!==undefined){
            setDialog('هذا الإيميل مسجل مسبقًا')
            document.getElementById('my_modal_1').showModal()
            console.log(checkPrefEmail);
        } else {
            if(user.email=='' && user.username=='' && user.pwd==''){
            setDialog('يرجى تعبئة جميع البيانات')
            document.getElementById('my_modal_1').showModal()

            } else if (!validUsername.test(user.username)){
                setDialog('يرجى ادخال اسم مستخدم صالح')
                document.getElementById('my_modal_1').showModal()

            } else if (!validEmail.test(user.email)){
                setDialog('يرجى عنوان بريد إلكتروني صحيح')
                document.getElementById('my_modal_1').showModal()
            } else if (!validPwd.test(user.pwd)){
                setDialog('يرجى ادخال كلمة سر تحتوي على اكثر من 5 احرف/ارقام')
                document.getElementById('my_modal_1').showModal()
            } else if (validUsername.test(user.username) && validEmail.test(user.email) && validEmail.test(user.email)){
                axios.post(`https://665736bb9f970b3b36c86669.mockapi.io/youtube`,{
                    username:user.username,
                    email:user.email,
                    pwd: user.pwd,
                    src: 'https://mybroadband.co.za/news/wp-content/uploads/2017/04/Twitter-profile-picture.jpg',
                    likesAndComments:data
                })
                setDialog('تم التسجيل بنجاح')
                document.getElementById('my_modal_1').showModal()
                setTimeout(() => {
                    navigate('/Login')
                }, 1000);

            }
    }

    }

    
  return (
    <div className='flex  max-sm:flex-col flex-row items-center justify-center px-8 min-w-screen bg-base-100 m-auto h-screen w-1/2 max-sm:w-screen'>
        <div className="card-body">
        <h1 className='text-center font-bold text-lg'>تسجيل جديد</h1>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">اسم المستخدم</span>
                </label>
                <input type="email" value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})} placeholder="اسم المستخدم" className="input input-bordered placeholder-primary" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">البريد الإلكتروني</span>
                </label>
                <input type="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} placeholder="البريد الإلكتروني" className="input input-bordered placeholder-primary" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">كلمة السر</span>
                </label>
                <input type="password" value={user.pwd} onChange={(e)=>setUser({...user,pwd:e.target.value})} placeholder="كلمة السر" className="input input-bordered placeholder-primary" required />
                <label className="label">
                    <Link to={"/Login"} className="label-text-alt link link-hover">لديك بريد مسجل؟ اضغط لتسجيل الدخول</Link>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={() => handleClick()}>تسجيل الدخول</button>
                </div>
            </div>
        <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">تحذير!</h3>
            <p className="py-4">{dialog}</p>
            <div className="modal-action">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">إغلاق</button>
            </form>
            </div>
        </div>
        </dialog>
    </div>
  )
}

export default Signup