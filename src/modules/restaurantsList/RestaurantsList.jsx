import './restaurantslist.css';
import {getRestaurantes} from "./actions";
import React, {useEffect} from "react";
import {RestaurantCard} from "./component/RestaurantCard";
import {connect} from "react-redux";

function RestaurantsList(props) {

    const {
        restaurantes,
        loading,
        getRestaurantes
    } = props

    useEffect(() => {
        getRestaurantes()
    }, []);

    const Items = React.memo(() => <>
        {restaurantes.map(menuItem =>
            <RestaurantCard restaurant={menuItem} key={menuItem.id}/>
        )}
    </>, [restaurantes]);

    return (
        <>
            {loading &&
            <div className="loading">Cargando...</div>
            }
            {!loading &&
            <button onClick={() => getRestaurantes()}>Reload</button>
            }
            <div className="restaurants">
                {!loading &&
                <Items/>
                }
            </div>
        </>
    );
}


export default connect(
    store => ({
        restaurantes: store.menus.restaurantes,
        loading: store.menus.loading,
    }),
    dispatch => ({
            getRestaurantes: () => dispatch(getRestaurantes())
        })
    )(RestaurantsList);
