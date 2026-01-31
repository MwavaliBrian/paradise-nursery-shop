import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList() {
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState({});

    // Including categories (e.g., Aromatic, Medicinal) is a project requirement
    const categories = [
        {
            category: "Aromatic Plants",
            plants: [
                { name: "Lavender", cost: "$15", image: "https://example.com/lavender.jpg", description: "Calming scent" },
                { name: "Jasmine", cost: "$20", image: "https://example.com/jasmine.jpg", description: "Sweet fragrance" }
            ]
        },
        {
            category: "Medicinal Plants",
            plants: [
                { name: "Aloe Vera", cost: "$12", image: "https://example.com/aloe.jpg", description: "Healing properties" },
                { name: "Echinacea", cost: "$18", image: "https://example.com/echinacea.jpg", description: "Immune support" }
            ]
        }
    ];

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: true, // Disables the button after adding
        }));
    };

    return (
        <div className="product-list-container">
            {categories.map((cat) => (
                <div key={cat.category}>
                    <h2 className="category-title">{cat.category}</h2>
                    <div className="product-grid">
                        {cat.plants.map((plant) => (
                            <div key={plant.name} className="product-card">
                                <img src={plant.image} alt={plant.name} />
                                <h3>{plant.name}</h3>
                                <p>{plant.description}</p>
                                <p><strong>{plant.cost}</strong></p>
                                <button 
                                    className="product-button"
                                    disabled={addedToCart[plant.name]} 
                                    onClick={() => handleAddToCart(plant)}>
                                    {addedToCart[plant.name] ? 'Added' : 'Add to Cart'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;