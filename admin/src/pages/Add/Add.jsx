import React from 'react'
import './Add.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import axios from "axios"
import { toast, ToastContainer } from 'react-toastify'


const Add = ({url}) => {

  

  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad"
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
     formData.append("image", image)
    formData.append("Name", data.name)
    formData.append("Description", data.description)
    formData.append("category", data.category)
    formData.append("Price", Number(data.price))
   
    const response = await axios.post(`${url}/api/food/add`,formData);
    if (response.data.success) {
      setData({
      name: "",
      description: "",
      price: "",
      category: "Salad"
    });
      setImage(false);
      toast.success(response.data.message);
    }
    else{
      toast.error(response.data.message);
    }
  }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Images</p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image) : assets.upload_icon} alt="" />
          </label>
          <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} type='text' name='description' rows="6" placeholder='Write Comments here'></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product Category</p>
            <select onChange={onChangeHandler} name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Biriyani">Biriyani</option>
              <option value="Soup">Soup</option>
              <option value="Chicken's">Chicken's</option>
              <option value="Pizza's">Pizza's</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
              <option value="Burger">Burger</option>
            </select>
          </div>
          <div className="add-rpice flex-col">
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20' />
          </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  )
}

export default Add