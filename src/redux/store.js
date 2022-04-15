/**
 * @Description: 全局状态管理
 * @Author: Neo
 * @Date: 2022-04-14
 * @LastEditTime: 2022-04-14
 * @LastEditors: Neo
 */
 import { createStore } from 'redux'
 import userReducer from "./reducers/user"
 export default createStore(userReducer)