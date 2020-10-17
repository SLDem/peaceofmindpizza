import React, { Component } from 'react';

import '../static/contact.css'
import Footer from './Footer';

import chef1 from '../images/chef1.jpg';
import chef2 from '../images/chef2.jpg';
import chef3 from '../images/chef3.jpg';

class Contact extends Component {
    render() {
        return(
            <div className="contact-wrap">
                <div className="contact">
                    <div className="chefs-wrap">
                        <div className="chefs">
                            <div className="chef">
                                <div className="general-info">
                                    <img src={chef2} alt="chef2" />
                                    <div className="chef-info">
                                        <h2>Chef Robin</h2>
                                        <br />
                                        <p>Robin is the Chef and the founder of "Peace of Mind Pizza"</p>
                                    </div>
                                </div>
                                <div className="phone">Years of experience: 5</div>
                            </div>
                            <div className="chef">
                                <div className="general-info">
                                    <img src={chef1} alt="chef1" />
                                    <div className="chef-info">
                                        <h2>Su-Chef George</h2>
                                        <br />
                                        <p>George has been working with us for a wile now and is no doubt one of the best cooks we ever worked with.</p>
                                    </div>
                                </div>
                                <div className="phone">Years of experience: 7</div>
                            </div>
                            <div className="chef">
                                <div className="general-info">
                                    <img src={chef3} alt="chef3" />
                                    <div className="chef-info">
                                        <h2>Su-Chef Brian</h2>
                                        <br />
                                        <p>Brian </p>
                                    </div>
                                </div>
                                <div className="phone">Years of experience: 10</div>
                            </div>
                        </div>
                        <div className="contacts">
                            <h2>You can call us any time at 454-689-5545</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;