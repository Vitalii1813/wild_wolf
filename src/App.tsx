import React from 'react';
import './App.css';
import {Header} from "./Main/Header";
import {MyComponent} from "./Main/MyComponent";
import {Footer} from "./Main/Footer";
import Main from "./Main";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className="App">
           <Main></Main>
        </div>
    // <Router>
    //     <Switch>
    //         <Route path="/" exact component={Home} />
    //         <Route path="/about" component={About} />
    //     </Switch>
    // </Router>
    );
}

export default App;
