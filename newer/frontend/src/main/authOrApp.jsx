import '../common/template/dependencies.js';
import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import App from './App.jsx';
import Auth from '../auth/auth.jsx';
import {validateToken} from '../auth/authActions.js';

class AuthOrApp extends Component{
    
    componentWillMount(){
        if(this.props.auth.user){
            this.props.validateToken(this.props.auth.user.token);
        }
    }

    render(){

        const {user,validToken} = this.props.auth;
        
        if(user && validateToken){
        
            axios.defaults.headers.common['Authorization'] = user.token;
            return <App>{this.props.children}</App>
        
        } else if(!user && !validToken){
            return <Auth/>
        } else{
            return false
        }
    }
}

const mapStateToProps = state => ({auth:state.auth});
const mapDispathToProps = dispatch => bindActionCreators({validateToken}, dispatch);
export default connect(mapStateToProps,mapDispathToProps)(AuthOrApp);
