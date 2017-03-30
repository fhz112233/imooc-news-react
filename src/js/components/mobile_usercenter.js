/**
 * Created by Administrator on 2017/3/16.
 */
import React from 'react';
import {Router, Route, Link, browserHistory} from 'react-router'


import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer'
import {Row, Col} from 'antd';
import {Menu, Icon} from 'antd';
import {Card} from 'antd';
import {notification} from 'antd';
import {Upload} from 'antd';
import {Tabs, message, Form, Input, Button, Checkbox, Modal} from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item; // 用于页面表单提交的组件
const TabPane = Tabs.TabPane; // 每个Tab下的内容

export default class MobileUserCenter extends React.Component {
  constructor() {
    super();
    this.state = {
      usercollection:'',
      usercomments: '',
      previewImage: '',
      previewVisible: false
    }
  }

  componentDidMount() {
    var myFetchOptions = {
      method: 'GET'
    }
    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid='+localStorage.userid, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          usercollection: json
        })
      })

    fetch('http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid='+localStorage.userid, myFetchOptions)
      .then(response => response.json())
      .then(json => {
        this.setState({
          usercomments: json
        })
      })
  }

  handleCancel() {
    this.setState({
      previewVisible: false
    })
  }

  render() {
    const props = {
      action: 'http://newsapi.gugujiankong.com/Handler.ashx',
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      listType: 'picture',
      defaultFileList: [
        {
          uid: -1,
          name: 'xxx.png',
          state: 'done',
          url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhb.png',
          thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhb.png'
        }
      ],
      onPreview: (file) => {
        this.setState({
          previewImage: file.url,
          previewVisible: true
        })
      }
    }

    const {usercollection} = this.state;
    const usercollectionList = usercollection.length
      ?
      usercollection.map((uc, index) => (
        <Card key={index} title={uc.uniquekey} extra={<a href={`/#/details/${uc.uniquekey}`}>查看</a>}>
          <p>{uc.Title}</p>
        </Card>
      ))
      :
      '您还没有收藏任何新闻';

    const {usercomments} = this.state;
    const usercommentsList = usercomments.length
      ?
      usercomments.map((comment, index) => (
        <Card key={index} title={`您于${comment.datetime} 评论了文章`} extra={<a href={`/#/details/${comment.uniquekey}`} >查看</a>}>
          <p>{comment.Comments}</p>
        </Card>
      ))
      :
      '您还没有发表过任何评论';

    return (
      <div>
        <MobileHeader/>
        <Row>
          <Col span={24}>
            <Tabs>
              <TabPane tab="我的收藏列表" key="1">
                <div>
                  <Row>
                    <Col span={24}>
                      {usercollectionList}
                    </Col>
                  </Row>
                </div>
              </TabPane>
              <TabPane tab="我的评论列表" key="2">
                <div>
                  <Row>
                    <Col span={24}>
                      {usercommentsList}
                    </Col>
                  </Row>
                </div>
              </TabPane>
              <TabPane tab="头像设置" key="3">
                <div className="clearfix">
                  <Upload {...props}>
                    <Icon type="plus"/>
                    <div className="ant-upload-text">上传照片</div>
                  </Upload>
                  <Modal visible={this.state.previewVisible} footer={null}
                         onCancel={this.handleCancel.bind(this)}>
                    <img src={this.state.previewImage} alt="预览图"/>
                  </Modal>
                </div>
              </TabPane>
            </Tabs>
          </Col>
        </Row>
        <MobileFooter />
      </div>
    )
  }
}