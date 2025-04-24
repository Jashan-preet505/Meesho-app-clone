import React from 'react';
import './App.css'
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import { useState } from 'react';

export default function App() {
   const [searchTerm, setSearchTerm] = useState('');
  return(
      <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* <Home searchTerm={searchTerm} /> */}
      </>
   )

  
}


