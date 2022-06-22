import '../common/template/dependencies';
import React from 'react';

import Header from '../common/template/Header';
import SideBar from '../common/template/sideBar';
import Footer from '../common/template/Footer';
import Routes from './routes';
import Messages from '../common/msg/message.jsx';

export default props => (

    <div className="wrapper">
        <Header></Header>
        <SideBar/>
        <div className="content-wrapper">
            {props.children}
        </div>
        <Footer/>
        <Messages />
    </div>
);
