import './restaurantslist.css';
import {getRestaurantes} from "./actions";
import React, {useEffect, useRef} from "react";
import {RestaurantCard} from "./component/RestaurantCard";
import {connect} from "react-redux";

const LIMIT_PER_PAGE = 20;

function RestaurantsList(props) {

    const {
        restaurantes,
        loading,
        getRestaurantes
    } = props

    useEffect(() => {
        getRestaurantes(0, LIMIT_PER_PAGE)
    }, []);

    const restaurantsContainer = useRef(null);
    if(restaurantsContainer.current){
        restaurantsContainer.current.onscroll = () => {
            const totalHeight =  restaurantsContainer.current.
            if()
            getRestaurantes((restaurantes.start + 1) * restaurantes.limit, restaurantes.limit)
        }
    }

    const Items = React.memo(() => <>
        {restaurantes.results.map(menuItem =>
            <RestaurantCard restaurant={menuItem} key={menuItem.id}/>
        )}
    </>, [restaurantes]);

    return (
        <>
            {loading &&
            <div className="loading">Cargando...</div>
            }
            <div className="restaurants" ref={restaurantsContainer}>
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
            getRestaurantes: (start, limit) => dispatch(getRestaurantes(start, limit))
        })
    )(RestaurantsList);
