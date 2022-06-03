import React,{useState}from 'react'
import Header from '../Components/Header'
import SignIn from '../Components/SignIn'
import ShopRoom from './ShopRoom'
import Explore from './Explore'
import Everyone from './Everyone'
import Cart from '../Components/Cart'
import Decor from './Decor'
import ContactUs from '../Components/ContactUs'

const Home=({cart,setCart,product})=>{
  const [signin,setSignIn]=useState('off')
  const [contact,setContact]=useState('off')
  return(
      <div className="main">
          <div className="container">
            <Header setSignIn={setSignIn} setCart={setCart} setContact={setContact}/>
            <ShopRoom />
            <Explore />
            <Everyone />
            <Decor />
          </div>
          <Cart cart={cart}
                setCart={setCart} 
                product={product}/>
          <SignIn type={signin} setSignIn={setSignIn}/>
          <ContactUs type={contact} setContact={setContact} /> 
      </div>
  )
}

export default Home;