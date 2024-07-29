import React ,{ useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Nav() {
    const navigate = useNavigate()

    const Logout = () => {
        localStorage.clear()
        navigate('/Login')
    }
    
  return (
    <div className="dropdown dropdown-start px-4 ">
        <svg tabIndex={0} role="button" className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/>
        </svg>
        <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-64 p-2 shadow">
        <li onClick={()=>navigate('/')} role="button" className='btn flex flex-row justify-start items-center'>
            <svg className="w-14 h-14 hover:bg-transparent text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clipRule="evenodd"/>
            </svg>
            <button className="text-xl hover:bg-transparent">
                الرئيسية
            </button>
        </li>
        {localStorage.getItem('username')==null?null:<li role="button" className='flex flex-row btn justify-start items-center'>
            <svg className="w-14 h-14 hover:bg-transparent text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/>
            </svg>
            <button onClick={()=>navigate('/LikedPage')} className="text-xl hover:bg-transparent">المفضلة</button>
        </li>}
        {localStorage.getItem('username')==null?null:
        <li onClick={()=>document.getElementById('my_modal_1').showModal()} role="button" className='flex flex-row btn items-center justify-start'>
            <svg className="w-14 h-14 hover:bg-transparent text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
            </svg>
            <button className="text-xl hover:bg-transparent">تسجيل الخروج</button>
            </li>}
            {localStorage.getItem('username')==null?
            <li onClick={()=>navigate('/Login')} role="button" className='flex flex-row btn items-center justify-start'>
            <svg class="w-14 h-14 hover:bg-transparent text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 6H5m2 3H5m2 3H5m2 3H5m2 3H5m11-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2M7 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
            </svg>

            <button className="text-xl hover:bg-transparent">تسجيل الدخول</button>
            </li>:null}

            {localStorage.getItem('username')==null?
            <li onClick={()=>navigate('/Login')} role="button" className='flex flex-row btn items-center justify-start'>
            <svg class="w-14 h-14 hover:bg-transparent text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 6H5m2 3H5m2 3H5m2 3H5m2 3H5m11-1a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2M7 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
            </svg>

            <button className="text-xl hover:bg-transparent">تسجيل جديد</button>
            </li>:null}
      </ul>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">تحذير!</h3>
            <p className="py-4">هل أنت متأكد من قيامك بتسجيل الدخول؟</p>
            <div className="modal-action">
            <form method="dialog">
                <button className="btn" onClick={()=>Logout()} >نعم</button>
                <button className="btn">إغلاق</button>
            </form>
            </div>
        </div>
        </dialog>
    </div>
  )
}

export default Nav