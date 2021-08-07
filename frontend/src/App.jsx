import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Container } from "react-bootstrap"
import ScrollIntoView from "./components/ScrollIntoView"
import Header from "./components/Header"
import Footer from "./components/Footer.jsx"
import LandingScreen from "./screens/LandingScreen"
import SearchScreen from "./screens/SearchScreen"
import ProductScreen from "./screens/ProductScreen"
import CartScreen from "./screens/CartScreen"
import LoginScreen from "./screens/LoginScreen"
import RegisterScreen from "./screens/RegisterScreen"
import ProfileScreen from "./screens/ProfileScreen"
import ShippingScreen from "./screens/ShippingScreen"
import PaymentScreen from "./screens/PaymentScreen"
import PlaceOrderScreen from "./screens/PlaceOrderScreen"
import OrderScreen from "./screens/OrderScreen"
import AdminUsersScreen from "./screens/AdminUsersScreen"
import UserEditScreen from "./screens/UserEditScreen"
import ProductListScreen from "./screens/ProductListScreen"
import ProductEditScreen from "./screens/ProductEditScreen"
import OrderListScreen from "./screens/OrderListScreen"
import PagesListScreen from "./screens/PagesListScreen"

const App = () => {
  return (
    <Router>
      <Header />
      <main id="main">
        <ScrollIntoView>
          <Switch>
            <Route path="/" component={LandingScreen} exact />
            <Container className="body">
              <Route path="/login" component={LoginScreen} />
              <Route path="/register" component={RegisterScreen} exact />
              <Route path="/profile" component={ProfileScreen} />
              <Route path="/product/:id" component={ProductScreen} />
              <Route
                path="/admin/products/:id/edit"
                component={ProductEditScreen}
              />
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/page/:pageNumber" component={SearchScreen} exact />
              <Route
                path="/search/:keyword/page/:pageNumber"
                component={SearchScreen}
              />
              <Route path="/shipping" component={ShippingScreen} />
              <Route path="/payment" component={PaymentScreen} />
              <Route path="/placeorder" component={PlaceOrderScreen} />
              <Route path="/order/:id" component={OrderScreen} />
              <Route path="/admin/orders" component={OrderListScreen} />
              <Route path="/admin/userlist" component={AdminUsersScreen} />
              <Route path="/admin/user/:id/edit" component={UserEditScreen} />
              <Route
                path="/admin/productlist"
                component={ProductListScreen}
                exact
              />
              <Route
                path="/admin/productlist/:pageNumber"
                component={ProductListScreen}
                exact
              />
              <Route path="/search/:keyword" component={SearchScreen} exact />
              <Route
                path="/search/:type/:keyword"
                component={SearchScreen}
                exact
              />
              <Route path="/admin/pages/" component={PagesListScreen} exact />
            </Container>
          </Switch>
        </ScrollIntoView>
      </main>
      <Footer />
    </Router>
  )
}

export default App
