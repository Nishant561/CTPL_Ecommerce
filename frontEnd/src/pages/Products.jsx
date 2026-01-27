import React, { useState } from 'react'
import { MdArrowDropUp } from "react-icons/md";
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useQuery } from '@tanstack/react-query';
import { productService } from '../api/productServices';
function Products() {


const [isOpen, setIsOpen] = useState(false);

// const {
//     data: products, 
//     isLoading,
//     isError
// } = useQuery({
//     queryKey: ['products'],
//     queryFn: productService.getAllProducts
// });

const products = [
    {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        rating: {
            rate: 3.9,
            count: 120
        },
        items: [
            {
                id: "item-1",
                color: "Graphite",
                colorCode: "#36454F",
                image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
                price: 109.95,
                stock: 15
            },
            {
                id: "item-2",
                color: "Black",
                colorCode: "#000000",
                image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500",
                price: 114.95,
                stock: 8
            },
            {
                id: "item-3",
                color: "Navy Blue",
                colorCode: "#000080",
                image: "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?w=500",
                price: 109.95,
                stock: 12
            },
            {
                id: "item-4",
                color: "Olive Green",
                colorCode: "#556B2F",
                image: "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?w=500",
                price: 119.95,
                stock: 20
            }
        ]
    },
    {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts",
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
        category: "men's clothing",
        rating: {
            rate: 4.1,
            count: 259
        },
        items: [
            {
                id: "item-1",
                color: "White",
                colorCode: "#FFFFFF",
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
                price: 22.30,
                stock: 25
            },
            {
                id: "item-2",
                color: "Black",
                colorCode: "#000000",
                image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500",
                price: 22.30,
                stock: 30
            },
            {
                id: "item-3",
                color: "Navy",
                colorCode: "#000080",
                image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500",
                price: 24.30,
                stock: 18
            },
            {
                id: "item-4",
                color: "Grey",
                colorCode: "#808080",
                image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500",
                price: 22.30,
                stock: 22
            }
        ]
    },
    {
        id: 3,
        title: "Mens Cotton Jacket",
        description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
        category: "men's clothing",
        rating: {
            rate: 4.7,
            count: 500
        },
        items: [
            {
                id: "item-1",
                color: "Tan",
                colorCode: "#D2B48C",
                image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
                price: 55.99,
                stock: 10
            },
            {
                id: "item-2",
                color: "Black",
                colorCode: "#000000",
                image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500",
                price: 59.99,
                stock: 15
            },
            {
                id: "item-3",
                color: "Khaki",
                colorCode: "#C3B091",
                image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500",
                price: 55.99,
                stock: 8
            },
            {
                id: "item-4",
                color: "Navy",
                colorCode: "#000080",
                image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
                price: 57.99,
                stock: 12
            }
        ]
    },
    {
        id: 4,
        title: "Casual Slim Fit",
        description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        category: "men's clothing",
        rating: {
            rate: 2.1,
            count: 430
        },
        items: [
            {
                id: "item-1",
                color: "Light Blue",
                colorCode: "#ADD8E6",
                image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
                price: 15.99,
                stock: 35
            },
            {
                id: "item-2",
                color: "White",
                colorCode: "#FFFFFF",
                image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
                price: 15.99,
                stock: 40
            },
            {
                id: "item-3",
                color: "Pink",
                colorCode: "#FFC0CB",
                image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500",
                price: 17.99,
                stock: 28
            },
            {
                id: "item-4",
                color: "Black",
                colorCode: "#000000",
                image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500",
                price: 15.99,
                stock: 32
            }
        ]
    }
];

const handelArrow = ()=>{
  setIsOpen(!isOpen); 
}


const recommended = [
  { id: 1, name: "Most Popular", path: "#" },
  { id: 2, name: "Newly Arrival", path: "#" },
  { id: 3, name: "Trending Now", path: "#" },
  { id: 4, name: "Top Rated", path: "#" },
  { id: 5, name: "Best Sellers", path: "#" },
  { id: 6, name: "Staff Picks", path: "#" },
  { id: 7, name: "Seasonal Favorites", path: "#" },
  { id: 8, name: "Limited Edition", path: "#" },
  { id: 9, name: "Featured", path: "#" },
  { id: 10, name: "Editor's Choice", path: "#" }
];

// if(isLoading) return <div>Loading....</div>
// if(isError) return <div>Error....</div>
  return (
    <div className='main-container pt-9'>
          <div onMouseEnter={handelArrow} onMouseLeave={handelArrow} className='relative w-58.75  z-10'>
            <div className='flex items-center gap-5 border w-full   py-1 px-2'>
              <p className='text-gray-600 text-[12px] text-nowrap'>
                Sort-By
              </p>
              <p className='text-[15px]'>
                Recommended
              </p>

              <MdArrowDropUp
        className={`ml-1 transition-transform duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
        size={24}
      />
        <ul className={`absolute top-full p-2 w-58.75  shadow left-0 bg-white ${isOpen? 'block' :'hidden'} transition-all duration-300 `}>
          {
            recommended.map((rec)=>(
              <li key={rec.id} className='p-1 cursor-pointer text-[14px] hover:bg-gray-200 text-gray-700'>
                  <Link to={rec.path}>
                    {rec.name}
                  </Link>
              </li>
            ))
          }
        </ul>
            </div>

            

            
    
    
    
          </div>


          <div className='grid grid-cols-4 '>
            {
              products?.map((prod) => (
                  <ProductCard
                    key={prod.id}
                    product={prod}
                  />
              ))
            }
            
          </div>
    </div>
    
  )
}

export default Products