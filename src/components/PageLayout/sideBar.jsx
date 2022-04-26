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
import { routes } from "../../router";
import { Link, useLocation } from "react-router-dom";
// 引入connect用于连接UI组件与store
import { connect } from "react-redux";

const { Sider } = Layout;
const { SubMenu, Item: ItemMenu } = Menu;

class sideBar extends Component {
  state = {
    collapsed: false
  };
  location = () => useLocation();
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  getList = (routList = [], prePath = "") => {
    // const location = useLocation();
    
    const { pathname } = this.location;
    let menuList = [];
    let openKeys = [];
    routList.forEach((itemObj) => {
      itemObj.meta = itemObj.meta || {};
      if (itemObj.redirect || itemObj.path === "*" || itemObj.meta.hideMenu) {
        return;
      }
      //   if(!get)
      if (itemObj.path === "/") {
        menuList = menuList.concat(this.getList(itemObj.children, "/"));
      } else if (itemObj.path !== undefined) {
        const currentPath = prePath + itemObj.path;
        if (itemObj.children) {
          menuList.push(
            <SubMenu
              key={currentPath}
              icon={itemObj.meta.icon}
              title={itemObj.meta.title}
            >
              {this.getList(itemObj.children, currentPath + "/")}
            </SubMenu>
          );
        //   if (pathname.match(new RegExp("^" + currentPath + "\\/\\w"))) {
        //     openKeys.push(currentPath);
        //   }
        } else {
          menuList.push(
            <ItemMenu key={currentPath} icon={itemObj.meta.icon}>
              <Link to={currentPath}>{itemObj.meta.title}</Link>
            </ItemMenu>
          );
        }
      } else if (itemObj.url) {
        menuList.push(
          <ItemMenu key={prePath + itemObj.url} icon={itemObj.meta.icon}>
            <a href={itemObj.url} target="_blank" rel="noreferrer">
              {itemObj.meta.title}
            </a>
          </ItemMenu>
        );
      }
    });
    return menuList;
  };
  getMenuList = () => {
    return this.getList(routes);
  };
  render() {
      const routLists = this.getList(routes)
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
              {routLists}
            </Menu>
          </Sider>
        </Layout>
      </div>
    );
  }
}

export default connect()(sideBar);
