import React from 'react'
import pawLogo from '../assets/essential/paws-logo.png'

// Import product images from your assets
import prod1 from '../assets/essential/prod1.png'
import prod2 from '../assets/essential/prod2.png'
import prod3 from '../assets/essential/prod3.png'
import prod4 from '../assets/essential/prod4.png'
import prod5 from '../assets/essential/prod5.png'
import prod6 from '../assets/essential/prod6.png'
import prod7 from '../assets/essential/prod7.png'
import prod8 from '../assets/essential/prod8.png'

// Static data array
const essentials = [
  { id: 1, image: prod1, tag: 'BESTSELLER', label: 'Chicken Gravy' },
  { id: 2, image: prod2, tag: 'BESTSELLER', label: 'Chicken Gravy' },
  { id: 3, image: prod3, tag: 'BESTSELLER', label: 'Chicken Gravy' },
  { id: 4, image: prod4, tag: 'BESTSELLER', label: 'Chicken Gravy' },
  { id: 5, image: prod5, tag: 'BESTSELLER', label: 'Chicken Gravy' },
  { id: 6, image: prod6, tag: 'BESTSELLER', label: 'Chicken Gravy' },
  { id: 7, image: prod7, tag: 'BESTSELLER', label: 'Chicken Gravy' },
  { id: 8, image: prod8, tag: 'BESTSELLER', label: 'Chicken Gravy' },
]

function Essential() {
  return (
    <div className="w-full px-4 py-6">
      {/* Inline CSS to hide scrollbar */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;     /* Firefox */
          }
        `}
      </style>

      {/* Title */}
      <h2 className="font-bold mb-4 font-gotham-rounded text-[28px] leading-[28.5px] tracking-[0.57px] align-middle">
        <span className="text-yellow-500">
          <img src={pawLogo} alt="Paw Logo" className="inline-block mr-0 h-6" />
        </span>{' '}
        <span className="text-[#F59A11]">Everyday</span>{' '}
        <span className="text-[#0888B1]">Essentials</span>
      </h2>

      {/* Scrollable list with scrollbar hidden */}
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 w-max">
          {essentials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center min-w-[150px]"
            >
              {/* Tag */}
              <div className="bg-gradient-to-r from-[#1C83A8] via-[#48BDE6] to-[#13789D] text-white text-xs font-semibold px-2 py-1 rounded-t-md">
                {item.tag}
              </div>

              {/* Image */}
              <img
                src={item.image}
                alt={item.label}
                className="w-36 h-36 object-contain bg-white font-gotham-rounded "
              />

              {/* Label */}
              <p className="text-sm mt-2 font-medium text-[#181818]">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Essential
