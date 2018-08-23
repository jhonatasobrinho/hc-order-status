import React from 'react';
import {List, ListItem} from 'react-onsenui';

const renderRow = (order) => {
    return (
        <ListItem key={order.id}>{order.id} - {order.client.name} - {order.status}</ListItem>
    );
};

const OrderList = ({orders}) => {
    if (!orders) {
        console.log('No orders here');
    }
    return (
        <List
            dataSource={orders || []}
            renderRow={renderRow}
        />
    );
};

export default OrderList;