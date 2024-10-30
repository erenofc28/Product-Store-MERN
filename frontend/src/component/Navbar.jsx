import React from 'react'
import "./nav.css";
import { Link } from 'react-router-dom';
const Navbar = () => {

  return (
    <>
 <div className="box">
  <div className="title">
   <Link to={"/"}>
<p className='p'>Product Store 🛒</p> 
    </Link>
     </div>
  <div className="btns">
  <Link to={"/create"}>
  <button className='add_product'>Add Product</button>
  </Link> 
  </div>
 </div>
    </>
  )
}

export default Navbar
