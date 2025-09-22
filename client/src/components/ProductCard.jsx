import React from 'react';
import { IoShareSocial } from "react-icons/io5";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const actions = [
  { label: "Share", icon: IoShareSocial },
  { label: "Compare", icon: FaArrowRightArrowLeft },
  { label: "Like", icon: FaRegHeart },
];

const ProductCard = ({ product }) => {
  return (
    <div className="group relative w-[220px] sm:w-[280px] bg-[#F4F5F7] rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      {/* Discount Badge */}
      {product.discount && (
        <div className="absolute top-4 right-4 bg-red-500 w-[50px] h-[50px] rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
          -{product.discount}%
        </div>
      )}

      {/* Product Image */}
      <div className="relative w-full h-48 bg-white flex items-center justify-center">
        <img
          src={product.productImage}
          alt={product.name}
          className="h-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="font-semibold text-lg text-gray-800 mb-1">
          {product.name}
        </div>
        <div className="text-sm text-gray-500 mb-2">{product.description}</div>
        <div className="flex items-center gap-2">
          {product.salePrice && (
            <div className="text-gray-800 font-bold text-base">
              Rp {product.salePrice.toLocaleString('id-ID')}
            </div>
          )}
          {product.originalPrice && (
            <div className="text-gray-400 line-through text-sm">
              Rp {product.originalPrice.toLocaleString('id-ID')}
            </div>
          )}
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition">
        {/* Add to Cart */}
        <button className="bg-white text-yellow-600 font-semibold px-6 py-2 rounded shadow hover:bg-yellow-100 transition">
          Add to Cart
        </button>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center items-center">
          {actions.map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="text-white flex items-center gap-1 text-sm hover:text-yellow-400 transition"
            >
              <span>{label}</span>
              <Icon />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
