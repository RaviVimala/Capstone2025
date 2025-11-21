import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({ category, setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu </h1>
        <p className='explore-menu-text'>The menu has been called “a map that encourages easy navigation between hunger and satisfaction.” Mouthwatering restaurant menu descriptions can make your clients crave your offerings and happy patrons come back many times.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index) => {
                return(
                    <div onClick={() => setCategory(prev=>prev===item.Menu_Name?"All":item.Menu_Name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.Menu_Name?"active":""} src={item.Menu_image} alt="" />
                        <p>{item.Menu_Name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu