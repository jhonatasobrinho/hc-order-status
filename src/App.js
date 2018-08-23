import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {SearchInput} from 'react-onsenui';
import OrderList from './components/OrderList';

class App extends Component {
    constructor(props, args) {
        super(props, args);

        this.state = {
            text: '',
            orders: [
                {
                    id: 1,
                    status: 'ON_QUEUE',
                    client: {
                        id: 1,
                        name: 'Jhonata',
                        nickname: 'Jhow'
                    }
                }
            ]
        }
    }

    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div style={{ textAlign: 'center' }}>
                    <br/>
                    <SearchInput
                        value={this.state.text}
                        onChange={(event) => {
                            this.setState({text: event.target.value})
                        }}
                        modifier='material'
                        placeholder='Order ID'
                    />
                    <OrderList orders={this.state.orders}
                    />
                </div>
            </div>
        );
    }
}

export default App;
