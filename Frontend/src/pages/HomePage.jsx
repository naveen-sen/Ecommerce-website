import React, { useState, useEffect } from 'react';
import { HomeCarousel } from '../Components/Carosal/HomeCarousel';
import HomesecCarousel from '../Components/HomeSecCarousel/HomesecCarousel';
import { useDispatch } from 'react-redux';
import { findProductById, getProducts } from '../store/Product/action';
import Footer from '../Components/Footer/Footer';

function HomePage() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState({
    mens_kurta: [],
    lengha_choli: [],
    shirt: [],
    shoes: [],
    women_dress: [],
    watches: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const [mens_kurta, lengha_choli, shoes, shirt, women_dress, watches] = await Promise.all([
          dispatch(getProducts('mens_kurta')),
          dispatch(getProducts('lengha_choli')),
          dispatch(getProducts('shoes')),
          dispatch(getProducts('shirt')),
          dispatch(getProducts('women_dress')),
          dispatch(getProducts('watches')),
        ]);
        setProducts({
          mens_kurta,
          lengha_choli,
          shirt,
          shoes,
          women_dress,
          watches,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    dispatch(findProductById(products?._id));
  }, [dispatch, products]);

  return (
    <div className="w-screen ">
      <HomeCarousel />
      <div className="w-full mx-auto px-2">
        <div className="space-y-6 py-10 flex flex-col">
          <HomesecCarousel dataName={products.mens_kurta} sectionName={"Men's Kurta"} />
          <HomesecCarousel dataName={products.shirt} sectionName={"Men's Shirt"} />
          <HomesecCarousel dataName={products.shoes} sectionName={"Men's Shoes"} />
          <HomesecCarousel dataName={products.watches} sectionName={"Men's Watches"} />
          <HomesecCarousel dataName={products.lengha_choli} sectionName={"Women's Lengha Choli"} />
          <HomesecCarousel dataName={products.women_dress} sectionName={"Women's Dress"} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
