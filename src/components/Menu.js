import React, { Component } from 'react';

import '../static/menu.css'
import Footer from './Footer';

import pizza1 from '../images/menu/pizza1.jpg';
import pizza2 from '../images/menu/pizza2.jpg';
import pizza3 from '../images/menu/pizza3.jpg';
import pizza4 from '../images/menu/pizza4.jpg';
import pizza5 from '../images/menu/pizza5.jpg';
import pizza6 from '../images/menu/pizza6.jpg';
import juice from '../images/menu/juice.jpg';
import salad from '../images/menu/salad.jpg';


class Menu extends Component {
    render() {
        return(
            <div className="menu-wrap">
                <h1>Here is what you can expect when visiting us!</h1>
                <div className="menu">
                    <div className="menu-items">
                        <div className="menu-item">
                            <img src={pizza1} alt='pizza1'/>
                            <h2>Mushroom</h2>
                            <p>The BEST pizza for all cheese and mushroom lovers! Loaded with 2 types of cheese, olives, ham and garlic herb sautéed mushrooms!!</p>
                            <h3>11.99$</h3>
                        </div>
                        <div className="menu-item">
                            <img src={pizza2} alt='pizza2'/>
                            <h2>Shrimp</h2>
                            <p>A TASTY shrimp pizza in a garlic butter sauce served with asiago cheese!</p>
                            <h3>15.55$</h3>
                        </div>
                        <div className="menu-item">
                            <img src={pizza3} alt='pizza3'/>
                            <h2>Pineapple</h2>
                            <p>Combining pineapple, cheese, and ham, this pizza is sweet, salty, and cheesy all in 1 bite. It’s just the BEST pizza variety!</p>
                            <h3>10.35$</h3>
                        </div>
                        <div className="menu-item">
                            <img src={pizza4} alt='pizza4'/>
                            <h2>Ground Beef</h2>
                            <p>AMAZINGLY full of flavor and taste this ground beef pizza is sure to satisfy any customer!</p>
                            <h3>11.05$</h3>
                        </div>
                        <div className="menu-item">
                            <img src={pizza5} alt='pizza5'/>
                            <h2>Chicago Style</h2>
                            <p>Classic Chicago Deep Dish pizza is served in a deep pan with loads of cheese and baby spinach.</p>
                            <h3>13.05$</h3>
                        </div>
                        <div className="menu-item">
                            <img src={pizza6} alt='pizza6'/>
                            <h2>Cheese</h2>
                            <p>Everyone loves DELICIOUS Italian pizza and this is exactly what it is, it will please even most picky mouths!</p>
                            <h3>10.05$</h3>
                        </div>
                        <div className="menu-item">
                            <img src={juice} alt='juice'/>
                            <h2>Juice</h2>
                            <p>Comes in a variety of flavours, homemade and store-bought!</p>
                            <h3>3.00$</h3>
                        </div>
                        <div className="menu-item">
                            <img src={salad} alt='salad'/>
                            <h2>Salads</h2>
                            <p> We also offer a bunch of different salads for you to enjoy!</p>
                            <h3>5.00$ - 8.00$</h3>
                        </div>

                        <div className="space"></div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Menu;