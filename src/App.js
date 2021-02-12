import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoApp} from "./components/TodoApp";
import {Login} from './components/Login';

class App extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO React App</h1>
                </header>

                <Login/>

                <br/>
                <br/>

                <TodoApp/>
            </div>
        );
    }

}

export default App;
