import React from 'react';
import './styles/styles.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Layout from './components/Layout';

import Home from './webpages/home';
import Test from './webpages/test';

const App: React.FC = () => (
    <div className="wrapper">
        <Router>
            <Layout>
                <Route exact path="/" component={Home}></Route>
                <Route path="/home" component={Home}></Route>
                <Route path="/test" component={Test}></Route>
            </Layout>
        </Router>
    </div>
);

export default App;
