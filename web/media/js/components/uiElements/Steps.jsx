import React from "react";
export default class Steps extends React.Component{
  render(){
    let lists = [];
    for(let i=0; i<this.props.children.length; i++){
      lists.push(
        <div className={"step"+ (this.props.step === (i+1) ? " active": (this.props.step > (i+1))? " completed": "")}>
          {this.props.children[i]}
        </div>
      );
    }

    return (
      <div className={"ui ordered steps alt "+this.props.className}>
        {lists}
      </div>
    );
  }
}