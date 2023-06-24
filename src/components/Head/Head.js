import React from 'react'
import hamburger from "../../images/hamburger.png";
import youtubelogo from "../../images/youtube.png";
import usericon from "../../images/usericon.png";
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col p-3 m-1 shadow-lg">
      <div className='flex col-span-1 '>
        <img onClick={()=>toggleMenuHandler()} className='h-8 cursor-pointer' src={hamburger} alt="menu" />
        <a href="/">
        <img className='h-8 mx-2' src={youtubelogo} alt="logo" />
        </a>
      </div>
      <div className='col-span-10 text-center'>
        <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type='text'/>
        <button className='border border-gray-400 px-3 py-2 rounded-r-full bg-gray-100'>🔍</button>
      </div>
      <div className='col-span-1'>
        <img className='h-8' src={usericon} alt="usericon"/>
      </div>
    </div>

  )
}

export default Head;