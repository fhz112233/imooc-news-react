/**
 * Created by Administrator on 2017/3/15.
 */
import React from 'react';

export default class PCProduct extends React.Component {
  render() {
    return (
      <div className="mod_r_product" ne-module="modules/product/product.js">
        <div className="cm_mod_tab cm_mod_tab1 mod_all_product">
          <div className="tab_nav">
            <h2><span className="title"><i />我的产品</span></h2>
            <a href="javascript:;" ne-click="productAll()" className="more" ne-text="{{myState.openProduct ? '返回':'全部产品'}}" target="_self">全部产品</a>
          </div>
          <div className="tab_main no_login_tabmain">
            {/* 网易邮箱 */}
            <div className="cell clearfix cell_email">
              <a href="http://email.163.com/" className="logo">网易邮箱</a>
              <div className="detail">
                <h3><a href="http://email.163.com/#from=ntes_product">网易邮箱</a></h3>
                <div className="y_login">
                  未读邮件:
                  积分:
                  <a href="http://email.163.com/#from=ntes_product&ntes_mail_firstpage=compose" className="go_pro go_writemail" target="_blank" ne-href="{{myState.loginmail}}&ntes_mail_firstpage=compose"><span>写邮件</span></a>
                </div>
                <div className="no_login">
                  <a href="http://email.163.com/#from=ntes_product">免费邮</a>
                  <a href="http://vipmail.163.com/#from=www">VIP邮箱</a>
                  <a href="http://qiye.163.com/">企业邮箱</a>
                  <a href="http://mail.163.com/client/dl.html?from=mail46">邮箱大师</a>
                </div>
              </div>
            </div>
            {/* 网易考拉 */}
            <div className="cell clearfix cell_kaola">
              <a href="http://rd.da.netease.com/redirect?t=phQvh57q8x&p=moiAt1&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2F%3Ftag%3Dbe3d8d027a530881037ef01d304eb505" className="logo">网易考拉</a>
              <div className="detail">
                <h3><a href="http://rd.da.netease.com/redirect?t=phQvh57q8x&p=moiAt1&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2F%3Ftag%3Dbe3d8d027a530881037ef01d304eb505">网易考拉</a></h3>
                {/* <p class="y_login">
                 待发货:<a href="javascript:void(0);"  id="kaolafahuo" class="fontred mr20">0</a>
                 待收货:<a href="javascript:void(0);"  id="kaolashouhuo" class="fontred">0</a>
                 <a class="go_pro" href="javascript:void(0);" target="_blank">
                 <span>查物流</span>&gt;</a>
                 </p> */}
                <div>
                  <a href="http://rd.da.netease.com/redirect?t=IrzcoVD83c&p=NM2to7&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2Factivity%2Fdetail%2F15809.shtml%3Ftag%3Dbe3d8d027a530881037ef01d304eb505">新用户特价</a>
                  <a href="http://rd.da.netease.com/redirect?t=OBmOrrixmr&p=iR57yw&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2Factivity%2Fdetail%2F10194.shtml%3Ftag%3Dbe3d8d027a530881037ef01d304eb505">领红包</a>
                  <a href="http://rd.da.netease.com/redirect?t=JRliBUaQHO&p=17XYDd&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2Factivity%2Fdetail%2F11835.shtml%3Ftag%3Dbe3d8d027a530881037ef01d304eb505">点卡9.8折</a>
                </div>
              </div>
            </div>
            {/* 网易游戏 */}
            <div className="cell clearfix cell_game">
              <a href="http://game.163.com/" className="logo">网易游戏</a>
              <div className="detail game_detail_success">
                {/* 默认 */}
                <div className="game_default">
                  <strong><a href="http://game.163.com/">网易游戏</a></strong>
                  <a href="http://my.163.com/">梦幻西游手游</a>
                  <a href="http://yys.163.com/">阴阳师</a>
                  <a href="http://wow.blizzard.cn/">魔兽世界</a>
                  <a href="http://hs.blizzard.cn/">炉石传说</a>
                </div>
                <div className="game_detail">
                  <strong><a href="http://game.163.com/">网易游戏</a></strong>
                  <a href="http://dhxy.163.com/">大话西游手游</a>
                  <a href="http://yys.163.com/">阴阳师</a>
                  <a href="http://ow.blizzard.cn/">守望先锋</a>
                  <a href="http://tx3.163.com/">天下3</a>
                </div>
              </div>
            </div>
            {/* 推荐 */}
            <div className="cell cell_recommend">
              <h3>推荐</h3>
              <div className="clearfix rmd_pro_list">
                <ul id="rmd_pro_list">
                  <li><a href="http://qian.163.com/">有钱</a></li><li><a href="http://open.163.com/">公开课</a></li><li><a href="https://zc.163.com?utm_source=newspc&utm_medium=home_pc&utm_campaign=Crowdfunding&mmd=newspc&mpl=home_pc&mkw=Crowdfunding">众筹</a></li><li><a href="http://love.163.com/?from=wscp">花田</a></li><li><a href="http://fa.163.com/?from=tgn163cp">贵金属</a></li><li><a href="http://cc.163.com/">CC语音</a></li><li><a href="http://caipiao.163.com/#from=www">彩票</a></li><li><a href="http://yuehui.163.com/?from=wscp">同城约会</a></li><li><a href="http://study.163.com/?utm_source=163.com&utm_medium=web_productlist&utm_campaign=business">云课堂</a></li><li><a href="http://blog.163.com/?fromService">博客</a></li><li><a href="http://rd.da.netease.com/redirect?t=VGa7BN&p=ve4u5l&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2F%3Ftag%3Dbe3d8d027a530881037ef01d304eb505">考拉海购</a></li><li><a href="http://www.bobo.com/">BoBo直播</a></li><li><a href="http://gzy.mail.163.com/?from=163product">公正邮</a></li><li><a href="http://888.163.com/?from=tgnh2">1元购</a></li><li><a href="http://photo.163.com/">相册</a></li><li><a href="http://cidian.youdao.com/">有道词典</a></li><li><a href="http://i.money.163.com/?imb1">财经客户端</a></li><li><a href="http://you.163.com?from=web_in_wyshouye">严选</a></li><li><a href="http://yuedu.163.com">云阅读</a></li><li><a href="http://www.weiyang.cn/">网易味央</a></li><li><a href="http://www.icourse163.org/?utm_source=163.com&utm_medium=web_productlist&utm_campaign=business">大学MOOC</a></li><li><a href="https://i.epay.126.net/a/8a/static/188activity.html?utm_source=163&utm_medium=recommend_pc&utm_campaign=1888cashfest&mmd=163&mpl=recommend_pc&mkw=1888cashfest">理财</a></li><li><a href="http://baoxian.163.com/?from=wycp">车险</a></li><li><a href="http://www.lofter.com/?act=qb163rk_20141031_12">LOFTER</a></li><li><a href="http://mall.163.com/?from=mmwww">商城</a></li><li><a href="http://ai.163.com/?from=wangyimenhu18">网易智造</a></li><li><a href="http://manhua.163.com/">漫画</a></li><li><a href="http://fanyi.youdao.com/?vendor=163homepage">翻译</a></li><li><a href="http://yxp.163.com/">印像派</a></li><li><a href="http://x.163.com?source=163webproduct">青果</a></li><li><a href="http://www.163.com/newsapp/">新闻客户端</a></li><li><a href="http://tie.163.com/">跟贴</a></li><li><a href="http://note.youdao.com/?vendor=163index">云笔记</a></li><li><a href="https://pop.lmlc.com/web/activity/practiceGold/index.html?from=tgn163productlist2">赚钱</a></li><li><a href="http://y.163.com/download/index?from=wscp">美聊</a></li><li><a href="http://trip.163.com/">火车票</a></li></ul>
              </div>
            </div>
            {/* 网易音乐 */}
            <div className="clearfix cell_music">
              <div ne-module="modules/mod_music/music.js">
                <div className>
                  <span className="newsqrcode" />
                  <div ne-role="player">
                    <div className="player">
                      <div className="f-cb">
                        <div className="btnGroup f-cb fixed-show">
                          <a ne-role="fixed-pause" className="bg mid pause f-hide" data-action="pause" title="暂停">
                            <div ne-role="fixed-animate" className="vol-ani bg" />
                          </a>
                          <a ne-role="fixed-play" className="bg mid play" data-action="play" title="播放" />
                        </div>
                        <div className="cover">
                          <a href="http://music.163.com/#/song?id=346083" ne-role="coverlink">
                            <img ne-role="cover" src="http://p1.music.126.net/ghmbmEQS-IJfZPjdA3KGxg==/82463372084291.jpg?param=80y80" />
                          </a>
                        </div>
                        <div className="ctrlBox">
                          <h2 className="f-pr">
                            <div ne-role="title" className="title">
                              <a href="http://music.163.com/#/song?id=346083">
                                Amani
                                <span className="sub"> - Beyond</span>
                              </a>
                            </div>
                          </h2>
                          <div ne-role="bar" className="bar">
                            <div className="played j-flag" style={{width: 0}} />
                          </div>
                          <div className="oprBox">
                            <div ne-role="time" className="time">
                              - 0:00
                            </div>
                            <div className="btnGroup f-cb">
                              <a className="bg prev" data-action="prev" title="上一首" />
                              <a ne-role="pause" className="bg mid pause f-hide" data-action="pause" title="暂停" />
                              <a ne-role="play" className="bg mid play" data-action="play" title="播放" />
                              <a className="bg next" data-action="next" title="下一首" />
                            </div>
                            <a className="bg open" data-action="open" title="播放列表" />
                          </div>
                        </div>
                      </div>
                      <div ne-role="list" className="yyy-list z-close">
                        <div className="list-title">
                          <h3>每日歌曲推荐</h3>
                          <a className="bg open close-btn" data-action="open" title="关闭" />
                        </div>
                        <div className="box ne-scrl-wrap ne-scrl-y" ne-role="box" ne-plugin="scroller" style={{overflow: 'hidden'}}>
                          <ul className="f-cb" style={{position: 'relative', top: 0}}>
                            <li data-action="playByIndex" data-index={0} className>
                              <div className="cur bg" />
                              <div className="name f-thide" title>
                                Amani
                              </div>
                              <div className="by f-thide" title>
                                Beyond
                              </div>
                            </li><li data-action="playByIndex" data-index={1} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              光辉岁月
                            </div>
                            <div className="by f-thide" title>
                              Beyond
                            </div>
                          </li><li data-action="playByIndex" data-index={2} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              曾经拥有
                            </div>
                            <div className="by f-thide" title>
                              Beyond
                            </div>
                          </li><li data-action="playByIndex" data-index={3} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              火柴天堂
                            </div>
                            <div className="by f-thide" title>
                              齐秦
                            </div>
                          </li><li data-action="playByIndex" data-index={4} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              千千阙歌
                            </div>
                            <div className="by f-thide" title>
                              陈慧娴
                            </div>
                          </li><li data-action="playByIndex" data-index={5} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              橄榄树
                            </div>
                            <div className="by f-thide" title>
                              齐豫
                            </div>
                          </li><li data-action="playByIndex" data-index={6} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              异乡人
                            </div>
                            <div className="by f-thide" title>
                              李健
                            </div>
                          </li><li data-action="playByIndex" data-index={7} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              虎口脱险
                            </div>
                            <div className="by f-thide" title>
                              老狼
                            </div>
                          </li><li data-action="playByIndex" data-index={8} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              世外桃源
                            </div>
                            <div className="by f-thide" title>
                              许巍
                            </div>
                          </li><li data-action="playByIndex" data-index={9} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              且听风吟
                            </div>
                            <div className="by f-thide" title>
                              朴树
                            </div>
                          </li><li data-action="playByIndex" data-index={10} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              胭脂扣
                            </div>
                            <div className="by f-thide" title>
                              张国荣
                            </div>
                          </li><li data-action="playByIndex" data-index={11} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              女人花
                            </div>
                            <div className="by f-thide" title>
                              梅艳芳
                            </div>
                          </li><li data-action="playByIndex" data-index={12} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              庐州月
                            </div>
                            <div className="by f-thide" title>
                              许嵩
                            </div>
                          </li><li data-action="playByIndex" data-index={13} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              假行僧
                            </div>
                            <div className="by f-thide" title>
                              崔健
                            </div>
                          </li><li data-action="playByIndex" data-index={14} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              落花流水
                            </div>
                            <div className="by f-thide" title>
                              陈奕迅
                            </div>
                          </li><li data-action="playByIndex" data-index={15} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              同一首歌
                            </div>
                            <div className="by f-thide" title>
                              毛阿敏
                            </div>
                          </li><li data-action="playByIndex" data-index={16} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              故乡的云
                            </div>
                            <div className="by f-thide" title>
                              费翔
                            </div>
                          </li><li data-action="playByIndex" data-index={17} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              口是心非
                            </div>
                            <div className="by f-thide" title>
                              张雨生
                            </div>
                          </li><li data-action="playByIndex" data-index={18} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              青春无悔
                            </div>
                            <div className="by f-thide" title>
                              叶蓓/老狼
                            </div>
                          </li><li data-action="playByIndex" data-index={19} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              当你老了
                            </div>
                            <div className="by f-thide" title>
                              赵照
                            </div>
                          </li><li data-action="playByIndex" data-index={20} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              一生何求
                            </div>
                            <div className="by f-thide" title>
                              陈百强
                            </div>
                          </li><li data-action="playByIndex" data-index={21} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              恋曲1990
                            </div>
                            <div className="by f-thide" title>
                              罗大佑
                            </div>
                          </li><li data-action="playByIndex" data-index={22} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              永隔一江水
                            </div>
                            <div className="by f-thide" title>
                              许巍/朴树
                            </div>
                          </li><li data-action="playByIndex" data-index={23} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              月半小夜曲
                            </div>
                            <div className="by f-thide" title>
                              李克勤
                            </div>
                          </li><li data-action="playByIndex" data-index={24} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              漫步人生路
                            </div>
                            <div className="by f-thide" title>
                              邓丽君
                            </div>
                          </li><li data-action="playByIndex" data-index={25} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              让我偷偷看你
                            </div>
                            <div className="by f-thide" title>
                              赵雷
                            </div>
                          </li><li data-action="playByIndex" data-index={26} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              被遗忘的时光
                            </div>
                            <div className="by f-thide" title>
                              蔡琴
                            </div>
                          </li><li data-action="playByIndex" data-index={27} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              被禁忌的游戏
                            </div>
                            <div className="by f-thide" title>
                              李志
                            </div>
                          </li><li data-action="playByIndex" data-index={28} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              我是一只小小鸟
                            </div>
                            <div className="by f-thide" title>
                              赵传
                            </div>
                          </li><li data-action="playByIndex" data-index={29} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              蒙娜丽莎的眼泪
                            </div>
                            <div className="by f-thide" title>
                              林志炫
                            </div>
                          </li><li data-action="playByIndex" data-index={30} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title="今天是你的生日，妈妈(original version)">
                              今天是你的生日，妈妈(original version)
                            </div>
                            <div className="by f-thide" title>
                              钟立风
                            </div>
                          </li><li data-action="playByIndex" data-index={31} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title="一霎那(电影我心飞翔插曲)">
                              一霎那(电影我心飞翔插曲)
                            </div>
                            <div className="by f-thide" title>
                              郑钧
                            </div>
                          </li><li data-action="playByIndex" data-index={32} className>
                            <div className="cur bg" />
                            <div className="name f-thide" title>
                              山丘 (Live)
                            </div>
                            <div className="by f-thide" title>
                              李宗盛
                            </div>
                          </li>
                          </ul>
                          <div className="ne-scrl-bd">        <div className="ne-scrl-ct" style={{height: 0, display: 'none'}}>          <a className="ne-scrl-btn" hidefocus="true" style={{top: 0}}>            <b className="ne-scrl-btn-start" /><b className="ne-scrl-btn-end" /><span className="ne-scrl-btn-bd"><span /></span>        </a>      </div>    </div></div>
                      </div>
                    </div>
                  </div>
                  <div className="mo_player" style={{display: 'none'}}><a href="http://music.163.com/" /></div>
                  <span className="gotop" ne-click="pagegoTop()" />
                </div>
              </div>
              <div id="music_fixline" />
            </div>
            {/* 全部产品 */}
            <div className="pop_all_product">
              <ul>
                <li className="first">
                  <a href="http://email.163.com/#from=ntes_product">免费邮</a>
                  <a href="http://vipmail.163.com/#from=www">VIP邮箱</a>
                  <a href="http://qiye.163.com/">企业邮箱</a>
                  <a href="http://mail.163.com/client/dl.html?from=mail46">邮箱大师</a>
                  <a href="http://yixin.im" className="mr0">易信</a>
                </li>
                <li>
                  <h3>
                    <a href="http://xyq.163.com/">梦幻西游</a>
                    <a href="http://xy2.163.com/">新大话2</a>
                    <a href="http://my.163.com/">梦幻西游手游</a>
                  </h3>
                  <a href="http://x3.163.com/">新大话3</a>
                  <a href="http://www.warcraftchina.com/">魔兽世界</a>
                  <a href="http://qnm.163.com/">倩女幽魂手游</a>
                  <a href="http://xqn.163.com/fab/">新倩女幽魂</a>
                  <a href="http://wh2.163.com/">武魂2</a>
                  <a href="http://dhxy.163.com/">大话西游手游</a>
                  <a href="http://ow.blizzard.cn/">守望先锋</a>
                  <a href="http://tx3.163.com/">天下3</a>
                  <a href="http://stzb.163.com/">率士之滨</a>
                  <a href="http://dt2.163.com/">大唐无双零</a>
                  <a href="http://tianyu.163.com/">天谕</a>
                  <a href="http://yys.163.com/">阴阳师</a>
                  <a href="http://zmq.163.com/">镇魔曲</a>
                  <a href="http://9.163.com/">炉石传说</a>
                </li>
                <li>
                  <h3>
                    <a href="http://y.163.com/download/index?from=wscp">美聊</a>
                    <a href="http://yuehui.163.com/?from=wscp">约会</a>
                    <a href="http://blog.163.com/?fromService">博客</a>
                    <a href="http://www.bobo.com/">BoBo直播</a>
                    <a href="http://cc.163.com/">CC语音</a>
                  </h3>
                  <a href="http://rd.da.netease.com/redirect?t=VGa7BN&p=ve4u5l&proId=1024&target=http%3A%2F%2Fwww.kaola.com%2F%3Ftag%3Dbe3d8d027a530881037ef01d304eb505">考拉海购</a>
                  <a href="http://www.lofter.com/?act=qb163rk_20141031_12">LOFTER</a>
                  <a href="http://tie.163.com/">跟贴</a>
                  <a href="https://zc.163.com?utm_source=newspc&utm_medium=home_pc&utm_campaign=Crowdfunding&mmd=newspc&mpl=home_pc&mkw=Crowdfunding">众筹</a>
                  <a href="http://photo.163.com/">相册</a>
                  <a href="http://love.163.com/?from=wscp">花田</a>
                  <a href="http://manhua.163.com/">漫画</a>
                  <a href="http://x.163.com?source=163webproduct">青果</a>
                </li>
                <li>
                  <h3>
                    <a href="http://888.163.com/?from=tgnh2">1元购</a>
                    <a href="https://i.epay.126.net/a/8a/static/188activity.html?utm_source=163&utm_medium=recommend_pc&utm_campaign=1888cashfest&mmd=163&mpl=recommend_pc&mkw=1888cashfest">理财</a>
                    <a href="http://open.163.com/">公开课</a>
                    <a href="http://ai.163.com/?from=wangyimenhu18">网易智造</a>
                  </h3>
                  <a href="https://pop.lmlc.com/web/activity/practiceGold/index.html?from=tgn163productlist2">赚钱</a>
                  <a href="http://fa.163.com/?from=tgn163cp">贵金属</a>
                  <a href="http://caipiao.163.com/#from=www">彩票</a>
                  <a href="http://baoxian.163.com/?from=wycp">车险</a>
                  <a href="http://qian.163.com/">有钱</a>
                  <a href="http://cidian.youdao.com/">有道词典</a>
                  <a href="http://fanyi.youdao.com/?vendor=163homepage">翻译</a>
                  <a href="http://note.youdao.com/?vendor=163index">云笔记</a>
                  <a href="http://yxp.163.com/">印象派</a>
                  <a href="http://you.163.com?from=web_in_wyshouye">严选</a>
                  <a href="http://study.163.com/?utm_source=163.com&utm_medium=web_productlist&utm_campaign=business">云课堂</a>
                  <a href="http://yuedu.163.com">读小说</a>
                  <a href="http://trip.163.com/">火车票</a>
                  <a href="http://mall.163.com/?from=mmwww">商城</a>
                  <a href="http://gzy.mail.163.com/?from=163product">公正邮</a>
                  <a href="http://i.money.163.com/?imb1">财经客户端</a>
                  <a href="http://www.163.com/newsapp/">新闻客户端</a>
                  <a href="http://www.icourse163.org/?utm_source=163.com&utm_medium=web_productlist&utm_campaign=business">大学MOOC</a>
                  <a href="http://www.weiyang.cn/">网易味央</a>
                </li>
              </ul>
              <div className="product_foot">
                <span ne-click="productAll()" title="收起">收起</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}