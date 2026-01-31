// Inside your ProductList component:
const handleAddToCart = (product) => {
  dispatch(addItem(product));
  setAddedToCart((prevState) => ({
     ...prevState,
     [product.name]: true, // Set the product name as key to true to disable the button
   }));
};

// Inside your return() mapping:
<button 
  className="product-button" 
  disabled={addedToCart[product.name]} 
  onClick={() => handleAddToCart(product)}>
    {addedToCart[product.name] ? 'Added' : 'Add to Cart'}
</button>