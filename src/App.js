import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import OrdersSearchPage from './pages/OrdersSearchPage';
import IdentificationPage from './pages/IdentificationPage';


class App extends Component {
    constructor(props, args) {
        super(props, args);

        this.state = {
            text: '',
            orders: [
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

                <div className="App-body">
                    <br />
                    <IdentificationPage />
                </div>
            </div>
        );
    }
}

export default App;
