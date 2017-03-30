/**
 * Created by Administrator on 2017/3/16.
 */
import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'

import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
import { Card } from 'antd';
import { notification } from 'antd';
import { Tabs, message, Form, Input, Button, Checkbox, Modal } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item; // 用于页面表单提交的组件
const TabPane = Tabs.TabPane; // 每个Tab下的内容

class CommonComments extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: ''
    }
  }

  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getcomments&uniquekey='+this.props.uniquekey, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          comments: json
        })
      })
  }

  handleSubmit(e) {
    e.preventDefault();
    var myFetchOptions = {
      method: 'GET'
    };
    var formData = this.props.form.getFieldsValue(); // 以对象形式返回表单中所填的所有数据
    console.log('填了：', formData.remark)
    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=comment&userid='+localStorage.userid+'&uniquekey='+this.props.uniquekey+'&commnet='+formData.remark, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        console.log('提交成功吗', json);
        this.componentDidMount(); // 提交成功后，再次请求一次评论接口，重新加载评论部分的页面，获取到最新的评论
      })

  }

  addUserCollection() {
    var myFetchOptions = {
      method: 'GET'
    };
    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid='+localStorage.userid+'&uniquekey='+this.props.uniquekey, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        console.log('成功了吗？', json)
        // 收藏成功以后进行一下全局的通知提醒
        notification.success({message: 'ReactNews提醒', description: '收藏成功'})
      })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const {comments} = this.state;
    const commentList = comments.length
    ?
      comments.map((comment, index) => (
        <Card key={index} title={comment.UserName} extra={<a href="#">发表于 {comment.datetime}</a>}>
          <p>{comment.Comments}</p>
        </Card>
      ))
      :
      '没有任何用户评论';
    return (
      <div className="comment">
        <Row>
          <Col span={24}>
            {commentList}
            <Form onSubmit={this.handleSubmit.bind(this)}>
              <FormItem label="您的评论">
                {getFieldDecorator('remark', {initialValue: ''})(<Input type='textarea' placeholder='随便写'/>)}
              </FormItem>
              <Button type='primary' htmlType='submit'>提交评论</Button>
              &nbsp;&nbsp;
              <Button type='primary' htmlType='button' onClick={this.addUserCollection.bind(this)}>收藏</Button>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

// 对自己进行二次封装后，再暴露出去，才可以使用this.props.form
export default CommonComments = Form.create({})(CommonComments)