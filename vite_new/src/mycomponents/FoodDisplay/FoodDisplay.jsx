import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({cat}) => {
    const {food_list} = useContext(StoreContext)





  return (

    <div className='food-display' id='food-display'>
        <h2>Top Dishes Near You</h2>
        <div className='food-display-list'>
            {food_list.map((item,index)=>{
                if(cat === "ALL" || cat===item.category){ 
                return <FoodItem key={index} id={item._id} name= {item.name} description = {item.description} price = {item.price} image = {item.image} />
                }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay

// import React, { useContext } from 'react'
// import './FoodDisplay.css'
// import { StoreContext } from '../../context/StoreContext'
// import FoodItem from '../FoodItem/FoodItem'

// const FoodDisplay = ({ cat }) => {
//     const { food_list } = useContext(StoreContext)

//     return (
//         <div className='food-display' id='food-display'>
//             <h2>Top Dishes Near You</h2>
//             <div className='food-display-list'>
//                 {food_list.map((item, index) => {
//                     console.log(`cat: ${cat}, item.category: ${item.category}`); // Log cat and item.category
//                     if (cat === "ALL" || cat === item.category) {
//                         return (
//                             <FoodItem
//                                 key={index}
//                                 id={item._id}
//                                 name={item.name}
//                                 description={item.description}
//                                 price={item.price}
//                                 image={item.image}
//                             />
//                         )
//                     }
//                     return null; // Ensure a return value in case the condition is not met
//                 })}
//             </div>
//         </div>
//     )
// }

// export default FoodDisplay
