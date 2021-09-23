import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from "./modules/login/Login";
import RestaurantsList from "./modules/restaurantsList/RestaurantsList";
import Header from "./components/header/Header";
import {connect} from "react-redux";
import PrivateRoute from  "./components/privateRoute/PrivateRoute";

function App(props) {
    const {
        userInfo
    } = props;

    return (
        <>
            {userInfo &&
            <Header/>
            }
            <Router>
                <Switch>
                    <Route exact={true} path="/">
                        {!userInfo &&
                        <Login/>
                        }
                        {userInfo &&
                        <Redirect
                            to={
                                {
                                    pathname: 'home'
                                }
                            }
                        />
                        }
                    </Route>
                    <PrivateRoute path="/home">
                        <RestaurantsList/>
                    </PrivateRoute>
                </Switch>
            </Router>
        </>
    );
}


export default connect(
    store => ({
        userInfo: store.login.userInfo
    }), null
)(App)
