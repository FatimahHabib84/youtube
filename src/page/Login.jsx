import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [user, setUser] = useState({
        email:'',
        username:'',
        pwd:'',
        src: '',
        tweets:[],
    })
    const [data, setData] = useState([])
    const [dialog, setDialog] = useState('')

    const navigate = useNavigate()
    const [validEmail, setValidEmail] = useState('')

    useEffect(() => {
        axios.get(`https://665736bb9f970b3b36c86669.mockapi.io/youtube`)
        .then(function(res){
            console.log(res.data);
            setData(res.data)
        })
        setValidEmail(data.find(item=>item.email==user.email))
    }, [user,validEmail])

    const handleClick = () => {
        
        if(user.email=='' || user.pwd==''){
            setDialog('يرجى ادخال جميع البيانات')
            document.getElementById('my_modal_1').showModal()

        } else {
            if (validEmail==undefined){
            setDialog('عنوان البريد الإلكتروني غير مسجل مسبقًا')
            document.getElementById('my_modal_1').showModal()

        } else if(validEmail.email===user.email && validEmail.pwd===user.pwd){
            setDialog('تم تسجيل الدخول بنجاح')
            localStorage.setItem('username',validEmail.username)
            localStorage.setItem('id',validEmail.id)
            document.getElementById('my_modal_1').showModal()
            setTimeout(() => {
                navigate('/')
            }, 1000);
        }
    }
    }
    
  return (
    <div className='flex flex-row max-sm:flex-col items-center justify-center max-sm:w-screen px-8 w-1/2 m-auto bg-base-100 h-screen'>
        <div className="card-body max-sm:mt-8  max-sm:w-full">
            <h1 className='text-center font-bold text-lg'>تسجيل الدخول</h1>
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
                    <Link to={"/Signup"} className="label-text-alt link link-hover">ليس لديك بريد مسجل؟ اضغط لتسجيل جديد</Link>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={()=>handleClick()} >تسجيل الدخول</button>
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

export default Login