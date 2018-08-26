import React from 'react'
import OrderList from '../components/OrderList';
import {Divider, Input} from 'antd';

const OrdersSearchPage = ({orders}) => {
    return (
        <div>
            <Input.Search
                placeholder="Order ID"
                onSearch={value => console.log(value)}
                style={{ width: 600 }}
            />
            <Divider />
            <OrderList orders={orders} />
        </div>
    )
};

export default OrdersSearchPage;