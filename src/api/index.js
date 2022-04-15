/**
 * @description: 公共api接口集合
 * @author: Fang
 * @Date : 2022-04-13  
 * @LasteEditTime : 2022-04-13 
 * @LasteEditors : Fang
 */ 
export default {
    getUserInfo () {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('got userInfo')
                resolve({
                    data: {
                        userId: '666',
                        nickName: "Neo",
                        accessIdList: ['10000','10001','10002']
                    },
                    errorCode: 0
                })
            },200)
        })
    }
}