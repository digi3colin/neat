/**
 * Created by colinleung on 20/4/2017.
 */

import React from 'react';
import PageControl from '../Carousel/PageControl';
import ButtonFacebookLogin from '../uiElements/ButtonFacebookLogin';
import Form from "../uiElements/Form";
import ErrorMessage from "../uiElements/ErrorMessage"

export default class FacebookLogin extends Form {
  constructor(props){
    super(props);
    this.onFacebookConnectStart = this.onFacebookConnectStart.bind(this);
    this.onFacebookConnect      = this.onFacebookConnect.bind(this);
    this.onFacebookConnectFail  = this.onFacebookConnectFail.bind(this);
    this.onSignedIn             = this.onSignedIn.bind(this);
  }

  onResult(data){
    super.onResult(data);
    this.onSignedIn(data);
  }

  onSignedIn(data){
    this.props.onSignedIn(data);
  }

  onFacebookConnectStart(e){
    this.setState({isLoading:true});
  }

  onFacebookConnect(response){
    let postData = new FormData();
    postData.append('code',    this.props.code);
    postData.append('fbid',    response.id);
    postData.append('fbtoken', response.token);
    postData.append('fbname',  response.name);

    this.post(postData);
  }

  onFacebookConnectFail(response){
    this.setState({isLoading:false});
  }

  render() {
    return (
      <div className="selection">
        <ButtonFacebookLogin isLoading={this.state.isLoading} onClick={this.onFacebookConnectStart} onConnectFail={this.onFacebookConnectFail} onConnected={this.onFacebookConnect}/>
        <ErrorMessage message={this.state.error} />
      </div>
    );
  }
}