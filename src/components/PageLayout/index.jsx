/*
 * @Description: 页面整体布局组件
 * @Author: Neo
 * @Date: 2022-04-14
 * @LastEditTime: 2022-04-14
 * @LastEditors: Neo
 */

import './index.css'
import { Outlet } from 'react-router-dom'
import HeadBar from './headBar'
import SideBar from './sideBar'
import store from '../../redux/store'

export default function PageLayout () {
    return (
        <div className='PageLayout-index'>
            <SideBar />
            <div className="appMainWrap">
                <HeadBar />
                <div className="appMain">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}