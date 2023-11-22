import { BrowserRouter } from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import Router from "./Components/Router"
import Mobiles from "./Components/Mobiles"
import { useState } from "react"

function App() {
  const [details,setDetails] = useState([]);
  const [mobiles,setMobiles] = useState(Mobiles);
  

  const view = (m) => {
    setDetails([{...m}])
  }

  // cart
  const [cart,setCart] = useState([]);

  const addtoCart = (mobile) => {

    const exist = cart.find((x) => {
      return x.id === mobile.id
    })

    if(exist){
      alert("this product is already added.")
    }
    else{
      setCart([...cart,{...mobile,qty:1}])
      alert("product is added to cart")
    }
  }

  return (
    <>
    <div className="vh-100 w-100">
      
      <BrowserRouter>
          <Navbar/>
          <Router mobiles={mobiles} setMobiles={setMobiles} view={view}  details={details} cart={cart} setCart={setCart} addtoCart={addtoCart}/>
          <Footer/>
      </BrowserRouter>
      
    </div>
    </>
  )
}

export default App
