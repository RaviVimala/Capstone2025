import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../Context/StoreContext'

const FoodItem = ({id, Name, Image, Price, Description }) => {

    
    const {cartItems,addToCart,removeFromCart, url } = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={url+"/images/"+Image} alt="" />
            {
                !cartItems[id]
               ?<img className='add' onClick={() => addToCart(id)} src={assets.Plusicon} alt="" />
                :<div className='food-item-counter'>
                    <img onClick={() => removeFromCart(id) } src={assets.remove_icon} alt="" />
                    <p>{cartItems[id]} </p>
                    <img onClick={() => addToCart(id)} src={assets.Plusicon} alt="" />
                </div> 
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{Name}</p>
                <img src={assets.rating_star} alt="" />
            </div>
            <p className='food-item-desc'> { Description } </p>
            <p className="food-item-price">${Price}</p> 
        </div>

    </div>
  )
}

export default FoodItem;