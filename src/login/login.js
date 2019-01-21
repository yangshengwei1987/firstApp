import React, { Component } from 'react';
import './login.css'

class Login extends Component{
    constructor(){
        super();
        this.state = {


        };
        
    }
    
    render(){
        return(
            <div> 
                <input type="text" placeholder="请输入账户名" className="textLine"></input>
                <input type="password" placeholder="请输入密码" className="textLine"></input>
                <input type="button" value="登录" className="inputButton"/>
                <input type="button" value="注册" className="inputButton"/>
            </div>
        );
    }

}

export default Login;