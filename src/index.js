//---------------------------Shopping Cart App-------------------------------//


// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// //import Shoppingcart from './ShoppingCartApp/ShoppingCart';
// //import FetchedData from './ReactHooks/FetchedData';
// import MainSlide from './MockApiDemo/MainSlide';
// //import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <MainSlide/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//---------------------------Redux SAGA ApiCalling App-------------------------------//

// import React from 'react';
// import createSagaMiddleware from 'redux-saga';
// import { render } from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import { logger } from 'redux-logger';
// import reducer from './SagaApiCalling/reducers';
// import App from './SagaApiCalling/components/App';
// import rootSaga from './SagaApiCalling/sagas';



// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   reducer,
//   applyMiddleware(sagaMiddleware, logger),
// );

// sagaMiddleware.run(rootSaga);

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'),
// );

// if (module.hot) {
//   module.hot.accept(App);
// }


//---------------------------Async Await App-------------------------------//


// import React from 'react'
// import { render } from 'react-dom'
// import { createStore, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'
// import { logger } from 'redux-logger'
// import reducer from './AsyncAwaitApp/reducers'
// import './AsyncAwaitApp/css/style.css'
// import App from "./AsyncAwaitApp/components/App"


// const store = createStore(
//   reducer,
//   applyMiddleware(thunk, logger)
// )

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )



//-------------------------------------React Hooks Demo---------------------------------------//
// import React from 'react';
// import ReactDOM from 'react-dom';
// import FetchedData from './ReactHooks/FetchedData';
// import Stateobject from './ReactHooks/Form_1';
// import ArrayDep from './ReactHooks/Form_2';
// import Bar from './ReactHooks/Form_3';
// import Appmain from './ReactHooks/Form_4';
// import AccessDOM from './ReactHooks/Form_5';
// import 'bootstrap/dist/css/bootstrap.min.css';



// ReactDOM.render(
//     <React.StrictMode>
//       <center>
//       {/* UseState */}
//       <Stateobject/>
//       <hr/>
//       {/* UseEffect */}
//       <ArrayDep/>
//       <hr/>
//       {/* useReducer */}
//       <Bar/>
//       <br/>
//       <br/>
//       <hr/>
//       {/* useMemo */}
//       <Appmain/>
//       <hr/>
//       {/* useRef */}
//       <AccessDOM/>
//       <hr/>
//       {/*fetched Data by JSON File */}
//       <FetchedData/>
//       <hr/>
//       </center>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );

//--------------------------------------------Recoil App--------------------------------------------------//
// import React from "react";
// import ReactDOM from "react-dom";
// import { RecoilRoot } from "recoil";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(
//   <React.StrictMode>
//     <RecoilRoot>
//       <React.Suspense fallback={<div>Loading...</div>}>
//         <App />
//       </React.Suspense>
//     </RecoilRoot>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



//------------------------------------MockApi Calling App-----------------------------------------//


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './MockApiDemo2/css/app.css';    
// import './MockApiDemo/css/index.css';
// import { makeServer } from './MockApiDemo/Data/server';
// import MainNotes from './MockApiDemo/components/MainNotes'


// if (process.env.NODE_ENV === 'development') {
//   makeServer({ environment: 'development' });
// } else {
//   makeServer();
// }

// ReactDOM.render(
//     <MainNotes/>,
//   document.getElementById('root')
// );

//---------------------------------MockApiDemo--3-----------------------------------------------------//
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MockApiDemo/css/index.css'
import { makeServer } from './MockApiDemo/Data/server';
import Routers from './MockApiDemo/components/Routes';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
} else {
  makeServer();
}

ReactDOM.render(
    <Routers />,
  document.getElementById('root')
);