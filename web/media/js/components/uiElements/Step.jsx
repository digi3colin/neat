import React from "react";
export default class Step extends React.Component{

  render(){
    return (
      <div className="content">
        <div className="title">{this.props.title}</div>
        <div className="description">{this.props.description}</div>
      </div>
    );
  }
}