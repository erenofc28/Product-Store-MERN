import React, { useState } from 'react'
import "./style.css"
import axios from 'axios';
import { Navigate, redirect, useNavigate } from 'react-router-dom';
const Create = () => {
 const [name,setName] =  useState([]);
 const [image,setImage] =  useState([]);
 const [price,setPrice] =  useState([]);
 const navigate = useNavigate();
  const createMethod = ()=>{
if(name.length!=0 && image.length!=0 && price.length!=0){
const d = {
  name:name,
  price:price,
  image:image
}
axios.post("http://localhost:5000/products",d)

.then((res)=>{
  console.log("successfully added")
  navigate("/")
})
}
else{

}
  }
  console.log("name",name," ","price",price," ",image)
  return (
    <div className='box_c'>
    <h1>Create New Product</h1>
        
      <div className="main">
        {/* <label htmlFor="">Name</label> */}
        <input type="text" placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
        {/* <label htmlFor="">Price</label> */}
        <input type="number" placeholder='Price'   onChange={(e)=>{setPrice(e.target.value)}}/>
        {/* <label htmlFor="">Image</label> */}
        <input type="text" placeholder='Image URL'  onChange={(e)=>{setImage(e.target.value)}}/>
        <button className='create_btn' onClick={()=>{
          createMethod()
        }}>Add Product</button>
      </div>
    </div>
  )
}

export default Create
