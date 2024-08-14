import React from 'react'
import './List.css'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
const List = ({url}) => {

    // const url = "http://localhost:4000"


    const [list, setList] = useState([])
    const fetchlist = async () => {
        const response = await axios.get(`${url}/api/food/list`)
        // console.log(response.data);
        if (response.data.success) {
            setList(response.data.data);

        } else {
            toast.error("error in list")
        }
    }

    const removeFood = async(foodID) => {
        const response = await axios.post(`${url}/api/food/remove`, {id:foodID});
        await fetchlist();
        if(response.data.success){
            toast.success(response.data.message)
        } else {
            toast.error(error)
        }
    }

    useEffect(() => {
        fetchlist();
    }, []);

    return (
        <div className='list and flex-col'>
            <p>ALL FOODS LIST</p>
            <div className="list-table">
                <div className="list-table-format title">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Action</b>
                </div>
                {list.map((item, index) => {
                    return (
                        <div key={index} className='list-table-format'>
                            <img src={`${url}/images/` + item.image} alt="" />
                            <p>{item.name}</p>
                            <p>{item.category}</p>
                            <p >${item.price}</p>
                            <p onClick={()=>removeFood(item._id)} className='cross'>x</p>


                        </div>
                    )
                }
                )}
            </div>

        </div>
    )
}

export default List