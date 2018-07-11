import React from "react";
import Form from "../uiElements/Form";
import ButtonSubmit from "../uiElements/ButtonSubmit";
import ErrorMessage from "../uiElements/ErrorMessage";

export default class Resend extends Form{
  onResult(data){
    super.onResult(data);
    this.props.onResult(data);
    if(data.status !== 'success')return;


    this.setState({
      success: "確認電郵已寄出"
    });

    clearTimeout(this.iid);
    this.iid = setTimeout(()=>{this.setState({success:''})}, 4000);

  }

  render(){
    return (
      <form method="post" action={this.state.urlBase+this.props.action} autoComplete="off" onSubmit={this.onSubmit}>
        <div className="ui left icon input"><input title="username" name="username" type="email" placeholder="電郵地址" autoComplete="off" required="required" disabled={this.state.isLoading} defaultValue={this.props.email}/><i className="mail icon"/></div>
        <div className="br" />
        <ButtonSubmit isLoading={this.state.isLoading}>{this.props.label}</ButtonSubmit>
        <ErrorMessage message={this.state.error} />
        <ErrorMessage message={this.state.success} />
      </form>
    );
  }
}