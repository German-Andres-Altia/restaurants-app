import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from "./modules/login/Login";
import RestaurantsList from "./modules/restaurantsList/RestaurantsList";
import Header from "./components/header/Header";
import {connect} from "react-redux";

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
                    {userInfo &&
                    <Route path="/home">
                        <RestaurantsList/>
                    </Route>
                    }
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
