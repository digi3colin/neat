var FILE = "home";
var host = window.location.hostname;
var isLocal = /^localhost|^local.|.local$/i.test(host);

if(isLocal){
  //development
  require.config({
    paths: {
      "react":       "//unpkg.com/react@16.0.0/umd/react.development",
      "react-dom":   "//unpkg.com/react-dom@16.0.0/umd/react-dom.development",
      "redux":       "//unpkg.com/redux@3.6.0/dist/redux",
      "react-redux": "//unpkg.com/react-redux@5.0.5/dist/react-redux",
      "immutable":   "//unpkg.com/immutable@3.8.1/dist/immutable",
      "hammerjs":    "//unpkg.com/hammerjs@2.0.8/hammer",
      "hot-reload":  "http://localhost:3000/static/"+FILE
    }
  });
}else{
  //production
  require.config({
    paths: {
      "react":          "//unpkg.com/react@16.0.0/umd/react.production.min",
      "react-dom":      "//unpkg.com/react-dom@16.0.0/umd/react-dom.production.min",
      "redux":          "//unpkg.com/redux@3.6.0/dist/redux.min",
      "react-redux":    "//unpkg.com/react-redux@5.0.5/dist/react-redux.min",
      "immutable":      "//unpkg.com/immutable@3.8.1/dist/immutable.min",
      "hammerjs":       "//unpkg.com/hammerjs@2.0.8/hammer.min",
      "microsoftGraph": "//unpkg.com/@microsoft/microsoft-graph-client@1.0.0/lib/graph-js-sdk-web",
    }
  });
}

function allLoaded() {
  document.body.className += " ready"
}

require(["react", "react-dom", "redux", "react-redux", "immutable", "hammerjs", "microsoftGraph"], function (React, ReactDOM, Redux, ReactRedux, Immutable, Hammer, MicrosoftGraph) {
  window.React          = React;
  window.ReactDOM       = ReactDOM;
  window.Redux          = Redux;
  window.ReactRedux     = ReactRedux;
  window.Immutable      = Immutable;
  window.Hammer         = Hammer;
  window.MicrosoftGraph = MicrosoftGraph;

  if(isLocal){
    require(["hot-reload"], allLoaded);
  }else{
    require(["./entries/"+FILE], allLoaded);
  }
});
