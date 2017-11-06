/**
 * Created by Rabbit on 2017/11/3.
 */

import React from 'react';
import { StyleSheet, Text, View, BackHandler, StatusBar, DeviceEventEmitter } from 'react-native';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

import {
    Scene,
    Router,
    Actions,
    Reducer,
    ActionConst,
    Overlay,
    Tabs,
    Modal,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux';
import { Theme } from 'teaset';

import TabIcon from './Component/TabIcon';
// import TabMiddleIcon from './Component/TabMiddleIcon'


import Test1 from './Pages/Test1';
import Test2 from './Pages/Test2';
import Test3 from './Pages/Test3';
import Test4 from './Pages/Test4';


import Login from './Pages/Login';

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        // console.log('ACTION:',action,Actions.currentScene)
        // console.log('Actions:', Actions);
        return defaultReducer(state, action);
    };
};

const getSceneStyle = () => ({
    backgroundColor: Theme.backgroundColor,
    // shadowOpacity: 1,
    // shadowRadius: 3,
});

const router = (...props) => (
    <Router createReducer={reducerCreate}
            getSceneStyle={getSceneStyle}
    >
        <Modal
            hideNavBar
            transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}
        >
            <Stack hideNavBar headerMode='screen' key="root">
                <Tabs
                    key="tabbar"        // 唯一标识
                    wrap={true}         // 自动使用自己的导航栏包装每个场景
                    showLabel={true}   // 显示文字
                    tabBarStyle={styles.tabBarStyle} // tabBar的样式
                    swipeEnabled={false}// 是否可以滑动
                    headerMode='screen' // 页面切换方式
                    icon={TabIcon}      // 自定义Icon显示方式
                    lazy={true}         // 是否默认渲染tabbar
                    tabBarPosition={'bottom'}       // tabbar在顶部还是底部，iOS默认顶部，安卓默认顶部
                    activeBackgroundColor='#aaa'    // 选中tabbar的背景色
                    inactiveBackgroundColor='#4ECBFC' // 未选中tabbar的颜色
                >
                    <Stack key="Test1"
                           title={'识兔'}
                        // image={Images.xxx}
                        // selectedImage={Images.xxx}
                    >
                        <Scene component={Test1} key="Test1_key"/>
                    </Stack>
                    <Stack key='Test2'
                           title='百思'
                    >
                        <Scene component={Test2} key="Test2_key"/>
                    </Stack>
                    <Stack key="Test3"
                           title='我的'
                    >
                        <Scene component={Test3} key="Test3_key"/>
                    </Stack>
                </Tabs>
            </Stack>
            <Stack gesturesEnabled={false} hideNavBar key="Login">
                <Scene
                    key="LoginModal"
                    component={Login}
                    gesturesEnabled={false}
                    onExit={() => console.log('onExit')}
                    onLeft={Actions.pop}
                />
            </Stack>

        </Modal>
    </Router>
);

export default router;

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: '#eee',
        height:49,
    },
});