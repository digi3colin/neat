import React from "react";
import FB from "fb";

export default class ButtonFacebookLogin extends React.Component{
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onConnectFail = this.onConnectFail.bind(this);
    this.onConnected = this.onConnected.bind(this);

    window.fbAsyncInit = () => FB.init({
      appId      : props.appId,
      xfbml      : false,
      version    : 'v3.0'
    });

    ((d, s, id) => {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  }

  onClick(e){
    e.preventDefault();

    FB.login(()=>{
      //after login, check status
      FB.getLoginStatus((response)=>{
        this.statusChangeCallback(response);
      });
    }, {scope: 'email'});

    if(!this.props.onClick)return;
    this.props.onClick(e);
  }

  statusChangeCallback(response) {
    if (response.status === 'connected') {
      this.prepareSignup(response.authResponse.userID, response.authResponse.accessToken)
    } else if (response.status === 'not_authorized') {
      this.onConnectFail(response);
    } else {
      this.onConnectFail(response);
    }
  }

  onConnectFail(response){
    this.props.onConnectFail(response);
  }

  onConnected(id, token, name){
    this.props.onConnected({id:id, token:token, name:name});
  }

  prepareSignup(id, token) {
    FB.api('/me', (response)=>{
      this.onConnected(id, token, response.name);
    });
  }

  render(){
    return (
      <div className={"ui button icon facebook" + (this.props.isLoading?" loading":"")} onClick={this.onClick}><a href="#"><i className="facebook icon"/>facebook 登入</a></div>
    );
  }
}