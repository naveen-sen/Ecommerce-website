import Navigation from './Components/navigation'
import HomePage from './pages/HomePage'
import './App.css'
import Footer from './Components/Footer/Footer'
import Product from './Components/Product/Product'
import ProductDetail from './Components/ProductDetail/ProductDetail'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Address_Detail/Checkout'
import Order from './Components/Order/Order'
import OrderDetail from './Components/Order/OrderDetail'
import { Route, Routes } from 'react-router-dom'
import CustomerRouter from './Routes/CustomerRouter'

function App() {
  

  return (
    <>

    <Routes>
      <Route path='/*' element= {<CustomerRouter/>}>
      </Route>
    </Routes>
      <Navigation/>
      {/* <HomePage/> */}
      {/* <Product/> */}
      {/* <ProductDetail/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      {/* <Order/> */}
      {/* <OrderDetail/> */}
      {/* <Footer/> */}
    </>
  )
}

export default App
