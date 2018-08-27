import React from 'react'
import OrderList from '../components/OrderList';
import {Divider, Input} from 'antd';

const OrdersSearchPage = () => {
    const orders = [
        {
            id: '1812908109280917980-abcq1-1729871',
            status: 'ON_QUEUE',
            client: {
                id: 1,
                name: 'Jhonata',
                nickname: 'Jhow'
            }
        },
        {
            id: 'haushuhq1111-abcq1-1729871',
            status: 'WAITING_STOCK',
            client: {
                id: 2,
                name: 'Joao',
                nickname: 'Jo'
            }
        }
    ];

    return (
        <div>
            <Input.Search
                placeholder="Order ID"
                onSearch={value => console.log(value)}
            />
            {orders &&
            <div>
                <Divider/>
                <OrderList orders={orders || []}/>
            </div>
            }
        </div>
    )
};

export default OrdersSearchPage;