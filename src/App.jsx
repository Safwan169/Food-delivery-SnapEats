import { useState } from 'react'
import './App.css'
import Navbar from './Componants/Navbar/Navbar'
import RestaurantsBtn from './Componants/Restaurants/RestaurantsBtn/RestaurantsBtn'
import Footer from './Componants/Footer'
import RestaurantCardMain from './Componants/Restaurants/RestaurantCard/RestaurantCardMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>

      
     {/* <Navbar></Navbar>
 <div className='pt-40 max-w-[1400px] mx-auto'>
 <RestaurantsBtn/>
 </div>
 <RestaurantCardMain/>
 <Footer></Footer> */}
    </div>
  )
}

export default App
