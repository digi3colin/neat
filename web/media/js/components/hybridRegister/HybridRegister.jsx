import React from 'react';
import Step from '../uiElements/Step';
import Steps from '../uiElements/Steps';
import Carousel from '../Carousel/Carousel';
import Select from './Select';
import InputPassword from './InputPassword';
import Resend from './Resend';
import Login from './Login';

import {connect} from "react-redux";

class HybridRegister extends React.Component{
  constructor(props){
    super(props);
    this.onPageChange = this.onPageChange.bind(this);
    this.onRegister = this.onRegister.bind(this);
    this.onResendConfirmation = this.onResendConfirmation.bind(this);
    this.onNicknameChange = this.onNicknameChange.bind(this);
    this.onSignedIn = this.onSignedIn.bind(this);
  }

  onPageChange(page){
    this.props.onPageChange(page);
  }

  onRegister(data){
    this.props.onRegister(data)
  }

  onResendConfirmation(data){
    this.props.onResendConfirmation(data);
  }

  onNicknameChange(value){
    this.props.onNicknameChange(value);
  }

  onSignedIn(data){
    this.props.onSignedIn(data);
  }

  render(){
    let form;
    switch (this.props.step){
      case 1:
        form = (
          <Carousel onPageChange={this.onPageChange} page={this.props.page}>
            <Select        action="contributor/register_save" code={this.props.code} onRegister={this.onRegister} onPageChange={this.onPageChange} />
            <InputPassword action="contributor/register_save" code={this.props.code} onRegister={this.onRegister} defaultValue={this.props.nickname} onNicknameChange={this.onNicknameChange}/>
          </Carousel>
        );
        break;
      case 2:
        form = (
          <div>
            <div>成功記錄{this.props.nickname}的登入資料，確認電郵已發送到{this.props.email}</div>
            <Resend onResult={this.onResendConfirmation} action="contributor/resend_submit" email={this.props.email} label="重發確認電郵"/>
          </div>
        );
        break;
      case 3:
      case 4:
        form = (
          <Login loginMethod={this.props.loginMethod} onSignedIn={this.onSignedIn} defaultEmail={this.props.email}/>
        );
    }

    const greeting = (this.props.step < 4) ? (<div className="ui content">多謝 {this.props.nickname} 支持，勁揪體會不時公佈最新進度，請註冊。</div>) : (<div><div>唔該哂！電郵地址成功確認！你已經完成註冊。</div><div>依家即刻登入啦</div></div>);
    return (
      <div className="multi-page-form">
        {greeting}
        <div><i className="ui icon mail" />你的電郵地址: {this.props.email}</div>
        <div className="br" />

        <Steps className="four" step={this.props.step}>
          <Step title="設定登入方式"/>
          <Step title="電郵驗⁠証" description="檢查你的電郵" />
          <Step title="確認電⁠郵驗⁠証" description="按下電郵內的驗証連結" />
          <Step title="開始登入" />
        </Steps>
        {form}
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      step: state.step,
      page: state.page,
      code: state.code,
      nickname: state.nickname,
      email: state.email,
      loginMethod: state.login_method,
    };
  },
  dispatch => {
    return {
      onPageChange: (page) => {
        dispatch({type: "CHANGE_PAGE", payload: page});
      },
      onRegister: (data) => {
        if(data.status !== 'success')return;

        dispatch({type: "CHANGE_STEP", payload: 2});
        dispatch({type: "CHANGE_NICKNAME", payload: data.nickname});
      },
      onResendConfirmation: (data) =>{
        console.log(data);
      },

      onNicknameChange:(value) =>{
        dispatch({type: "CHANGE_NICKNAME", payload: value});
      },

      onSignedIn:(data)=>{
        const base = document.body.getAttribute('data-base');
        window.location.href = base + data.destination;
      }
    }
  }
)(HybridRegister);