// import React, { useState, useRef, useEffect } from "react";
// import logo from './logo.svg';
// import ReactDOM from "react-dom";

import MyRouter from "./layouts/router";

import 'antd/dist/antd.css'; // for antd
import 'katex/dist/katex.css'; // for markdown

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <MyRouter />
  )
}

export default App;

