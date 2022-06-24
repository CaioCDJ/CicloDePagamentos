import React from 'react';
import {HashRouter} from 'react-router-dom';

import Header from '../common/template/Header';
import SideBar from '../common/template/sideBar';
import Footer from '../common/template/Footer';
import Routes from './routes';
import Messages from '../common/msg/message.jsx';

export default props => (
  <HashRouter>
    <div className="wrapper">
        <Header></Header>
        <SideBar/>
        <div className="content-wrapper">
          <Routes/>
        </div>
        <Footer/>
        <Messages />
    </div>
  </HashRouter>
);
