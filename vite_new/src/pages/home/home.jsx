import React, { useEffect, useState } from 'react'
import './home.css'
import Header from '../../mycomponents/header/header'
import Exploremenu from '../../mycomponents/exploremenu/exploremenu'
import FoodDisplay from '../../mycomponents/FoodDisplay/FoodDisplay'
import AppDownload from '../../mycomponents/AppDownload/AppDownload'

const home = () => {

  const [cat,setcat] = useState("ALL");

  
  useEffect(() => {
    console.log(cat);
  }, [cat]); 

  return (
    <div className='home'>
        <Header/>
        <Exploremenu cat={cat} setcat={setcat}/>
        <FoodDisplay cat={cat}/>
        <AppDownload/>
    </div>
  )
  
}

export default home