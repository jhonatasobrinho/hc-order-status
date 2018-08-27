import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import IdentificationPage from './pages/IdentificationPage';
import OrdersSearchPage from "./pages/OrdersSearchPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import {Col} from 'antd';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">Welcome to React</h1>
                    </header>

                    <div className="App-body">
                        <br/>
                        <Col xs={24} md={{ span: 14, push: 5 }}>
                            <Route exact path="/" component={IdentificationPage} />
                            <Route exact path="/orders" component={OrdersSearchPage} />
                            <Route path="/orders/:orderId" component={OrderDetailPage} />
                        </Col>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
