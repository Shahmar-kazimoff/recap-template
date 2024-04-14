import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addBasket, addWishlist } from "../../../Slice/BasketSlice";
import "./Home.css"
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineShopping } from "react-icons/ai";
import { LiaSearchSolid } from "react-icons/lia";
import { IoMdHeartEmpty } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DetailModal from '../../Modal/DetailModal';


const HomePage = () => {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/db.json');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);


  const dispatch = useDispatch()
  const addToCart = (product) => {
    dispatch(addBasket(product))
  };
  const addToWishlist = (product) => {
    dispatch(addWishlist(product))
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className='relative py-12'>
      <section>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
          <Carousel.Item>
            <div className="relative w-full">
              <img
                src="https://fone-store-demo.myshopify.com/cdn/shop/files/s1.jpg?v=1660640243"
                alt="First slide"
                className="object-cover w-full min-h-[650px] h-[100vh]"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <p className='font-semibold spacing-let'>Style Destination</p>
                <p className='text-4xl font-bold my-3'>Delicios Foods</p>
                <p className='text-[19px] font-semibold'>It is a long established fact that a reader will be distracted by the readable content</p>
                <button className='my-[30px] text-sm font-bold  px-9 py-[12px] border  spacing-let hover:bg-white hover:text-black duration-200'>SHOP NOW</button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="relative w-full">
              <img
                className="object-cover w-full min-h-[650px] h-[100vh]"
                src="https://fone-store-demo.myshopify.com/cdn/shop/files/s2.jpg?v=1660640292"
                alt="Second slide"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
                <p className='font-semibold spacing-let'>Style Destination</p>
                <p className='text-4xl font-bold my-3'>Delicios Foods</p>
                <p className='text-[19px] font-semibold'>It is a long established fact that a reader will be distracted by the readable content</p>
                <button className='my-[30px] text-sm font-bold  px-9 py-[12px] border  spacing-let hover:bg-white hover:text-black duration-200'>SHOP NOW</button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
      <section className='my-14 container mx-auto max-w-[1440px]'>
        <p className='text-2xl font-bold my-5 underline underline-color underline-offset-8'>VISIT OUR STORE</p>
        <div className="slider-container">
          <div>
            <Slider className='' {...settings}>
              <div className='slide-part'>
                <img className='w-[33%]' src="https://fone-store-demo.myshopify.com/cdn/shop/files/ba4.png?v=1660639490" alt="" />
                <div className='w-[50%] flex flex-col justify-center items-start text-left'>
                  <p className='font-bold mb-2'>Hamburger Veggie</p>
                  <p className='text-sm'>It is a long established fact that a reader</p>
                </div>
              </div>
              <div className='slide-part'>
                <img className='w-[33%]' src="https://fone-store-demo.myshopify.com/cdn/shop/files/ba1.png?v=1660639419" alt="" />
                <div className='w-[50%] flex flex-col justify-center items-start text-left'>
                  <p className='font-bold mb-2'>Sushi Sashimi</p>
                  <p className='text-sm'>It is a long established fact that a reader</p>
                </div>
              </div>
              <div className='slide-part'>
                <img className='w-[33%]' src="https://fone-store-demo.myshopify.com/cdn/shop/files/ba3.png?v=1660639419" alt="" />
                <div className='w-[50%] flex flex-col justify-center items-start text-left'>
                  <p className='font-bold mb-2'>Peproni Pizza</p>
                  <p className='text-sm'>It is a long established fact that a reader</p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className='flex gap-4 my-20'>
          <div className='border flex  items-center cursor-pointer'>
            <div className='absolute pl-7 flex flex-col justify-center items-start text-left'>
              <p className='font-bold text-xl'>Any Day Offers</p>
              <p className='text-sm my-2'>Suspendisse Faucibus Sed</p>
              <p className='text-xs font-bold underline underline-offset-[7px] hover:text-green-500 duration-200 cursor-pointer'>SHOP NOW</p>
            </div>
            <img className='' src="https://fone-store-demo.myshopify.com/cdn/shop/files/ba5.jpg?v=1660639875" alt="" />
          </div>
          <div className='border flex  items-center  cursor-pointer'>
            <div className='absolute pl-7 flex flex-col justify-center items-start text-left'>
              <p className='font-bold text-xl'>Any Day Offers</p>
              <p className='text-sm my-2'>Suspendisse Faucibus Sed</p>
              <p className='text-xs font-bold underline underline-offset-[7px] hover:text-green-500 duration-200 cursor-pointer'>SHOP NOW</p>
            </div>
            <img className='' src="https://fone-store-demo.myshopify.com/cdn/shop/files/ba6.jpg?v=1660639875" alt="" />
          </div>
        </div>
      </section>
      <section className='container mx-auto max-w-[1440px]'>
        <p className='text-2xl font-bold underline underline-color underline-offset-[15px]'>BEST SELLER</p>
        <p className='my-8 font-semibold'>Best Seller Porduction This Week!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          {products.map(product => (
            <div key={product.id} className="border border-gray-300 rounded product">
              <div className='overflow-hidden relative max-h-[415px]'>
                <img src={product.image} alt={product.name} className="w-full object-cover relative" />
                {product.discount && <span className="discount">{product.discount}%</span>}
                <div className='addCart'>
                  <button className='rounded-3xl p-2 hover:bg-green-500 hover:text-white duration-150' onClick={() => addToCart(product)}><AiOutlineShopping />
                  </button>
                  <DetailModal product={product} className='mx-4  rounded-3xl p-2 hover:bg-green-500 hover:text-white duration-150'><LiaSearchSolid /></DetailModal>
                  <button className='rounded-3xl p-2 hover:bg-green-500 hover:text-white duration-150' onClick={() => addToWishlist(product)}><IoMdHeartEmpty />
                  </button>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mt-3">{product.name}</h3>
                <div className='flex justify-center '>
                  {product.originalPrice && <p className="text-gray-500 font-bold"><span className='mr-2 line-through'>${product.originalPrice}</span></p>}
                  <p className="text-green-500 font-bold">${product.price}</p>
                </div>
              </div>
            </div>

          ))
          }
        </div >
      </section >
      <section className='relative text-start my-20'>
        <img className='w-full' src="https://fone-store-demo.myshopify.com/cdn/shop/files/ba7.jpg?v=1660640108" alt="" />
        <div className='absolute  right-0 left-[55%] sm:top-[20%] lg:top-[40%] font-bold'>
          <p className='md:text-5xl text-2xl text-white'>Enjoy The Delicious Taste</p>
          <p className='my-3 sm:my-6 text-[10px] sm:text-lg text-white'>When you’ve got your health, you got everything.</p>
          <button className='bg-[white]  hover:bg-green-600 duration-300 hover:text-[white] px-2 sm:px-20 sm:py-2 py-[5px] sm:text-[20px] text-[8px]'>SHOP NOW</button>
        </div>
      </section>

    </div >
  );
};

export default HomePage;