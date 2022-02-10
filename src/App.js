import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { CartPage, Contacts, Home, LoginPage, ProductsPage, SingleProduct } from "./pages";

// import { Counter } from './features/counter/Counter';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/products" exact>
                    <ProductsPage />
                </Route>
                <Route exact path="/products/:id" children={<SingleProduct />} />
                <Route path="/contacts">
                    <Contacts />
                </Route>
                <Route path="/cart">
                    <CartPage />
                </Route>
                <Route path="/login" exact>
                    <LoginPage />
                </Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
