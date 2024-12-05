import React from 'react';
import categoryOne from "../Assets/category-1.jpg"
import categoryTwo from "../Assets/category-2.jpg"
import categoryThree from "../Assets/category-3.jpg"
import categoryFour from "../Assets/category-4.jpg"
import categoryFive from "../Assets/category-5.jpg"
import categorySix from "../Assets/category-6.jpg"

const Category = () => {
    return (
        <div>
             <section className="section category">
                <div className="container">

                    <ul className="category-list">

                        <li className="category-item">
                            <figure className="category-banner">
                                <img src={categoryOne} alt="Sunglass & eye" loading="lazy" width="510" height="600" className="w-100"/>
                            </figure>

                            <a href="#" className="btn btn-secondary">Sunglass & Eye</a>
                        </li>

                        <li className="category-item">
                            <figure className="category-banner">
                                <img src={categoryTwo} alt="Active & outdoor" loading="lazy" width="510" height="600" className="w-100"/>
                            </figure>

                            <a href="#" className="btn btn-secondary">Active & Outdoor</a>
                        </li>

                        <li className="category-item">
                            <figure className="category-banner">
                                <img src={categoryThree} alt="Winter wear" loading="lazy" width="510" height="600" className="w-100"/>
                            </figure>

                            <a href="#" className="btn btn-secondary">Winter Wear</a>
                        </li>

                        <li className="category-item">
                            <figure className="category-banner">
                                <img src={categoryFour} alt="Exclusive footwear" loading="lazy" width="510" height="600" className="w-100"/>
                            </figure>

                            <a href="#" className="btn btn-secondary">Exclusive Footwear</a>
                        </li>

                        <li className="category-item">
                            <figure className="category-banner">
                                <img src={categoryFive} alt="Jewelry" loading="lazy" width="510" height="600" className="w-100"/>
                            </figure>

                            <a href="#" className="btn btn-secondary">Jewelry</a>
                        </li>

                        <li className="category-item">
                            <figure className="category-banner">
                                <img src={categorySix} alt="Sports cap" loading="lazy" width="510" height="600" className="w-100"/>
                            </figure>

                            <a href="#" className="btn btn-secondary">Sports Cap</a>
                        </li>

                    </ul>

                </div>
            </section>
            
        </div>
    );
};

export default Category;