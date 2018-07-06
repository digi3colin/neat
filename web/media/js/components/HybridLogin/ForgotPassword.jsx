/**
 * Created by colinleung on 20/4/2017.
 */

import React from 'react';
import Form from '../uiElements/Form';
import ErrorMessage from "../uiElements/ErrorMessage";
import ButtonSubmit from "../uiElements/ButtonSubmit";

export default class ForgotPassword extends Form {
   render() {
      let form = (
        <form method="post" action={this.state.urlBase+this.props.action} autoComplete="off" onSubmit={this.onSubmit}>
          <div className="ui left icon input"><input title="email" name="email" type="email" placeholder="電郵地址" autoComplete="off" required="required" disabled={this.state.isLoading}/><i className="mail icon"/></div>
          <div className="br" />
          <ButtonSubmit isLoading={this.state.isLoading}>發出重設密碼電郵</ButtonSubmit>
        </form>);

       return (
            <div>
                <h3><i className="help circle icon" />忘記密碼</h3>
                <div className="ui ordered steps alt">
                    <div className={"step"+ (this.props.step == 1 ? " active": (this.props.step > 1)? " completed": "")}>
                        <div className="content">
                            <div className="title">填寫電⁠郵地⁠址</div>
                            <div className="description">請填寫註冊的電郵地址</div>
                        </div>
                    </div>
                    <div className={"step"+ (this.props.step == 2 ? " active": (this.props.step > 2)? " completed": "")}>
                        <div className="content">
                            <div className="title">電郵驗⁠証</div>
                            <div className="description">檢查你的電郵</div>
                        </div>
                    </div>
                    <div className={"step"+ (this.props.step == 3 ? " active": (this.props.step > 3)? " completed": "")}>
                        <div className="content">
                            <div className="title">確認電⁠郵驗⁠証</div>
                            <div className="description">按下電郵內的驗証連結</div>
                        </div>
                    </div>
                    <div className={"step"+ (this.props.step == 4 ? " active": (this.props.step > 4)? " completed": "")}>
                        <div className="content">
                            <div className="title">輸入新密⁠碼</div>
                            <div className="description"></div>
                        </div>
                    </div>
                </div>
                <div className="br"></div>
                {this.props.step > 1 ? "" : form}
                <ErrorMessage message={this.state.error} />
            </div>
        );
    }

  onSubmit(e){
    super.onSubmit(e);
    this.setState({error:null});
  }
}