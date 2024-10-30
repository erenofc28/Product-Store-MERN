import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

  // const notify = () => toast("Wow so easy!");
  const navigate = useNavigate();
  const [details,setDetails] = useState([])
  const [name,setName] = useState([])
  const [price,setPrice] = useState([])
  const [upd,setUpd] = useState(true);
  const [currId,setCurrId] = useState([])
  console.log(name," ",price)
  console.log(upd)

const handleUpdate = () => {
  if(name != []){
    const n = {
      name:name
    }
    axios.put(`https://backend-server-343.onrender.com/products/${currId}`,n)
    .then((r)=>{
      console.log("successfully name updated")
          })
  }
  if(price != []){
    const n = {
      price:price
    }
    axios.put(`https://backend-server-343.onrender.com/products/${currId}`,n)
    .then((r)=>{
console.log("successfully price updated")
    })
  }
  let n = ""
  let p = ""
  setDetails(details.map((arr)=>{
    if(arr.id == currId){
      arr.name = name == ""?arr.name:name 
      arr.price = price == ""?arr.price:price
    }
    
    return arr
  }))
  console.log(details,"details",n,"space",p)
  setName([])
  setPrice([])
}




  
 useEffect(() => {
  // notify()
  const data =axios.get('https://backend-server-343.onrender.com/products')
 data 
  .then((response) => {
  setDetails(  response.data.data.map((arr)=>{
         return {name:arr.name,price:arr.price,s:arr.image,id:arr._id}
    })
  )
  })
  .catch((error) => {
    console.error(error);
  });


}, []);
const deleteMethod = (id ) => {
  axios.delete(`https://backend-server-343.onrender.com/products/${id}`)
  
  .then((res)=>{
    console.log("successfully deleted")
   setDetails(details.filter((arr)=>{
    if(arr.id != id ){
      return {arr}
    }
   }))
   
  })
  .catch((error)=>{
    console.log(error)
  })
  
}


  return (
    <div className=' elements'>
   
      {  
      details.length === 0? <p className='no_items'>No items found!🙄</p>:      
details.map((arr)=>{
  console.log(arr.name)
  // console.log(arr.id)
  return <>
    <div className='element' key={arr.id}>
  <img src={arr.s} alt="Image description" />

  {
    arr.id == currId?
    <> <input className='change_input' type="text" defaultValue={arr.name} onChange={(e)=>{
      setName(e.target.value)
    }} />
       <input className='change_input' type="number" defaultValue={arr.price} onChange={(e)=>{
        setPrice(e.target.value)
       }} />
    </>
  
    :<>
      <p>{arr.name}</p>
    <p>{arr.price}</p>
    </>


  } 
  <button className='update_btn'onClick={()=>{
    
    setCurrId(arr.id)
    setUpd(upd == false?true:false)
    if (upd){
      
    }
    handleUpdate()
  }}>Update</button>
  <button className='delete_btn' onClick={(e)=>{
    deleteMethod(arr.id)
    
  }}>Delete</button>

  </div>
  </>

})
      }



    </div>
  )
}

export default Home

/*
name:"Smart Laptop 5k",
  src:"https://images-eu.ssl-images-amazon.com/images/I/71jG+e7roXL._AC_UL225_SR225,160_.jpg",
  price:"$299.99"
*/