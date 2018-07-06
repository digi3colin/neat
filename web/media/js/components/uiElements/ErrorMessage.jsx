import React from "react";

export default class ErrorMessage extends React.Component{
  render(){
    return (
      <div>{this.props.message}</div>
    )
  }
}