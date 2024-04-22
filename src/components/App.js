import React from 'react';
import Header from './Header';
import MemoryControl from './MemoryControl';
import SignIn from './SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/" element={<MemoryControl/>}/>
        <Route path="*" element={<h1 className='page-not-found'>Page not found!</h1>}/>
      </Routes>
    </Router>
  );
}

export default App;
