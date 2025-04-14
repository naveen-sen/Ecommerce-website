import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navigation from '../Components/navigation'
import Footer from '../Components/Footer/Footer'
import HomePage from '../pages/HomePage'
import Cart from '../Components/Cart/Cart'
import Product from '../Components/Product/Product'
import ProductCard from '../Components/Product/ProductCard'
import { mens_kurta } from '../Data/Mens/Men_kurta'
import ProductDetail from '../Components/ProductDetail/ProductDetail'
import Checkout from '../Components/Address_Detail/Checkout'
import Order from '../Components/Order/Order'
import OrderDetail from '../Components/Order/OrderDetail'

function CustomerRouter() {
  return (
    <div>
        <div>
            <Navigation/>
        </div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}>
            </Route>
            <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/>}></Route>
            <Route path='/product/:id' element={<ProductDetail Product={mens_kurta}/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/orders' element={<Order/>}></Route>
            <Route path='/account/orders/:orderId' element={<OrderDetail/>}></Route>


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