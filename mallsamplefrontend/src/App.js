import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/contact" component={ProductList} />
          <Route path="/dashboard" component={ProductList} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
