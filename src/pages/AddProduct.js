import React, { useState } from 'react'
import Layout from '../components/Layout'
import { useNavigate } from 'react-router-dom';
import { io } from 'socket.io-client';

const AddProduct = () => {

    // Setting up the socket.io connection from backend
    const socket = io.connect("http://localhost:3001")

    // Using the useNavigate hook to navigate between pages
    const navigate = useNavigate();

    // Setting up the received form values in formData
    const [formData, setFormData] = useState({
        productName: '',
        productId: '',
        manufacturerName: '',
        productDescription: '',
        productQuantity: '',
        productImage: '',
        productImage: '',
        selectCategory: '',

    });

    // Handling the Input change of form and setting it into formData
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        // Updating the server that stock has been sell
        socket.emit('addStock', {message: Number(formData.productQuantity)});
    };

    return (
        <Layout>
            <h2 className='page-title'>Add Products</h2>
            <hr />
            <div className="addProductForm">
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="productName" className="form-label">Product Name</label>
                            <input type="text" className="form-control" id="productName" name='productName' placeholder='Add Product Name' value={formData.productName}
                                onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productId" className="form-label">Product Id</label>
                            <input type="text" className="form-control" id="productId" name='productId' placeholder='Product Id' value={formData.productId}
                                onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="manufacturerName" className="form-label">Manufacturer Name</label>
                            <input type="text" className="form-control" id="manufacturerName" name='manufacturerName' placeholder='Manufacturer Name' value={formData.manufacturerName}
                                onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productDescription" className="form-label">Product Description</label>
                            <input type="text" className="form-control" id="productDescription" name='productDescription' placeholder='Product Description' value={formData.productDescription}
                                onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productQuantity" className="form-label">Product Quantity</label>
                            <input type="number" className="form-control" id="productQuantity" name='productQuantity' placeholder='Product Quantity' value={formData.productQuantity}
                                onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productImage" className="form-label">Add Product Image</label>
                            <input className="form-control" type="file" id="productImage" name='productImage' accept='image/*' value={formData.productImage}
                                onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="selectCategory" className="form-label">
                                Select Category
                            </label>
                            <select
                                className="form-select"
                                id="selectCategory"
                                name='selectCategory'
                                value={formData.selectCategory}
                                onChange={handleInputChange}>
                                <option value="">Select</option>
                                <option value="New Stock">New Stock</option>
                                <option value="Old Stock">Old Stock</option>
                            </select>
                        </div>
                        <div className="button">
                            <button type="submit" className="btn btn-danger mt-3" onClick={()=>navigate('/')}>Cancel</button>
                            <button type="submit" className="btn btn-success mt-3">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default AddProduct
