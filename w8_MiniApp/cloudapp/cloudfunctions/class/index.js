// 云函数入口文件
const cloud = require('wx-server-sdk'); // 等效于wx.cloud

// 初始化
cloud.init({
  // env:'class-test-cvn29',
  // cloud.DYNAMIC_CURRENT_ENV: 指当前云函数所在的环境
  env:cloud.DYNAMIC_CURRENT_ENV
})

const db = cloud.database()

const col = db.collection('class')



// 云函数入口函数
exports.main = async (event, context) => {
  // 读取class表所有数据
  const {data} = await col.get()
  console.log('data=',data);
  console.log('event=',event);

  return data;
}