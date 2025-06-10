import React from 'react'
import promo1 from '../assets/promos/banner1.png'
import promo2 from '../assets/promos/banner2.png'
import promo3 from '../assets/promos/banner3.png'

const promoImages = [promo1, promo2, promo3]

function Promotions() {
  return (
    <div className="w-full px-4 py-6">
      {/* Horizontal scrollable promo banners */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 w-max">
          {promoImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Promo ${index + 1}`}
              className="h-[120px] md:h-[200px] rounded-xl flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Promotions
