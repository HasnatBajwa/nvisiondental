import React from 'react'
import './AddProductStyles.css';
import Header from '../../Components/Header/Header';
const AddProducts = () => {
    return (
        <>
            <Header />
            <div className="add-product-container">
                <div className="add-product">
                    <input type="text" className="add-p-input" />
                    <input type="text" className="add-p-input" />
                </div>
            </div>
        </>
    )
}

export default AddProducts