import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../components/Context/StoreContext';
import axios from 'axios'
import { assets } from '../../assets/assets';



const MyOrders = () => {

    const {url, token} =useContext(StoreContext);
    const [data, setData] =useState([]);
    
    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/order/userorders",{ }, {headers:{token}});
        setData(response.data.data);
        console.log(response.data.data);
        
    }
     
    useEffect(() => {
        if(token) {
            fetchOrders();
        }
    },[token])
    const cancelOrder = async (orderId) => {
        try {
            const response = await axios.post(url+"/api/order/cancel", {orderId}, {headers:{token}});
            if (response.data.success) {
                alert("Order Cancelled Successfully!");
                fetchOrders();
            }
        } catch (error) {
            console.log(error);
            res.json({success:true, message:"Error"})
            
        }
     };

  return (
    <div className='my-orders'>
        <h2>My Orders</h2>
        <div className="container">
            {data.map((order, index) => {
                return(
                    <div key={index} className="my-orders-order">
                        <img src={assets.parcel} alt="" />
                        <p>{order.items.map((item, index) => {
                            if (index===order.items.length-1) {
                                return item.Name+"X"+item.quantity
                            }
                            else {
                                return item.Name+"X"+item.quantity+", "
                            }
                        })}</p>
                        <p>${order.amount}.00</p>
                        <p>Item: {order.items.length}</p>
                        <p><span>&#x25cf;</span><b>{order.status}</b></p>
                        <button onClick={fetchOrders}>Track Order</button>
                        <button onClick={() => cancelOrder(order._id)} className='cancel-btn'>Cancel</button>
                    </div>
                )
            })}
        </div>
        
    </div>
  )
}

export default MyOrders