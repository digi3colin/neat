import React from 'react';

import InputPassword from '../HybridLogin/InputPassword';
import ForgotPassword from '../HybridLogin/ForgotPassword';
import ButtonLogout from '../uiElements/ButtonLogout';
import Carousel from '../Carousel/Carousel';
import FacebookLogin from "./FacebookLogin";

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isForgotPasswordSent: false,
      page:1
    };

    this.onSignedIn      = this.onSignedIn.bind(this);
    this.onSignedOut     = this.onSignedOut.bind(this);
    this.onPageChange    = this.onPageChange.bind(this);
    this.onForgotSuccess = this.onForgotSuccess.bind(this);
  }

  onSignedIn(data){
    this.props.onSignedIn(data);
  }

  onSignedOut(data){
    this.props.onSignedOut(data);
  }

  onPageChange(page){
    this.setState({
      page:page,
      isForgotPasswordSent: false,
    });
  }

  onForgotSuccess(){
    this.setState({isForgotPasswordSent: true})
  }

  render(){
    const firstTab = (this.props.loginMethod == "facebook")?
      (<FacebookLogin action="user/login_submit" onSignedIn={this.onSignedIn}/>) :
      (<InputPassword  onPageChange={this.onPageChange} action="user/login_submit" onSignedIn={this.onSignedIn} defaultEmail={this.props.defaultEmail}/>);

    const signoutPanel =
      (<div className="multi-page-form">
        <ButtonLogout action="user/logout" onSignedOut={this.onSignedOut}/>
      </div>);

    const loggedInPanel =
      (<div className="multi-page-form">
        <Carousel         onPageChange={this.onPageChange} page={this.state.page}>
          {firstTab}
          <div>.</div>
          <ForgotPassword action="user/reset_password_submit" step={this.state.isForgotPasswordSent ? 2 : 1} onResultSuccess={this.onForgotSuccess}/>
        </Carousel>
      </div>);

    return this.props.isLoggedIn ? signoutPanel : loggedInPanel;
  }
}