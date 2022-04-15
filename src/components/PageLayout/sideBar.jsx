import "./sideBar.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import React, { Component } from "react";
// 引入connect用于连接UI组件与store
import { connect } from 'react-redux'

const { Header, Sider, Content } = Layout;

class sideBar extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div className="sideBar-box">
        <Layout className="sideBarLayout">
          <Sider
            theme="light"
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className="logo">
              {!this.state.collapsed ? <span>后台管理系统</span> : null}

              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "",
                  onClick: this.toggle,
                }
              )}
            </div>
            <Menu mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1" icon={<UserOutlined />}>
                首页
              </Menu.Item>
              <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                视频
              </Menu.Item>
              <Menu.Item key="3" icon={<UploadOutlined />}>
                文件上传
              </Menu.Item>
            </Menu>
          </Sider>
        </Layout>
      </div>
    );
  }
}

export default connect()(sideBar)
