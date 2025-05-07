'use client'

import { Radio, RadioGroup } from '@headlessui/react';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { mens_kurta } from '../../Data/Mens/Men_kurta.js';
import { addItemToCart } from '../../store/Cart/action.js';
import { findProductById } from '../../store/Product/action.js';
import HomeCard from '../HomeCard/HomeCard';
import ProductReviewCard from './ProductReviewCard';



const product = {
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
  ],
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Add this function before the main component
const generateBreadcrumbs = (product) => {
  if (!product || !product.category) return [];

  const breadcrumbs = [];
  let currentCategory = product.category;
  let level = 1;

  // Traverse up the category hierarchy
  while (currentCategory && level <= 3) {
    breadcrumbs.unshift({
      id: level,
      name: currentCategory.name,
      href: `/products/${currentCategory.name.toLowerCase()}`
    });
    currentCategory = currentCategory.parentCategory;
    level++;
  }

  return breadcrumbs;
};

export default function ProductDetail() {
  const [selectedColor, setSelectedColor] = useState()
  const [selectedSize, setSelectedSize] = useState("")
  const navigate = useNavigate()
  const params = useParams()
  const dispatch = useDispatch();
  const {products} = useSelector(store=>store)

  const handleAddToCart = ()=>{
    const data = {productId:params.id,size:selectedSize.name}
    dispatch(addItemToCart(data))
    navigate('/cart')
  }

  useEffect(()=>{
    const data = params.id
    dispatch(findProductById(data))
  },[params.id])

  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
      <nav aria-label="Breadcrumb">
      <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
    {generateBreadcrumbs(products.product).map((breadcrumb) => (
      <li key={breadcrumb.id}>
        <div className="flex items-center">
          <a 
            href={breadcrumb.href} 
            className="mr-2 text-sm font-medium text-gray-900 hover:text-gray-600"
          >
            {breadcrumb.name}
          </a>
          <svg
            width={16}
            height={20}
            viewBox="0 0 16 20"
            fill="currentColor"
            aria-hidden="true"
            className="h-5 w-4 text-gray-300"
          >
            <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
          </svg>
        </div>
        </li>
        ))}
        <li className="text-sm">
          <span className="font-medium text-gray-500">
            {products.product?.brand || 'Product'}
          </span>
        </li>
      </ol>
    </nav>

        <section className='grid grid-cols-1 lg:grid-cols-2 px-4 gap-x-8 gap-y-14 pt-10 w-[100vw]'>
          {/* Image gallery */}
        <div className="flex flex-col items-center">
          <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
          <img
            alt=""
            src={products.product?.imageUrl}
            className="size-full rounded-lg object-cover object-center"
          />
          </div>

        </div>

          {/* Product info */}
          <div className="lg:col-span-1 max-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">	
            <div className="lg:col-span-2 ">
              <h1 className="text-lg lg:text-xl font-semibold tracking-tight text-gray-900 ">{products.product?.brand}</h1>
              <h1 className="text-lg lg:text-xl font-semibold tracking-tight text-gray-900 opacity-60">{products.product?.title}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                <p className='font-semibold'>₹ {products.product?.discountedPrice}</p>
                <p className='opacity-50  line-through'>₹ {products.product?.price}</p>
                <p className='text-green-600 font-semibold'>{products.product?.discountPercent}% off</p>

              </div>

              {/* Reviews */}
              <div className="mt-6 ">
              <div className='flex items-center space-x-4'>
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                <p className='opacity-50 text-sm'>2485 Ratings</p>
                <p className='ml- text-sm font-medium text-indigo-700 hover:text-indigo-500'>3480 Reviews</p></div>
              </div>

              <form className="mt-10">

                {/* Sizes */}
                <div className="mt-10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 pr-12">
                      Size guide
                    </a>
                  </div>

                  <fieldset aria-label="Choose a size" className="mt-4">
                    <RadioGroup
                      value={selectedSize}
                      onChange={setSelectedSize}
                      className="grid grid-cols-4 gap-4 pr-10 sm:grid-cols-8 lg:grid-cols-4"
                    >
                      {product.sizes.map((size) => (
                        <Radio
                          key={size.name}
                          value={size}
                          disabled={!size.inStock}
                          className={classNames(
                            size.inStock
                              ? 'cursor-pointer bg-white text-gray-900 shadow-xs'
                              : 'cursor-not-allowed bg-gray-50 text-gray-200',
                            'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden data-focus:ring-2 data-focus:ring-indigo-500 sm:flex-1 sm:py-6',
                          )}
                        >
                          <span>{size.name}</span>
                          {size.inStock ? (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
                            />
                          ) : (
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                            >
                              <svg
                                stroke="currentColor"
                                viewBox="0 0 100 100"
                                preserveAspectRatio="none"
                                className="absolute inset-0 size-full stroke-2 text-gray-200"
                              >
                                <line x1={0} x2={100} y1={100} y2={0} vectorEffect="non-scaling-stroke" />
                              </svg>
                            </span>
                          )}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </fieldset>
                </div>

                <Button type="submit" onClick={handleAddToCart} variant="contained" sx={{px:"2rem",py:"1rem",mt:"2rem",bgcolor:"#9155fd"}}
                >
                  Add to Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{products.product?.description}</p>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/*rating and reviews */}

        <section className='w-[90vw]'>
          <div className="flex justify-start">
            <h1 className='font-semibold text-lg pb-4'>Recent Rating and Reviews</h1>
          </div>
          <div className='border border-gray-300 p-5 '>
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div className='space-y-5'>
                  {[1,1,1].map((item)=> <ProductReviewCard/>)}
                </div>
              </Grid>

              <Grid item xs={5} className='ml-150'>
                <h1 className='text-xl font-semibold pb-4'>Product Ratings</h1>
                
                <div className='flex items-center space-x-4 mb-4'>
                  <Rating value={4.6} precision={0.5} readOnly />
                  <p className='opacity-60'>5794 Ratings</p>
                </div>

                <Box className='space-y-3 mt-5 px-2'>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={2}>
                      <p className="text-sm text-gray-500 mx-1.5">Excellent</p>
                    </Grid>
                    <Grid item xs={10}>
                      
                      <LinearProgress
                        variant="determinate"
                        value={40}
                        color='success'
                        sx={{
                          minHeight: 8,
                          minWidth: 100,
                          borderRadius: 4,
                          backgroundColor: '#e5e7eb',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: 'success',
                            borderRadius: 4,
                            ml:1
                          }
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={2}>
                      <p className="text-sm text-gray-500 mx-0">Very Good</p>
                    </Grid>
                    <Grid item xs={10}>
                      
                      <LinearProgress
                        variant="determinate"
                        value={40}
                        sx={{
                          minHeight: 8,
                          minWidth: 100,
                          borderRadius: 4,
                          backgroundColor: '#e5e7eb',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: 'lightgreen',
                            borderRadius: 4,
                            ml:1
                          }
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={2}>
                      <p className="text-sm text-gray-500 mx-4">Good</p>
                    </Grid>
                    <Grid item xs={10}>
                      
                      <LinearProgress
                        variant="determinate"
                        value={40}
                        sx={{
                          minHeight: 8,
                          minWidth: 100,
                          borderRadius: 4,
                          backgroundColor: '#e5e7eb',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: '#fbbf24',
                            borderRadius: 4,
                            ml:1
                          }
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={2}>
                      <p className="text-sm text-gray-500 mx-2">Average</p>
                    </Grid>
                    <Grid item xs={10}>
                      
                      <LinearProgress
                        variant="determinate"
                        value={40}
                        color='warning'
                        sx={{
                          minHeight: 8,
                          minWidth: 100,
                          borderRadius: 4,
                          backgroundColor: '#e5e7eb',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: 'success',
                            borderRadius: 4,
                            
                          }
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={2}>
                      <p className="text-sm text-gray-500 mx-4.5">Poor</p>
                    </Grid>
                    <Grid item xs={10}>
                      
                      <LinearProgress
                        variant="determinate"
                        value={40}
                        color='error'
                        sx={{
                          minHeight: 8,
                          minWidth: 100,
                          borderRadius: 4,
                          backgroundColor: '#e5e7eb',
                          '& .MuiLinearProgress-bar': {
                            backgroundColor: 'success',
                            borderRadius: 4,
                            ml:1
                          }
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>

            </Grid>

          </div>
        </section>
        

        {/* Similar Product */}
        <section className="w-[100vw] pt-10">
          <div className="flex justify-start">
              <h1 className="py-5 font-bold">Similar Product</h1>
          </div>

          <div className="flex flex-wrap space-y-5">
            {mens_kurta.map((item) => (
              <HomeCard product={item}/>
            ))}
          </div>


        </section>
        
      </div>
    </div>
  )
}
