import React from 'react';
import {Avatar, List, Row} from 'antd';
import {Link} from 'react-router-dom';

const renderItem = (order) => {
    const isAdmin = true

    return (
            <List.Item key={order.id} className="order-list-item" actions={isAdmin ? [<a>edit</a>, <a>more</a>] : []}>
                <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                    title={<Link to={`/orders/${order.id}`}>{order.id}</Link>}
                    description={
                        <div>
                            <Row>
                                <div style={{float: 'left'}}>Jhonata (Jhow)</div>
                            </Row>
                            <Row style={{float: 'left'}}>
                                12-10-2018
                            </Row>
                        </div>
                    }
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
            bordered
            dataSource={orders || []}
            renderItem={renderItem}
        />
    );
};

export default OrderList;