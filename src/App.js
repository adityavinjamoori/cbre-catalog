import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Order from "./components/Order/Order";
import Order2 from "./components/Order2/Order2";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import SubItems from "./components/Order/subItems"
export default function App() {
  return (
    <Router>
      <div>
        <nav className="headerNav">
          <div className="cbreLogo"></div>
          <ul>
            <li>
              <NavLink  to="/Order">Option 1</NavLink>
            </li>
            <li>
              <NavLink to="/Order2">Option 2</NavLink>
            </li>
            <li>
              <NavLink to="/cart">cart</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Order">
            <Order />
          </Route>
          <Route path="/Order2">
            <Order2 />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/addItems">
            <SubItems />
          </Route>
          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}