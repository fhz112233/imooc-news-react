/**
 * Created by Administrator on 2017/3/14.
 */
import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'

import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
import { Tabs, message, Form, Input, Button, Checkbox, Modal } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item; // 用于页面表单提交的组件
const TabPane = Tabs.TabPane; // 每个Tab下的内容

class MobileHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 'top',
      modalVisible: false,
      action: 'login',
      hasLogined: false,
      userNickName: '',
      userid: 0
    }
  }

  setModalVisible(value) {
    this.setState({
      modalVisible: value
    });
  }

  // handleClick(e) {
  //   if (e.key = "register") {
  //     this.setState({current:'register'})
  //     this.setModalVisible(true)
  //   }else{
  //     this.setState({c})
  //   }
  // }

  handleSubmit(e) {
    // 页面开始向API进行post数据
    e.preventDefault();
    var myFetchOptions = {
      method: 'GET'
    };
    var formData = this.props.form.getFieldsValue(); // 以对象形式返回表单中所填的所有数据
    console.log('formData:',formData);
    fetch("http://newsapi.gugujiankong.com/Handler.ashx?action="+this.state.action
      +"&username="+formData.userName+"&password="+formData.password
      +"&r_userName="+formData.r_userName+"&r_password="+formData.r_password+"&r_confirmPassword="+formData.r_confirmPassword, myFetchOptions)
      .then(response=>response.json()).then(json=>{
      console.log('response is', json)
      this.setState({
        userNickName: json.NickUserName,
        userid: json.UserId
      })
    });
    if(this.state.action == 'login') {
      this.setState({
        hasLogined: true
      })
    }
    message.success('请求成功！');
    this.setModalVisible(false);
  }

  login() {
    this.setModalVisible(true);
  }

  callback(key) {
    if(key==1) {
      this.setState({
        action: 'login'
      })
    } else if (key==2) {
      this.setState({
        action: 'register'
      })
    }
  }

  render() {
    let {getFieldDecorator} = this.props.form;
    const userShow = this.state.hasLogined ?
      <Link to={`/usercenter`}>
        <Icon type="inbox"/>
      </Link>
      :
      <Icon type="setting" onClick={this.login.bind(this)} />

    return (
      <div id="mobileheader">
        <header>
          <img src="./src/images/logo.png" alt="logo"/>
          <span>ReactNews</span>
          {userShow}
        </header>

        {/*登录弹出框*/}
        <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
               onCancel={()=>{this.setModalVisible(false)}} onOk={()=>this.setModalVisible(false)} okText="关闭">
          <Tabs type="card" onChange={this.callback.bind(this)}>
            <TabPane tab="登录" key="1">
              <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="账户">
                  {
                    getFieldDecorator('userName')(<Input placeholder="请输入您的用户名" />)
                  }
                </FormItem>
                <FormItem label="密码">
                  {
                    getFieldDecorator('password')(<Input type="password" placeholder="请输入您的密码" />)
                  }
                </FormItem>
                <Button type="primary" htmlType="submit">
                  登录
                </Button>
              </Form>
            </TabPane>

            <TabPane tab="注册" key="2">
              <Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
                <FormItem label="账户">
                  {
                    getFieldDecorator('r_userName')(<Input placeholder="请输入您的用户名" />)
                  }
                </FormItem>
                <FormItem label="密码">
                  {
                    getFieldDecorator('r_password')(<Input type="password" placeholder="请输入您的密码" />)
                  }
                </FormItem>
                <FormItem label="确认密码">
                  {
                    getFieldDecorator('r_confirmPassword')(<Input type="password" placeholder="请再次输入您的密码" />)
                  }
                </FormItem>
                <Button type="primary" htmlType="submit">
                  注册
                </Button>
              </Form>
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    );
  }
}

export default MobileHeader = Form.create({})(MobileHeader);