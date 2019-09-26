import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// import router from './routers'

// import modelIndex from './models'

// 1.引入dva
// import Dva from 'dva'

// // 2 创建dva实例
// let app = new Dva()
// // 3 配置路由
// app.router(router)
// //  4 app.use 安装插件
// // app.use()
// //  5.注册模块app.model({})
// app.model(modelIndex)
// //  5.5 卸载
// // app.unmodel()
// //  6. 启动app
// app.start('#root')

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
