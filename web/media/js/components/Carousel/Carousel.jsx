import React from "react"
import ReactDOM from "react-dom"
import Hammer from "hammerjs"

export default class Carousel extends React.Component{
  constructor(props){
    super(props);
    this.handleSwipe = this.handleSwipe.bind(this);
  }

  handleSwipe(){
    if(this.props.onPageChange === null)return;

    this.props.onPageChange(1);
  }

  componentDidMount(){
    this.hammer = new Hammer(ReactDOM.findDOMNode(this));
    this.hammer.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    this.hammer.on('swiperight', this.handleSwipe);
  }

  componentWillReceiveProps(nextProps){
    this.setState({page: nextProps.page});
  }

  componentWillUnmount(){
    this.hammer.stop(true);
    this.hammer.destroy();
  }

  render(){
    const lists = this.props.children.map((item, index) => <li key={index}>{item}</li>);

    return (
      <div className="carousel" data-active={this.props.page}>
        <ul className="box">
          {lists}
        </ul>
      </div>
    );
  }
}