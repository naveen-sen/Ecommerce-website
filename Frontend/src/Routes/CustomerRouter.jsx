import { Route, Routes } from 'react-router-dom'
import Checkout from '../Components/Address_Detail/Checkout'
import Cart from '../Components/Cart/Cart'
import Footer from '../Components/Footer/Footer'
import Navigation from '../Components/Navigation'
import Order from '../Components/Order/Order'
import OrderDetail from '../Components/Order/OrderDetail'
import PaymentSuccess from '../Components/Payment/PaymentSuccess'
import Product from '../Components/Product/Product'
import ProductDetail from '../Components/ProductDetail/ProductDetail'
import { mens_kurta } from '../Data/Mens/Men_kurta'
import HomePage from '../pages/HomePage'
import NotFound from '../Components/NotFound'

function CustomerRouter() {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
        <Routes>
          <Route path='/login' element={<HomePage/>}></Route>
          <Route path='/signup' element={<HomePage/>}></Route>
          
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}>
            </Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
            <Route path='/product/:id' element={<ProductDetail Product={mens_kurta}/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/orders' element={<Order/>}></Route>
            <Route path='/account/orders/:orderId' element={<OrderDetail/>}></Route>
            <Route path='/payment-success/:orderId' element={<PaymentSuccess/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>


            {/* <HomePage/> */}
      {/* <Product/> */}
      {/* <ProductDetail/> */}
      {/* <Cart/> */}
      {/* <Checkout/> */}
      {/* <Order/> */}
        </Routes>
        <div>
        <Footer/>
        </div>
    </div>
  )
}

export default CustomerRouter