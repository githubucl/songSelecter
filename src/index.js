// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import App from './component/App';
// import reducers from './reducers'


// ReactDOM.render(

//   <Provider store={createStore(reducers)}>
//     {/* 告诉小分发员整个公司的架构然后把小分发员存储到 Provider 的 props 里面 */}
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from "redux";
import reducers from './reducers'

import App from './component/App'

ReactDOM.render(


  <Provider store={createStore(reducers)}>
    <App />
  </Provider>, document.getElementById('root')

)

