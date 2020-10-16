import React, { Component } from 'react';

import '../static/home.css'
import peaceofmind from '../images/peaceofmind.jpg';



class Home extends Component {
    render() {
        return(
            <div className="home-wrap">
                <div className="header">
                    <img src={peaceofmind} alt='pizzeria' />
                    <div className="home">
                        <h1>Go to the Menu page to view our items or visit the contact page to call us and order a pizza or see where you can find us.</h1>
                    </div>
                    <div className="bar"></div>
                </div>
            </div>
        )
    }
}

export default Home;