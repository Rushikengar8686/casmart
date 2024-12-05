import React from 'react';
import Hero from '../Blogs/Hero';
import Service from '../Blogs/Service';
import Category from '../Blogs/Category';
import Product from '../Blogs/Product';
import Blog from '../Blogs/Blog';
import Newletter from '../Blogs/Newletter';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Service></Service>
            <Category></Category>
            <Product></Product>
            <Blog></Blog>
            <Newletter></Newletter>
            
        </div>
    );
};

export default Home;