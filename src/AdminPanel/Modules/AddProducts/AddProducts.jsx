import React from 'react'
import './AddProductStyles.css';
import Header from '../../Components/Header/Header';
const AddProducts = () => {
    return (
        <>
            <Header />
            <div className="add-product-container">
                <div className="add-product">
                    <p className="add-p-cat">Category</p>
                    <input type="text" className="add-p-input" />
                    <p className="add-p-cat">Product</p>

                    <input type="text" className="add-p-input" />

                    <p>select Category</p>
                    <select name="category" id="">
                        <option value=""></option>
                    </select>
                    <p>Select Product</p>
                    <select name="category" id="">
                        <option value=""></option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default AddProducts