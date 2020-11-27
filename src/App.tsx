import React from 'react';
import '@/assets/App.css';
import {HashRouter, Route} from 'react-router-dom'
/** ========redux======== **/
import {Provider} from 'react-redux'
import store from '@/redux/index'
import '@/assets/styles/base.less'
/** ========utils======== **/
import LazyLoad from '@/utils/lazyload'
/** ========Components======== **/
const Index = LazyLoad( () => import('@/views/index/index'))
const Task = LazyLoad( () => import('@/views/task/task'))
const Turntable = LazyLoad( () => import('@/views/example/turntable'))
const Toast = LazyLoad( () => import('@/views/example/toast'))
const ReduxConnect = LazyLoad( () => import('@/views/example/reduxConnect'))
const ForwardRef = LazyLoad( () => import('@/views/example/forwardRef'))

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Route path='/' exact component={Index} />
        <Route path='/task/:id' exact component={Task} />
        <Route path='/turntable' exact component={Turntable} />
        <Route path='/toast' exact component={Toast} />
        <Route path='/forwardRef' exact component={ForwardRef} />
        <Route path='/reduxConnect' exact component={ReduxConnect} />
      </HashRouter>
    </Provider>
  );
}

export default App;
