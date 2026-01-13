import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function NavTags() {


    const scrollRef = useRef(null);

  
  const handleWheel = (e) => {
    e.preventDefault(); 
    scrollRef.current.scrollLeft += e.deltaY; 
  };

    const tags = [
        {id:1, name: "New In", path:"#"},
  {id:2, name:"Sale", path:"#"},
  {id:3, name:"Women Clothing", path:"#"},
  {id:4, name:"Kids", path:"#"},
  {id:5, name:"Curve", path:"#"},
  {id:6, name:"Men Clothing", path:"#"},
  {id:7, name:"Shoes", path:"#"},
  {id:8, name:"Underwear & Sleepwear", path:"#"},
  {id:9, name:"Jewelry", path:"#"},
  {id:10, name:"Beauty", path:"#"},
  {id:11, name:"Accessories", path:"#"},
  {id:12, name:"Bags & Wallets", path:"#"},
  {id:13, name:"Sportswear", path:"#"},
  {id:14, name:"Swimwear", path:"#"},
  {id:15, name:"Outerwear", path:"#"},
  {id:16, name:"Loungewear", path:"#"},
  {id:17, name:"Denim", path:"#"},
  {id:18, name:"Tops & Shirts", path:"#"},
  {id:19, name:"Pants & Leggings", path:"#"},
  {id:20, name:"Hats & Scarves", path:"#"}
    ]


  return (
    <>
        <div
      ref={scrollRef}
      onWheel={handleWheel}
      className="mx-auto max-w-7xl py-3  shadow-bottom "
    >
      <ul className="w-full flex gap-3 overflow-x-auto scrollbar-hide">
        {tags.map((tag) => (
          <li key={tag.id} className="bg-gray-200 px-3 py-1 rounded whitespace-nowrap">
            <Link
              to={tag.path}
              className="cursor-pointer"
            >
              {tag.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    
    
    </>
  )
}

export default NavTags