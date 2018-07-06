import React from "react";
export default class ButtonSubmit extends React.Component{
  render(){
    return (
      <button className={"ui button" + (this.props.isLoading?" loading":"")} type="submit">{this.props.children}</button>
    );
  }
}