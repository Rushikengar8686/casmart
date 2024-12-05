import React from 'react';
import serviceIconOne  from "../Assets/service-icon-1.svg"
import serviceIconTwo  from "../Assets/service-icon-2.svg"
import serviceIconThrre  from "../Assets/service-icon-3.svg"
import serviceIconFour  from "../Assets/service-icon-4.svg"

const Service = () => {
    return (
        <div>
            <section className="service">
                <div className="container">

                    <ul className="service-list">

                        <li className="service-item">
                            <div className="service-item-icon">
                                <img src={serviceIconOne} alt="Service icon"/>
                            </div>

                            <div className="service-content">
                                <p className="service-item-title">Free Shipping</p>

                                <p className="service-item-text">On All Order Over $599</p>
                            </div>
                        </li>

                        <li className="service-item">
                            <div className="service-item-icon">
                                <img src={serviceIconTwo} alt="Service icon"/>
                            </div>

                            <div className="service-content">
                                <p className="service-item-title">Easy Returns</p>

                                <p className="service-item-text">30 Day Returns Policy</p>
                            </div>
                        </li>

                        <li className="service-item">
                            <div className="service-item-icon">
                                <img src={serviceIconThrre} alt="Service icon"/>
                            </div>

                            <div className="service-content">
                                <p className="service-item-title">Secure Payment</p>

                                <p className="service-item-text">100% Secure Gaurantee</p>
                            </div>
                        </li>

                        <li className="service-item">
                            <div className="service-item-icon">
                                <img src={serviceIconFour} alt="Service icon"/>
                            </div>

                            <div className="service-content">
                                <p className="service-item-title">Special Support</p>

                                <p className="service-item-text">24/7 Dedicated Support</p>
                            </div>
                        </li>

                    </ul>

                </div>
            </section>
            
        </div>
    );
};

export default Service;