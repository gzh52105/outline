import Taro from '@tarojs/taro'
import { Component } from 'react'
import { View, Text,Button } from '@tarojs/components'

import {AtAvatar,AtButton} from 'taro-ui'
import {request} from '../../utils'
import './index.scss'

console.log('Taro',Taro)

const app = Taro.getApp();
console.log('app=',app,request)

export default class Index extends Component {
  state = {
    msg:'hello'
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  goto = ()=>{
    // 编写通用代码
    Taro.navigateTo({
      url:'/pages/mine/index'
    })
  }
  render () {
    return (
      // 在Taro中不能使用html标签
      <View className='index' style={{padding:10}}>
        <Text>Hello Taro!</Text>
        <View>{this.state.msg}</View>
        <Button type="primary" size="mini" onClick={this.goto}>我的</Button>
        <AtButton type="primary">AtButtosn</AtButton>
      </View>
    )
  }
}
