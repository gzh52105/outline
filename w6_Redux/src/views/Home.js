import React, { useState, useRef, useEffect } from 'react'
// import store from '@/store'
import { withUser, withStorage, withRedux } from '../utils/hoc'
import { connect } from 'react-redux'
// redux与react是两个独立产品，
// 1. 要在react组件中获取全局共享的数据，必须通关过store.getState()方法来实现
// 2. 如果想要在redux数据被修改时刷新react组件，必须监听state修改，并在监听回调中手动刷新组件
// const state = store.getState();
// console.log('state=',state);

// 全局引入
import * as echarts from 'echarts'
console.log('echarts', echarts);

// 按需引入
import { GridComponent } from 'echarts/components';
import { BarChart,LineChart,PieChart } from 'echarts/charts';
import { SVGRenderer,CanvasRenderer } from 'echarts/renderers';

// 安装模块
echarts.use([GridComponent,BarChart,LineChart,SVGRenderer])



function Home(props) {
    console.log('Home.props', props)
    // const [userInfo,setUserInfo] = useState(state.userInfo)
    const chartDom = useRef()
    const websiteDom = useRef()

    // 监听redux.state修改
    // store.subscribe(()=>{
    //     // 这里的代码在redux.state被修改时执行
    //     const newState = store.getState()
    //     console.log('newState',newState)
    //     setUserInfo(newState.userInfo);
    // })

    useEffect(() => {
        // 初始化图标
        var myChart = echarts.init(chartDom.current);

        const option = {
            legend:{
                show:true,
            },
            tooltip:{

            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'bar',
                    label:{
                        show:true,
                        position:'top'
                    }
                },{
                    data: [50, {value:130,name:'test'}, 324, 18, 315, 47, 60],
                    type: 'bar',
                }
            ]
        };

        // 设置配置喧嚷
        myChart.setOption(option);


        const websiteChart = echarts.init(websiteDom.current);
        var option2 = {
            title: {
                text: 'Referer of a Website',
                subtext: 'Fake Data',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    roseType:'area',
                    data: [
                        { value: 1048, name: 'Search Engine' },
                        { value: 735, name: 'Direct' },
                        { value: 580, name: 'Email' },
                        { value: 484, name: 'Union Ads' },
                        { value: 300, name: 'Video Ads' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        websiteChart.setOption(option2);
    }, [])

    return (
        <div>
            Home
            <div ref={chartDom} style={{ height: 500 }}></div>
            <div ref={websiteDom} style={{ height: 300 }}></div>
        </div>
    )
}

// 使用withRedux，以props的方式把redux数据传入组件
// Home = withRedux(function(state,dispatch){
//     return {
//         user:state.userInfo,
//         logout(){
//             console.log('logout')
//             dispatch({type:'logout'})
//         },
//         dispatch
//     }
// })(Home)
// Home = withUser(Home)
// Home = withStorage('userInfo')(Home)

// mapStateToProps: 定义共享的数据
const mapStateToProps = function (state, props) {
    // state: redux状态
    // props: 当前组件的原props
    console.log('mapStateToProps=', state, props)
    return {
        user: state.user.userInfo,
        isLogin: Boolean(state.user.userInfo._id)
    }
}
// mapDispatchToProps: 定义修改state的方法
const mapDispatchToProps = function (dispatch, props) {
    return {
        logout() {
            dispatch({ type: 'logout' })
        }
    }
}
Home = connect(mapStateToProps, mapDispatchToProps)(Home)

export default Home;