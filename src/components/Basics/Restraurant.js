import React, { useState } from 'react'
import Menu from './menuApi';
import './style.css';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [...new Set (Menu.map((curElem)=>{
  return curElem.category;
})), "All",
];

const Restraurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);
    

   

    const filterItem = (category)=>{

      if(category==="All"){
        setMenuData(Menu);
        return;
      }
    const updatedItem = Menu.filter((curElem)=>{
      return curElem.category === category;
    });
     setMenuData(updatedItem);

    }
  return (
    <>
        <Navbar filterItem={filterItem} menuList={menuList}/>
        < MenuCard  menuData ={menuData}/>
        
        
        </>
  )
}

export default Restraurant