import React, { useState } from 'react'
import Rating from '@mui/material/Rating'
import { HiMiniShoppingCart } from "react-icons/hi2";

function ProductCard({ product }) {
    
    const [itemsCount, setItemCount] = useState(product.items[0]);

    return (
        <>
            <div className='mt-5 pb-2'>
                <div className='relative w-72 p-2 group box-shadow transition-shadow duration-300'>
                    
                    <div className='w-full h-80 overflow-hidden'>
                        <img
                            src={itemsCount.image}
                            alt={product.title}
                            className='w-full h-full object-contain transition-all duration-300 hover:scale-105'
                        />
                    </div>

                    
                    <div className='description w-64 p-2'>
                     
                        <div className='h-7 flex gap-2'>
                            {product.items.map((item) => (
                                <div
                                    key={item.id}
                                    className={`w-5 h-5 rounded-full cursor-pointer transition-all duration-200 hover:scale-125 ${
                                        itemsCount.id === item.id 
                                            ? 'ring-2 ring-offset-2 ring-blue-500' 
                                            : ''
                                    }`}
                                    style={{ backgroundColor: item.colorCode }}
                                    onClick={() => setItemCount(item)}
                                    title={item.color}
                                />
                            ))}
                        </div>

                        <div className='w-full mt-2'>
                            <p className='truncate font-medium cursor-pointer hover:text-yellow-600 transition-colors duration-300'>
                                {product.title}
                            </p>
                           
                            <p className='text-sm text-gray-500 mt-1'>
                                Color: {itemsCount.color}
                            </p>
                        </div>

                       
                        <div className='mt-2'>
                            <Rating 
                                name='read-only' 
                                value={product.rating.rate} 
                                readOnly 
                                precision={0.1}
                                size="small"
                            />
                        </div>

                       
                        <div className='flex items-center gap-6 mt-2'>
                            <span className='text-orange-700 font-semibold text-2xl'>
                                ${itemsCount.price}
                            </span>
                            <span className='text-gray-500'>
                                {product.rating.count}+ Sold
                            </span>
                        </div>

                       
                        {itemsCount.stock < 10 && (
                            <p className='text-red-500 text-xs mt-1'>
                                Only {itemsCount.stock} left in stock!
                            </p>
                        )}
                    </div>

               
                    <div className='absolute bottom-1 right-1 rounded-full p-2 border-gray-400 border cursor-pointer hover:bg-orange-700 hover:border-orange-700 transition-all duration-300 group/cart'>
                        <HiMiniShoppingCart className='text-3xl text-gray-700 group-hover/cart:text-white transition-colors duration-300' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard