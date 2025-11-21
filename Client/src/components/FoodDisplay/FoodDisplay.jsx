import React, { useContext } from 'react'
import './foodDisplay.css'
import { StoreContext } from '../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({ category }) => {

  const { food_list, search } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2> Top dishes near you</h2>
      <div className="food_display_list">

        {food_list
          // Filter by category
          .filter(item => category === "All" || item.category === category)

          // Filter by search keyword
          .filter(item =>
            item.Name.toLowerCase().includes(search.toLowerCase())
          )
           
          // Display filtered items
          .map((item, index) => (
            <FoodItem
              key={index}
              id={item._id}
              Name={item.Name}
              Description={item.Description}
              Price={item.Price}
              Image={item.Image}
            />
          ))
        }

      </div>
      {/* {food_list.map((item,index) => {
          {console.log(item.Category);}
          if (category==="All" || category===item.category) {
            return <FoodItem key={index} id={item._id} Name={item.Name} Description={item.Description} Price={item.Price} Image={item.Image}/>
          }          
        })} */}

    </div>
  )
}

export default FoodDisplay