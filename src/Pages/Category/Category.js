import React,{useState} from 'react'
import Header from '../Components/Header'
import Filter from './Filter'
import CardSection from './CardSection'
import Cart from '../Components/Cart'
import SignIn from '../Components/SignIn'
import ContactUs from '../Components/ContactUs'

const Category=({cat,cart,setCart,product,setProduct})=>{
    const [signin,setSignIn]=useState('off')
    const [contact,setContact]=useState('off')
    return(
       <div className="main">
           <div className="container">
               <Header setSignIn={setSignIn}  setCart={setCart} setContact={setContact}/>
               <div className="category_section">
                  <Filter />
                  <CardSection setProduct={setProduct}/>
               </div>
           </div>
           <Cart cart={cart}
                setCart={setCart} 
                product={product}/>
            <SignIn type={signin} setSignIn={setSignIn}/> 
            <ContactUs type={contact} setContact={setContact} />  
       </div>
    )
}

export default Category;