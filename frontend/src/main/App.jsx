import '../common/template/dependencies';
import React from 'react';

import Header from '../common/template/Header';
import SideBar from '../common/template/sideBar';
import Footer from '../common/template/Footer';
import Routes from './routes';

export default props => (

    <div className="wrapper">
        <Header></Header>
        <SideBar/>
        <div className="content-wrapper">
            <Routes/>
        </div>
        <Footer/>
    </div>
);
