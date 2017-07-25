import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store'
import Routers from './router'

/*
 这个history 修改了history.listen，使其传入所有location首先更新提供的store。
 这样确保了sote是最新状态，无论它是来自导航事件或者时光机的action（例如replay），增强历史记录的监听器将保持同步。
*/
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    {/*
     常用的 history 有三种形式， 但是你也可以使用 React Router 实现自定义的 history。
     browserHistory  : 使用 React Router 的应用推荐的 history
     hashHistory
     createMemoryHistory
     */}
    <Routers history={history} />
  </Provider>, document.getElementById('root'))