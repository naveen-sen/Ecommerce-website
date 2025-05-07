import React, { useState,useEffect } from 'react'
import { HomeCarousel } from '../Components/Carosal/HomeCarousel'
import HomesecCarousel from '../Components/HomeSecCarousel/HomesecCarousel'
import { mens_kurta } from '../Data/Mens/Men_kurta.js'
import Footer from '../Components/Footer/Footer.jsx'
import { useDispatch } from 'react-redux'
import { findProductById, getProducts } from '../store/Product/action.js'

function HomePage() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState({
    mens_kurta:[],
    lengha_choli:[],
    shirt:[],
    shoes:[],
    women_dress:[],
    watches:[]
  });
  const [loading, setLoading] = useState(true);
  

  useEffect(()=>{
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const [mens_kurta,lengha_choli,shoes,shirt,women_dress,watches] = await Promise.all([
          dispatch(getProducts('mens_kurta')),
          dispatch(getProducts('lengha_choli')),
          dispatch(getProducts('shoes')),
          dispatch(getProducts('shirt')),
          dispatch(getProducts('women_dress')),
          dispatch(getProducts('watches'))

        ])
        setProducts({
          mens_kurta,
          lengha_choli,
          shirt,
          shoes,
          women_dress,
          watches 
        });
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  },[dispatch])

  useEffect(()=>{
    dispatch(findProductById(products?._id))
  })
  return (
    <div className=' w-full'>
        <HomeCarousel/>
        <div className='max-w-[1280px] mx-auto'>
            <div className='space-y-6 py-10 flex flex-col'>
              <HomesecCarousel dataName={products.mens_kurta} sectionName={"Men's Kurta"}/>
              <HomesecCarousel dataName={products.shirt} sectionName={"Men's Shirt"}/>
              <HomesecCarousel dataName={products.shoes} sectionName={"Men's Shoes"}/>
              <HomesecCarousel dataName={products.watches} sectionName={"Men's Watches"}/>
              <HomesecCarousel dataName={products.lengha_choli} sectionName={"Women's Lengha Choli"}/>
              <HomesecCarousel dataName={products.women_dress} sectionName={"Women's Dress"}/>
              
              
            </div>
        </div>
        </div>
  )
}

export default HomePage