import React from "react";
import Form from "./Form";

export default class ButtonLogout extends Form{
  constructor(props){
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  onResult(data){
    super.onResult(data);
    this.props.onSignedOut(data);
  }

  onLogout(){
    this.setState({isLoading:true});
    this.post(new FormData());
  }

  render(){
    return (
      <div className={"ui button icon"+ (this.state.isLoading?" loading":"")} onClick={this.onLogout}><i className="icon lock"/>登出</div>
    );
  }
}