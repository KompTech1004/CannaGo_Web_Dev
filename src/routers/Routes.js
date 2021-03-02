import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import LandingScreen from "../pages/LandingScreen";
import LoginScreen from "../pages/LoginScreen";
import SignupScreen from "../pages/SignupScreen";
import ForgotScreen from "../pages/ForgotScreen";
import StoreOnlineScreen from '../pages/StoreOnlineScreen'
import SelectedItemScreen from '../pages/SelectedItemScreen'
import EmptyCartScreen from '../pages/EmptyCartScreen'
import CartScreen from '../pages/CartScreen'
import CheckoutScreen from '../pages/CheckoutScreen'
import OrderStatusScreen from '../pages/OrderStatusScreen';
import OrderExperience from '../pages/OrderExperience';
import ProfileScreen from '../pages/ProfileScreen'
import ProfileInformationScreen from '../pages/ProfileInformationScreen'
import OrderHistoryScreen from '../pages/OrderHistoryScreen';

import DispensaryLandingScreen from '../pages/DispensaryLandingScreen';
import ShopDispensaryScreen from '../pages/ShopDispensaryScreen';
import DispensaryInfoScreen from '../pages/DispensaryInfoScreen';
import StoreAddScreen from '../pages/StoreAddScreen';
import OrderConfirmScreen from '../pages/OrderConfirmScreen';
import HourSetScreen from '../pages/HourSetScreen';

import DriverProfileInfoScreen from '../pages/DriverProfileInfoScreen';
import DriverOrderStatusScreen from '../pages/DriverOrderStatusScreen';

export default function MyRouts() {
    return (
        <Router >
            <Switch>
                <Route exact path="/" component={LandingScreen}/>
                <Route path="/login" component={LoginScreen}/>
                <Route path="/signup" component={SignupScreen}/>
                <Route path="/forgot" component={ForgotScreen}/>
                <Route path="/storeonline" component={StoreOnlineScreen}/>
                <Route path="/selecteditem" component={SelectedItemScreen}/>
                <Route path="/emptycart" component={EmptyCartScreen}/>
                <Route path="/cart" component={CartScreen}/>
                <Route path="/checkout" component={CheckoutScreen}/>
                <Route path="/orderstatus" component={OrderStatusScreen}/>
                <Route path="/orderexperience" component={OrderExperience}/>
                <Route path="/profile" component={ProfileScreen}/>
                <Route path="/profileinfo" component={ProfileInformationScreen}/>
                <Route path="/orderhistory" component={OrderHistoryScreen}/>

                <Route path="/dispensarylanding" component={DispensaryLandingScreen}/>
                <Route path="/shopdispensary" component={ShopDispensaryScreen}/>
                <Route path="/dispensaryinfo" component={DispensaryInfoScreen}/>
                <Route path="/storeadd" component={StoreAddScreen}/>
                <Route path="/updatestore" component={StoreAddScreen}/>
                <Route path="/orderconfirm" component={OrderConfirmScreen}/>
                <Route path="/hourset" component={HourSetScreen}/>

                <Route path="/driverprofileinfo" component={DriverProfileInfoScreen}/>
                <Route path="/driverorderstatus" component={DriverOrderStatusScreen}/>
            </Switch>
        </Router>
    );
}
