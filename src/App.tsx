import React from 'react';
import logo from './react.png';
import './App.css';
import {Header} from "./Main/Header";
import {MyComponent} from "./Main/MyComponent";
import {Footer} from "./Main/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <MyComponent/>
            <Footer/>
        </div>
    );
}

export default App;
