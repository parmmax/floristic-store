import React from 'react';
import {Route} from "react-router-dom";
import './assets/typography/_fonts.scss'
import './assets/reset/reset.scss'
import './DefaultLayout.scss'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ProductsContainer from "./containers/ProductsContainer";
import News from "./components/News/News";
import Contacts from "./components/Contacts/Contacts";
import NotFound from "./components/NotFound/Notfound";


const DefaultLayout = () => {
    return (
        <div className="defaultLayout">
            <Header />
            <Route exact path='/'
                   render={()=><Home />}/>
            <Route path='/about'
                   render={()=><About />}/>
            <Route path='/products'
                   render={()=><ProductsContainer />}/>
            <Route path='/news'
                   render={()=><News />}/>
            <Route path='/contacts'
                   render={()=><Contacts />}/>
            <Route path='*'
                   render={()=><NotFound />}/>
            <Footer />
        </div>
    )
};

export default DefaultLayout;