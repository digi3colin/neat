import React from 'react';
import PageControl from '../Carousel/PageControl.jsx';
import Form from "../uiElements/Form";
import ErrorMessage from "../uiElements/ErrorMessage";
import ButtonSubmit from "../uiElements/ButtonSubmit";

export default class InputPassword extends Form{
  onResult(data){
    super.onResult(data);
    this.props.onSignedIn(data);
  }

  render(){
    return (
      <div>
        <h3 className="ui"><i className="ellipsis horizontal icon"/>密碼登入</h3>
        <form method="post" action={this.state.urlBase+this.props.action} autoComplete="off" onSubmit={this.onSubmit}>
          <input type="hidden" name="destination" value=""/>
          <div className="ui left icon input"><input title="email" name="username" type="email" placeholder="電郵地址" autoComplete="off" required="required" disabled={this.state.isLoading} defaultValue={this.props.defaultEmail}/><i className="mail icon"/></div>
          <div className="br"></div>
          <div className="ui left icon input"><input title="password" name="password" type="password" placeholder="密碼" autoComplete="new-password" required="required" disabled={this.state.isLoading}/><i className="lock icon"/></div>
          <div className="br"></div>
          <ButtonSubmit isLoading={this.state.isLoading}>登入</ButtonSubmit>
          <div className="br"></div>
          <PageControl className="forgot-password" page="3" onPageChange={this.props.onPageChange}>
            <a href="/user/reset_password">忘記密碼？</a>
          </PageControl>
          <ErrorMessage message={this.state.error} />
        </form>
      </div>
    )
  }
}