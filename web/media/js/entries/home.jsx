import FacebookLogin from "../components/uiElements/ButtonFacebookLogin";
import MicrosoftLogin from "../components/uiElements/ButtonMicrosoft";
import ReactDOM from 'react-dom';

(()=>{
  ReactDOM.render(
    <div>
      <FacebookLogin appId="1076752449143771" onClick={e=>console.log(e)} onConnected={e=>console.log(e)} onFail={e=>console.log(e)}/>
      <MicrosoftLogin appId="24fdffcb-dde8-4d9a-86ed-352f77f188e9" scope="openid profile User.Read Mail.Read" redicrectUri="https://neat.qoro.me/auth/" />
    </div>
    ,
    document.getElementById('root')
  )
})();