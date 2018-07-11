import React from 'react';
import Form from '../uiElements/Form';
import ErrorMessage from "../uiElements/ErrorMessage";
import ButtonSubmit from "../uiElements/ButtonSubmit";

export default class Register extends Form{
  handleInviteSuccess(){
    if(this.props.onInviteSuccess === null)return;
    this.props.onInviteSuccess();
  }

  render(){
    const form = (
      <form method="post" action={this.state.urlBase+this.props.action} autoComplete="off" onSubmit={this.onSubmit} >
        <div>請填寫你資助《勁揪體籌旗造字計劃》時，所使用的電郵地址。</div>
        <div className="br"/>
        <div className="ui left icon input"><input title="email" name="email" type="email" placeholder="電郵地址" autoComplete="off" required="required" disabled={this.state.isLoading}/><i className="mail icon"/></div>
        <div className="br"/>
        <ButtonSubmit isLoading={this.state.isLoading}>發出註冊電郵</ButtonSubmit>
      </form>
    );

    const thankyou = (
      <div>謝謝你的註冊，邀請電郵已送出。請檢查你的電郵信箱。</div>
    );

    return (
      <div>
        <h3><i className="write icon"/>註冊成為網站成員</h3>
        {(this.props.isInvited) ? thankyou : form}
        <ErrorMessage message={this.state.error} />
      </div>
    );
  }

  onResult(data){
    super.onResult(data);
    if(data.status !== "success")return;

    this.handleInviteSuccess();
  }
}