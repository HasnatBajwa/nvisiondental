import React from 'react'
import CreateOrder from '../../Modules/CreareOrder/CreateOrder'
import Header from '../../Components/Header/Header'
import './OrdersStyles.css'
const Orders = () => {
    return (
        <>
            <Header />
            <div className="orders-container">
                <CreateOrder />
            </div>

        </>
    )
}

export default Orders