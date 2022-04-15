/**
 * @Description: 路由统一配置
 * @Author: Neo
 * @Date: 2022-04-14
 * @LastEditTime: 2022-04-14
 * @LastEditors: Neo
 */
import PageLayout from '../components/PageLayout'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from "@ant-design/icons";
const routes = [
    {
        path: '/',
        redirect: "/home"
    },
    {
        path: '/',
        element: <PageLayout />,
        children: [
          {
            path: 'home',
            component: () => import(/* webpackChunkName: "index" */ '../containers/Home/index'),
            meta: {
              title: '首页'
            },
          },
          {
            path: 'customer',
            component: () => import(/* webpackChunkName: "index" */ '../containers/Customer/index'),
            meta: {
              title: '客户',
              icon: <UserOutlined />
            },
          },
        ]
      },
      {
         path: "/oder",
         meta: {
             title:'订单'
         },
         element: <PageLayout />,
         children: [
            {
              path: 'success',
              component: () => import(/* webpackChunkName: "index" */ '../containers/OrderSuccess/index'),
              meta: {
                title: '订单完成'
              },
            },
            {
              path: 'failed',
              component: () => import(/* webpackChunkName: "index" */ '../containers/OrderFailde/index'),
              meta: {
                title: '订单失败'
              },
            }
          ]
      },
    {
        path: "/login",
        component: () => import(/* webpackChunkName: "login" */ '../containers/Login/index'),
        meta: {
            title: '登录',
            noLogin: true,
            hideMenu: true,
        }
    },
    {
        path: "*",
        component: () => import(/* webpackChunkName: "404" */ '../containers/Test/page404'),
        meta: {
            title: '404',
            noLogin: true,
            hideMenu: true,
        }
    }
]
let isLogin = true;

/**
 *@description: 全局路由拦截 
 * @param {string} pathname 当前路由路径
 * @param {object} meta     当前路由自定义meta字段
 * @return {string}         需要跳转到其他页时, 就返回一个该页的path路径,或返回resolve该路径的promise对象
 */
const onRouteBefore = ({ pathname, meta }) => {
    //    动态修改页面title
    if (meta.title !== undefined) {
        document.title = meta.title
    }
    // 判断未登录跳转登录页
    if (!meta.noLogin) {
        console.log(pathname)
        /**
         * 1.判断用户是否登录
         * 2.判断是否已经获取用户(权限)信息 
         */ 
        if (!isLogin) {
            return '/login'
        }
    }
}

export {
    routes,
    onRouteBefore
}