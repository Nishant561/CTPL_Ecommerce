import React, { useRef, useState } from 'react'
import { MdArrowDropUp } from "react-icons/md";
import { Link } from 'react-router-dom';
function Products() {


const [isOpen, setIsOpen] = useState(false);

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
  return (
    <div className='main-container pt-9'>
          <div onMouseEnter={handelArrow} onMouseLeave={handelArrow} className='relative w-58.75'>
            <div className='flex items-center gap-5 border w-full  py-1 px-2'>
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
        <ul className={`absolute top-full p-2 w-58.75  shadow left-0 ${isOpen? 'block' :'hidden'} transition-all duration-300 `}>
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
    </div>
    
  )
}

export default Products