import React, { useContext, useState } from 'react'
import { PiSlidersHorizontalBold } from 'react-icons/pi'
import { my_context } from '../../../ContextProvider'
const RestaurantsBtn = () => {

    const buttonText=[
        {text:'All'},
        {text:'Pizza'},
        {text:'Burgers'},
        {text:'Sushi'},
        {text:'Pasta'},
      
    ]

    const [activeBtn,setActiveBtn]=useState('All')

    const {setRestaurantBtn}=useContext(my_context)
    const handleActiveBtn=(text)=>{
      setActiveBtn(text),
      setRestaurantBtn(text)
    }

  return (
    <div className='flex flex-wrap items-center bg-[#f5f4f2] justify-between p-2 rounded-2xl'>

     <div className='w-1/2'>
     {buttonText.map((text,index)=>(<span onClick={()=>handleActiveBtn(text.text)} className={`${activeBtn==text.text?'bg-white':'bg-none'} cursor-pointer hover:bg-white duration-300 rounded-2xl py-3 px-5`} key={index}>{text.text}</span>))}
     </div>


        <div className='flex cursor-pointer items-center gap-2  hover:bg-white p-3 duration-300 rounded-2xl'>
        <PiSlidersHorizontalBold />
        <span>Shorting</span>

        </div>
      
    </div>
  )
}

export default RestaurantsBtn
