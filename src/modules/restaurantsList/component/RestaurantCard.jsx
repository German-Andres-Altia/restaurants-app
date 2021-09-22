import './restaurantCard.css';
import React from "react";


export const RestaurantCard = (props) => {


    const {
        id,
        menu,
        name,
        phone,
        price,
        onlineEnabled
    } = props.restaurant;
    return (
        <>
            <div className="restaurant-card">
                <div>
                    <img alt="carrousel 1"/>
                    <img alt="carrousel 2"/>
                    <img alt="carrousel 3"/>
                </div>
                <form>
                    <div className="restaurant-info">
                        <div className="menu">
                            {menu.map((item, i) =>
                                <div key={i}>
                                    <h2>{item.key} </h2>
                                    <ul>
                                        {item.items.map((item, i) =>
                                            <li key={i}>
                                                <input type="checkbox"/>
                                                <span>{item}</span>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="info">
                            <h2>{name} <span className="precio">{price}€</span></h2>
                            <h3>{phone}</h3>
                            {onlineEnabled &&
                            <button className="pedir">Pedir</button>
                            }
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}
