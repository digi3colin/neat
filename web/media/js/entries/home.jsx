import Sample from "../components/Sample";
import ReactDOM from 'react-dom';

(()=>{
  let props = {text:'Hello World'};

  ReactDOM.render(
    <Sample {...props}/>,
    document.getElementById('root')
  )
})();