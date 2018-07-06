/**
 * Created by colinleung on 20/4/2017.
 */

import React from 'react';
import PageControl from '../Carousel/PageControl';
import ButtonFacebookLogin from '../uiElements/ButtonFacebookLogin';
import Form from "../uiElements/Form";
import ErrorMessage from "../uiElements/ErrorMessage"

export default class Select extends Form {
  constructor(props){
    super(props);
    this.onFacebookConnectStart = this.onFacebookConnectStart.bind(this);
    this.onFacebookConnect      = this.onFacebookConnect.bind(this);
    this.onFacebookConnectFail  = this.onFacebookConnectFail.bind(this);
  }

  onResult(data){
    super.onResult(data);
    this.props.onRegister(data);
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
        <h3 className="ui"><i className="privacy icon" />請選擇登入方式</h3>
        <ButtonFacebookLogin isLoading={this.state.isLoading} onClick={this.onFacebookConnectStart} onConnectFail={this.onFacebookConnectFail} onConnected={this.onFacebookConnect}/>
        <div className="ui horizontal divider">或</div>
        <PageControl className={"ui button icon password" + (this.state.isLoading?" loading":"")} page="2" onPageChange={this.props.onPageChange}><a href="#"><i className="ellipsis horizontal icon"/>設定密碼登入</a></PageControl>
        <div className="br" />
        <ErrorMessage message={this.state.error} />
      </div>
    );
  }
}