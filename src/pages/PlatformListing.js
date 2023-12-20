import React from 'react'
import Layout from '../components/Layout'
import item from '../asset/item.png'
import { useNavigate } from 'react-router-dom'

const PlatFormListing = () => {

    const navigate = useNavigate();

    return (
        <Layout>
            <h2 className='page-title'>E-Commerce Lisitng</h2>
            <hr />
            <div className="listing-container">
                <div className="product-detail card-border">
                    <div className="img-container">
                        <img src={item} alt="Image" />
                    </div>
                    <div className="content">
                        <p><strong>Temperature Controller</strong></p>
                        <p>A temperature controller is a device used to regulate the temperature of a system or process. It typically includes a temperature sensor to measure the current temperature and a control algorithm to adjust heating or cooling elements to maintain a desired temperature setpoint.</p>
                        <div className="productInfo">
                            <p><strong><span className='text-purple'>Manfacturer:</span> Destotech Pvt. Ltd </strong></p>
                            <p><strong><span className='text-purple'>Product ID:</span> 1100AA01 </strong></p>
                        </div>
                        <div className="productInfo">
                            <p><strong><span className='text-purple'>Price (per piece):</span> Rs 1,500 </strong></p>
                            <p><strong><span className='text-purple'>Quantity:</span> 12 pieces</strong></p>
                            <p><strong><span className='text-purple'>Category:</span> New Stock</strong></p>
                        </div>
                    </div>
                </div>
                <div className="product-listing card-border">
                    <h4>E-Commerce Upload Listing</h4>
                    <div className="list-container">
                        <p>Amazon</p>
                        <input type="file" id="upload" hidden />
                        <label htmlFor="upload" className='purple' ><i class="ri-upload-cloud-line"></i> Choose file</label>
                    </div>
                    <div className="list-container">
                        <p>Flipkart</p>
                        <input type="file" id="upload" hidden />
                        <label htmlFor="upload" className='purple' ><i class="ri-upload-cloud-line"></i> Choose file</label>
                    </div>
                    <div className="list-container">
                        <p>IndiaMart</p>
                        <input type="file" id="upload" hidden />
                        <label htmlFor="upload" className='purple' ><i class="ri-upload-cloud-line"></i> Choose file</label>
                    </div>
                    <div className="list-container">
                        <p>Website</p>
                        <input type="file" id="upload" hidden />
                        <label htmlFor="upload" className='purple' ><i class="ri-upload-cloud-line"></i> Choose file</label>
                    </div>
                </div>
                <div className="button">
                    <div className="btn btn-danger" onClick={()=>navigate('/add-products')}>Back</div>
                    <div className="btn btn-success" onClick={()=>navigate('/')}>Continue to Home Page</div>
                </div>
            </div>

        </Layout>
    )
}

export default PlatFormListing
