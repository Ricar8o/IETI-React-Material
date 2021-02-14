import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoApp} from "./components/TodoApp";
import {Login} from './components/Login';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

const LoginView = () => (
    <Login/>
);

const TodoAppView = () => (
    <TodoApp/>
);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false };
    }


    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h1 className="App-title">TODO React App</h1>
                    </header>

                    <br/>
                    <br/>

                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/todo">Todo</Link></li>
                    </ul>

                    <div>
                        <Route exact path="/" component={LoginView}/>
                        
                        { this.state.isLoggedIn && 
                        <Route path="/todo" component={TodoAppView}/>
                        }
                    </div>
                </div>
            </Router>
        );
    }

}

export default App;
