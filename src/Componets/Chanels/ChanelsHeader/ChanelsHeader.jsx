import React from 'react';
import { Link } from 'react-router-dom';
import './ChanelsHeader.css';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { LuClock3 } from "react-icons/lu";
import { IoMdHelpCircleOutline } from "react-icons/io";
import FormBusquedaMensajes from '../FormBusquedaMensajes/FormBusquedaMensajes';
import { FaBars } from 'react-icons/fa';

const ChanelsHeader = ({ search, setSearch, toggleAside }) => {
  return (
    <div className='chanels-header'>
      <div className='logo'>
        <Link to="/"><img src='../../Imagenes/slack2.png' alt="logo" /></Link>
        <button onClick={toggleAside} className="menu-button">
          <FaBars />
        </button>
      </div>

      <div className='iconos'>
        <FaArrowLeft />
        <FaArrowRight />
        <LuClock3 />
      </div>
      <FormBusquedaMensajes search={search} onSearchChange={setSearch} />
      <div className='ayuda'>
        <IoMdHelpCircleOutline />
      </div> 
    </div>
  );
}

export default ChanelsHeader;
