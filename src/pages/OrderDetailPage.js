import React from 'react';
import {Avatar, Card, Icon, Row} from 'antd';

const {Meta} = Card;

const OrderDetailPage = ({match}) => {
    const {orderId} = match.params;
    return (
        <Card
            className="order-detail"
            actions={[<Icon type="edit"/>, <Icon type="minus"/>]}
        >
            <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                title={orderId}
                description={
                    <div>
                        <Row>
                            <div style={{float: 'left'}}>Jhonata (Jhow)</div>
                            <div style={{float: 'right'}}><b>ON_QUEUE</b></div>
                        </Row>
                        <Row style={{float: 'left'}}>
                            12-10-2018
                        </Row>
                    </div>}
            />
        </Card>

    );
};

export default OrderDetailPage;