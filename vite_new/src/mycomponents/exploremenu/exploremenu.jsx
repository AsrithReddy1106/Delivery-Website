import React from 'react'
import './exploremenu.css'
import { menu_list } from '../../assets/assets'

const exploremenu = ({cat,setcat}) => {


    return (
        <div className='exploremenu' id='exploremenu'>
            <h1>Explore Our Menu</h1>
            <p className='exploremenu-text'>chose from a diverse menu featuring a delebale array of dishes. our mission is deliver you perfection</p>
            <div className='exploremenu-list'>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={()=>setcat(prev=>prev===item.menu_name?"ALL":item.menu_name)} key = {index} className='exploremenu-list-item'>
                            <img className={cat===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                            <p>{item.menu_name}</p>
                        </div>
                    ) 
                })}
            </div>
            <hr/>
        </div>
    )
}

export default exploremenu