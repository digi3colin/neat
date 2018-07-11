import React from "react";
import MicrosoftGraph from '@microsoft/microsoft-graph-client';
import {uuid} from 'uuid';

export default class ButtonMicrosoft extends React.Component{
  constructor(props){
    super(props);

    const authParams = {
      response_type: 'id_token token',
      client_id:    props.appId,
      redirect_uri: props.redirectUri,
      scope: props.scope,
      state: uuid(),
      nonce: uuid(),
      response_mode: 'fragment'
    };

    const params = Object
      .keys(authParams)
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(authParams[k])}`)
      .join('&');

    this.state = {
      authURL : `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?${params}`,
      client  : null,
    };
  }

  onClick(e){
    e.preventDefault();
    window.open(this.state.authURL, 'ms-auth', 'width=300,height:600');

    window.msAuthHandler = x => {
      let client = MicrosoftGraph.Client.init({
        authProvider: done => done(null, x.access_token)
      });
      this.onSignIn(client);
      window.msAuthHandler = null;
    };

    if(!this.props.onClick)return;
    this.props.onClick(e);
  }

  onSignIn(client){
    client
      .api('/me')
      .get((err, res) => console.log(res.displayName));

    if(!this.props.onSignIn)return;
    this.onSignIn(client);
  }

  render(){
    return (<div onClick={this.onClick}>Microsoft 登入</div>);
  }
}