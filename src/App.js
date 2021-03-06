import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Category from './Pages/Category/Category'
import {useState} from 'react'
function App() {

  const [category,SetCategory]=useState('living')
  const [cart,setCart]=useState("off")
  const [product,setProduct]=useState([
    {
      id:1,
      title:"Beautifully Crafted Cabinet 1",
      location:"docs/img/cabinet_living.jpg",
      rate:100,
      price:80,
    }
  ])

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" 
               render={()=><Home cart={cart} 
               setCart={setCart}
               product={product}/>
              
             }
        exact />
        <Route path="/home" 
          render={()=><Home cart={cart} 
                            setCart={setCart}
                            product={product}/>
                           
                          }
         />
        <Route path='/category' 
          render={()=><Category cat={category} 
                                cart={cart} 
                                setCart={setCart}
                                product={product}
                                setProduct={setProduct}/>}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
