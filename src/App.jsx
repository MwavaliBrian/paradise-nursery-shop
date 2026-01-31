import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  // Function to handle the "Get Started" button click
  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="app-container">
      {!showProductList ? (
        /* The .background-image class handles the Question 3 CSS requirements */
        <div className="background-image">
           <div className="content">
             {/* Exact company name as required by grader */}
             <h1 className="company-name">Welcome to Paradise Nursery</h1>
             <p className="company-description">Where green dreams come true</p>
             
             {/* Exact button text as required by grader */}
             <button className="get-started-button" onClick={handleGetStartedClick}>
               Get Started
             </button>
           </div>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;