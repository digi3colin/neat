import React from 'react';

import Select from './Select';
import InputPassword from './InputPassword';
import ForgotPassword from './ForgotPassword';
import Register from './Register';
import ButtonLogout from '../uiElements/ButtonLogout';
import Carousel from '../Carousel/Carousel';

import {connect} from "react-redux";

class HybridLogin extends React.Component{
  constructor(props){
    super(props);

    this.onSignedIn      = this.onSignedIn.bind(this);
    this.onSignedOut     = this.onSignedOut.bind(this);
    this.onPageChange    = this.onPageChange.bind(this);
    this.onInviteSuccess = this.onInviteSuccess.bind(this);
    this.onForgotSent    = this.onForgotSent.bind(this);
  }

  onSignedIn(data){
    this.props.onSignedIn(data);
  }

  onSignedOut(data){
    this.props.onSignedOut(data);
  }

  onPageChange(page){
    this.props.onPageChange(page);
  }

  onInviteSuccess(data){
    this.props.onInviteSuccess(data);
  }

  onForgotSent(data){
    this.props.onForgotSent(data);
  }

  render(){
    const signoutPanel =
      (<div className="multi-page-form">
        <ButtonLogout action="user/logout" onSignedOut={this.onSignedOut}/>
      </div>);

    const loggedInPanel =
      (<div className="multi-page-form">
        <Carousel         onPageChange={this.onPageChange} page={this.props.page}>
          <Select         onPageChange={this.onPageChange} action="user/login_submit" onSignedIn={this.onSignedIn}/>
          <InputPassword  onPageChange={this.onPageChange} action="user/login_submit" onSignedIn={this.onSignedIn}/>
          <ForgotPassword action="user/reset_password_submit" step={this.props.isForgotPasswordSent ? 2 : 1} onResultSuccess={this.onForgotSent}/>
          <Register       action="contributor/invite_submit" isInvited={this.props.isInvited} onResultSuccess={this.onInviteSuccess}/>
        </Carousel>
      </div>);

    return this.props.isLoggedIn ? signoutPanel : loggedInPanel;
  }
}

export default connect(
  state =>{
    return {
      page: state.page,
      isLoggedIn: state.isLoggedIn,
      isInvited: state.isInvited,
      isForgotPasswordSent: state.isForgotPasswordSent,
    }
  },

  dispatch => {
    return {
      onSignedIn : (data) => {
        if(data.status == 'success'){
          dispatch({type:"CHANGE_LOGIN_STATE", value: true });
          dispatch({type:"UPDATE_USER", value: data});
        }
      },
      onSignedOut : (data) => {
        dispatch({type:"CHANGE_PAGE", value:1});
        dispatch({type:"CHANGE_LOGIN_STATE", value:(data.status != 'success')});
        dispatch({type:"SET_USER_NAME", value: null});
        dispatch({type:"SET_NICK_NAME", value: null});
        dispatch({type:"SET_CONTRIBUTOR_KEY", value: null});
      },

      onPageChange : (page) => {
        dispatch({type: "CHANGE_PAGE", value: page});
        dispatch({type: "CHANGE_INVITE_SUCCESS", value: false});
        dispatch({type: "CHANGE_FORGOT_SENT", value: false});
      },

      onInviteSuccess : (data) => {
        dispatch({type: "CHANGE_INVITE_SUCCESS", value: data.status});
      },

      onForgotSent : (data) => {
        dispatch({type: "CHANGE_FORGOT_SENT", value: data.status});
      }
    }
  }
)(HybridLogin);