import React from 'react';

export default class PageControl extends React.Component{
    constructor(props){
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
      e.preventDefault();
      if(!this.props.onPageChange)return;

      this.props.onPageChange(
        parseInt(e.currentTarget.getAttribute('data-item'))
      );
    }

    render(){
        return (
            <div className={`${this.props.className} page-control`} data-item={this.props.page} onClick={this.handleClick}>{this.props.children}</div>
        );
    }
}