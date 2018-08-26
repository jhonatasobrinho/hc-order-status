import React from 'react';
import { List, Avatar } from 'antd';

const render = (order) => {
    return (
        <List.Item key={order.id} className="order-list-item">
            <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{order.id}</a>}
                description={order.client.name}
            />
            <div>{order.status}</div>
        </List.Item>
    );
};

const OrderList = ({orders}) => {
    if (!orders) {
        console.log('No orders here');
    }
    return (
        <List
            itemLayout="horizontal"
            bordered
            dataSource={orders || []}
            renderItem={render}
        />
    );
};

export default OrderList;