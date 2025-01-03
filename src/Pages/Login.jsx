import React, { useContext, useState } from 'react'
import { my_context } from '../ContextProvider'
import Swal from 'sweetalert2'
import Authtitle from '../Componants/Authentication/Authtitle'
import Withsocial from '../Componants/Authentication/Withsocial'
import { IoEyeOff, IoKey } from 'react-icons/io5'
import { FaEye } from 'react-icons/fa'
import { useNavigate } from 'react-router'
import { MdOutlineEmail } from 'react-icons/md'

const Login = () => {


    const navigate = useNavigate()
    const [eye, setEye] = useState(false)

    const [ok, setOk] = useState([])
    const {signInUser,setDep,dep}=useContext(my_context)
    const handleSubmit=e=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value
        console.log(email,password)
        signInUser(email,password)
        .then(()=>{
       
                Swal.fire({
                    title: "Good job!",
                    text: "You have successfully Sign In",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000    });
                    setDep(!dep)
                    // navigate('/')
                    navigate('/')

          
        })
        .catch(error=>{
            setOk('Incorrect email or password')

        })
    }


  return (
     <div className='h-screen mt-5 md:mt-32 lg:mt-40 '>
            <Authtitle name={'Sign IN'} text={"Don't Have an account?"} go={'Register'} where={'/register'}></Authtitle>

            <div className="lg:flex md:flex  px-2 lg:px-0  justify-center  mx-auto">
                <img className='mb-5 lg:mb-0 md:mb-0' src="https://i.ibb.co/HdGkVSv/register-pic.jpg" alt="" />


                <div className='lg:w-1/2 md:w-1/2 w-full mt-5'>
                    <form onSubmit={handleSubmit} class="max-w-md mx-auto">
                        {/* name */}
                        {/* <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="name" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="text" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name </label>
                    </div> */}

                        {/* email */}
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="email" name="email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 flex items-center gap-2"><MdOutlineEmail size={15} /> Email address</label>
                        </div>
                        {/* password */}
                        <div class="relative z-0 w-full mb-5 group">
                            <input type={eye ? 'text' : 'password'} name="password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 flex gap-2 items-center"><IoKey size={15} /> Password</label>
                            <p onClick={() => setEye(!eye)} className='absolute right-0 bottom-3'>{eye ? <IoEyeOff /> : <FaEye />}</p>
                        </div>
                        {/* photo url */}
                        {/* <div class="relative z-0 w-full mb-5 group">
                        <input type="url" name="photoURL" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="url" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Photo URL</label>
                    </div> */}
                     {
                        ok && <p className=' ml-2 text-left text-red-500'>{ok}</p>
                    }


                        <div className=' text-end ' >
                            <button type="submit" className="text-white bg-red-500 rounded-3xl   hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                        </div>
                    </form>
                    <div className="divider mt-5 font-bold"></div>
                    <Withsocial text={'Sign In with Social Media'}></Withsocial>
                </div>
            </div>

        </div>
  )
}

export default Login
