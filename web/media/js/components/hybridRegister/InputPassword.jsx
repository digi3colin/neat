import React from 'react';
import Form from "../uiElements/Form";
import ErrorMessage from "../uiElements/ErrorMessage";
import ButtonSubmit from "../uiElements/ButtonSubmit";

export default class InputPassword extends Form{
  constructor(props){
    super(props);
    this.onNicknameChange = this.onNicknameChange.bind(this);
  }

  onResult(data){
    super.onResult(data);
    this.props.onRegister(data);
  }

  onNicknameChange(e){
    e.preventDefault();
    this.props.onNicknameChange(e.target.value);
  }

  render(){
    return (
      <div>
        <h3 className="ui"><i className="ellipsis horizontal icon"/>設定登入密碼</h3>
        <form method="post" action={this.state.urlBase+this.props.action} autoComplete="off" onSubmit={this.onSubmit}>
          <input type="hidden" name="destination" value=""/>
          <input type="hidden" name="code" value={this.props.code} />
          <div className="ui left icon input"><input title="nickname" name="nickname" type="text" placeholder="暱稱" autoComplete="off" required="required" disabled={this.state.isLoading} defaultValue={this.props.defaultValue} onChange={this.onNicknameChange}/><i className="user icon"/></div>
          <div className="br"/>
          <div className="ui left icon input"><input title="password" name="password" type="password" placeholder="密碼" autoComplete="new-password" required="required" disabled={this.state.isLoading}/><i className="lock icon"/></div>
          <div className="br"/>
          <ButtonSubmit isLoading={this.state.isLoading}>提交</ButtonSubmit>
          <div className="br"/>
          <ErrorMessage message={this.state.error} />
        </form>
      </div>
    )
  }
}