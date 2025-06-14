import React from 'react'
import offIcon from '../assets/bestseller/off.png'
import applodJar from '../assets/bestseller/applod-jar.png'
import vegIcon from '../assets/bestseller/veg-icon.png'
import paswIcon from '../assets/bestseller/paws.png'
import heartIcon from '../assets/bestseller/heart.png'
import starIcon from '../assets/bestseller/Vector.png'

function BestSellers() {
  const products = [
    {
      id: 1,
      name: 'Applod Crunch-a-Licious Gluten Free Chicken & Cheese Dog Biscuits',
      price: 5000,
      rating: 5.0,
      image: applodJar,
      discount: '70% OFF',
    },
    { id: 2, name: 'Applod Crunch-a-Licious Gluten Free Chicken & Cheese Dog Biscuits', price: 5000, rating: 5.0, image: applodJar, discount: '70% OFF' },
    { id: 3, name: 'Applod Crunch-a-Licious Gluten Free Chicken & Cheese Dog Biscuits', price: 5000, rating: 5.0, image: applodJar, discount: '70% OFF' },
    { id: 4, name: 'Applod Crunch-a-Licious Gluten Free Chicken & Cheese Dog Biscuits', price: 5000, rating: 5.0, image: applodJar, discount: '70% OFF' },
    { id: 5, name: 'Applod Crunch-a-Licious Gluten Free Chicken & Cheese Dog Biscuits', price: 5000, rating: 5.0, image: applodJar, discount: '70% OFF' },
  ]

  return (
    <div className="w-full px-4 py-8 bg-white">
      {/* Inline style to hide scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Header */}
      <div className="flex items-center mb-6">
        <img src={paswIcon} alt="Paws" className="w-10 h-6 mr-2" />
        <h2 className="text-2xl md:text-3xl font-extrabold">
          <span className="text-[#F59A11]">Bestsellers </span>
          <span className="text-[#0888B1]">Under ₹599</span>
        </h2>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[250px] max-w-[250px] p-4 rounded-lg  bg-white"
          >
            {/* Product Image and Badge */}
            <div className="relative mb-3">
              <span className="absolute top-0 left-0 bg-gradient-to-r from-[#1C83A8] via-[#48BDE6] to-[#13789D] text-white text-xs font-bold px-2 py-0.5 rounded">
                BESTSELLER
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain pt-3"
              />
            </div>

            {/* Rating */}
            <div className="flex items-center text-sm font-semibold text-black mb-1">
              <img src={starIcon} alt="Star" className="w-4 h-4 mr-1" />
              {product.rating}
            </div>

            {/* Name and Veg */}
            <div className="flex justify-between items-start mb-2">
              <p className="text-[13px] font-medium leading-tight w-[80%] ">
                {product.name}
              </p>
              <img src={vegIcon} alt="Veg" className="w-4 h-6 mt-1" />
            </div>

            {/* Price and Discount */}
            <div className="flex justify-between items-center text-sm font-semibold">
              <div>
                <p className="text-[10px] text-gray-500">PRICE</p>
                <p className="text-[#218032] text-[15px] font-bold">₹{product.price}</p>
              </div>
              <span className=" text-white text-[12px] px-2 py-0.5 rounded-md font-bold">
                <img src={offIcon} alt="" />
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 mt-4">
              <button className="w-10 h-10  rounded-xl flex items-center justify-center">
                <img src={heartIcon} alt="Wishlist" className="w-8 h-8" />
              </button>
              <button className="flex-1 bg-[#F59A11] hover:bg-[#e18a0e] text-white  py-2 rounded-lg text-sm">
                ADD TO CART
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BestSellers
