import React, {useEffect} from 'react'
import {connect} from 'react-redux'

import * as actions from '../../../store/actions'

const Logout = ({logout}) => {
    console.log('logged out');
//using hook (component did mount)
    useEffect(() => {
        logout();//executed when component mounts
    }, [logout]);
    return null;
};

const mapStateToProps = {
    logout: actions.signOut


};

export default connect(null, mapStateToProps)(Logout);
