import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { io } from 'socket.io-client';

// Setting up the socket.io connection from backend
const socket = io.connect("http://localhost:3001")

const Dashboard = () => {

    // Setting the useState for totalOrders
    const [totalOrders, setTotalOrders] = useState([
        {
            id: 1,
            name: '16x16x16 Inductive Sensor Sn: 5mm II Make: DOLPHIN',
            description: "Inductive Sensor which detects all types of Metallic target. Sensor sensing range varies with Amount of Ferrous Content in Metal. Used for Positioning,aligning & Counting Applications.",
            quantity: 120
        },
        {
            id: 2, name: 'M18 Analog Inductive Sensor 0-10VDC Sensing: 8mm II Make: DOLPHIN',
            description: "M18 Analog Inductive Sensor which detects all types of Metallic target. Sensor Output Volatge varies with Change in distance between target and sensor. Used for Positioning & aligning.",
            quantity: 60
        },
        {
            id: 3, name: '3C-D-A93L Magnetic Sensor Relay Output',
            description: "3C-D-A93L Magnetic Sensor reed switch; direct mount; grommet connection Case/Package :SMC, RoHS : Non-Compliant",
            quantity: 120
        },
        {
            id: 4, name: '3C-D-A93L Magnetic Sensor Relay Output Copy',
            description: "3C-D-A93L Magnetic Sensor reed switch; direct mount; grommet connection Case/Package :SMC, RoHS : Non-Compliant",
            quantity: 12
        }
    ]);

    // Setting the useState for totalLeads
    const [totalLeads, setTotalLeads] = useState([
        {
            id: 1,
            name: 'Rakesh Verma',
            description: "I need metal sensor. Is it available now? Please contact me",
            quantity: 120,
            contactDetail: 9876543210
        },
        {
            id: 2, name: 'Ajay Shrivastav',
            description: "I want to purchase the analog sensor. Is it availabel right now? Please contact me",
            quantity: 60,
            contactDetail: 9638527410
        },
        {
            id: 3, name: 'Sachin Sharma',
            description: "I need IR Sensor. Please contact me",
            quantity: 80,
            contactDetail: 9518476320
        }
    ]);

    // Setting the useState for stockData
    const [stockData, setStockData] = useState({ totalStock: 0, soldStock: 0 });

    useEffect(() => {

        // Listen for initial stock data from the server
        socket.on('initialStockData', (data) => {
            setStockData(data);
        });

        // Listen for real-time stock updates from the server
        socket.on('updateStockData', (data) => {
            setStockData(data);
        });

    }, [socket]);

    return (
        <Layout>
            <h2 className='page-title'>E-Commerce Stats</h2>
            <div className="card-container stats">
                <div className="cards-wrapper">
                    <div className="card purple">
                        <div className="img-container">
                            <i className="ri-shopping-cart-2-line"></i>
                        </div>
                        <div className="content">
                            <p>Total Orders</p>
                            <p><strong>{totalOrders.length}</strong></p>
                        </div>
                    </div>
                </div>
                <div className="cards-wrapper">
                    <div className="card red">
                        <div className="img-container">
                            <i className="ri-product-hunt-line"></i>
                        </div>
                        <div className="content">
                            <p>Total Stocks</p>
                            <p><strong>{stockData.totalStock}</strong></p>
                        </div>
                    </div>
                </div>
                <div className="cards-wrapper">
                    <div className="card blue">
                        <div className="img-container">
                            <i className="ri-product-hunt-line"></i>
                        </div>
                        <div className="content">
                            <p>Sold Stocks</p>
                            <p><strong>{stockData.soldStock}</strong></p>
                        </div>
                    </div>
                </div>
                <div className="cards-wrapper">
                    <div className="card green">
                        <div className="img-container">
                            <i className="ri-shopping-cart-2-line"></i>
                        </div>
                        <div className="content">
                            <p>Total Leads</p>
                            <p><strong>{totalLeads.length}</strong></p>
                        </div>
                    </div>
                </div>
                <div className="cards-wrapper">
                    <div className="card black">
                        <div className="img-container">
                            <i className="ri-money-rupee-circle-line"></i>
                        </div>
                        <div className="content">
                            <p>Total Revenue</p>
                            <p><strong>112</strong></p>
                        </div>
                    </div>
                </div>

            </div>
            <hr className='horizontalLine' />
            <div className="orderDetail">
                <div className="wrapper card-border">
                    <div className="header">
                        <div className="content">
                            <h3>Total Orders</h3>
                            <span>A summery of your order</span>
                        </div>
                        <div className="loggout-button">
                            <button className='btn purple'>View All</button>
                        </div>
                    </div>
                    <div className="card-container">
                        {totalOrders.map(order => (
                            <div key={order.id} className="card-wrapper">
                                <div className="card">
                                    <h5>{order.name}</h5>
                                    <p>{order.description}</p>
                                    <p><strong>Quantity:<span className='text-purple'> {order.quantity}</span> pieces</strong></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="wrapper card-border">
                    <div className="header">
                        <div className="content">
                            <h3>Total Leads</h3>
                            <span>A summery of your leads received</span>
                        </div>
                        <div className="loggout-button">
                            <button className='btn purple'>View All</button>
                        </div>
                    </div>
                    <div className="card-container">
                        {totalLeads.map(leads => (
                            <div key={leads.id} className="card-wrapper">
                                <div className="card">
                                    <div className="contact-detail">
                                        <h5>{leads.name}</h5>
                                        <p><strong><span className='text-purple'>Contact Detail:</span> {leads.contactDetail}</strong></p>
                                    </div>
                                    <p>{leads.description}</p>
                                    <p><strong>Quantity:<span className='text-purple'> {leads.quantity}</span> pieces</strong></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard
