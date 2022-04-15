import React, { Component } from "react";
import img1 from '../../assent/img/dog1.png'
import img2 from '../../assent/img/dog2.png'
import "./index.css";

export default class Login extends Component {
  state = {
    isHidden: false,
    isRegister: false,
    loginForm: {
      userName: "",
      passWord: "",
    },
    registerForm: {
        userName: "",
        email: "",
        passWord: "",
        confirmPassWord: ""
    },
  };
  goLoginPage = () => {
    this.setState({
      isRegister: false,
    });
  };
  goRegisterPage = () => {
    this.setState({
      isRegister: true,
    });
  };
 // 点击登录按钮
 handleLogin = () => {
     let { loginForm } = this.state;
     console.log('loginForm@@',loginForm)
 }   
  render() {
    return (
      <div className="loginBox">
        <div className="container">
          <div
            className={`formBox ${
              this.state.isRegister ? "isRegister" : "isLogin"
            }`}
          >
            {/* 注册 */}
            <div className={`registerForm flexCenter ${this.state.isRegister? null:'hidden'}`}>
              <h1 className="registerTitle">REGISTER</h1>
              <input
                type="text"
                className="registerUserName"
                placeholder="用户名"
              ></input>
              <input
                type="email"
                className="registerEmail"
                placeholder="邮箱"
              ></input>
              <input
                type="password"
                className="registerPassWord"
                placeholder="密码"
              ></input>
              <input
                type="password"
                className="registerComfirmPassWord"
                placeholder="确认密码"
              ></input>
              <button className="registerButton">注册</button>
            </div>
            {/* 登录 */}
            <div className={`loginForm flexCenter ${this.state.isRegister? 'hidden':null}`}>
              <h1 className="loginTitle">LOGIN</h1>
              <input
                type="text"
                className="loginUserName"
                placeholder="用户名"
              />
              <input
                type="password"
                className="loginUserName"
                placeholder="密码"
              />
              <button className="loginButton" onClick={this.handleLogin}>登录</button>
            </div>
          </div>
          {/* 底部展示 */}
          <div className="showDetailBox">
            <div className="leftDetailBox flexCenter">
              <h2 className="title">
                欢迎来到<span>宠物之家</span>
              </h2>
              <p>快来领取你的专属宠物吧</p>
              <img src={img1} alt="" />
              <div>已有账号</div>
              <button className="goLoginBtn" onClick={this.goLoginPage}>
                去登录
              </button>
            </div>
            <div className="rightDetailBox flexCenter">
              <h2 className="title">
                欢迎来到<span>宠物之家</span>
              </h2>
              <p>快来看看你的可爱宠物吧</p>
              <img src={img2} alt="" />
              <div>没有账号?</div>
              <button className="goRegisterBtn" onClick={this.goRegisterPage}>
                去注册
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
