// import logo from './logo.svg';
// import './App.css';

import React from "react"
import ReactDOM from "react-dom"
import './style.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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



function sum(a, b) {
  return a + b
}

function primeiroJSX() {
  return (
    <div className="teste">
      Bootcamp - Introdução ao ReactJS
      <h1>Soma: {sum(10, 20)}</h1>
    </div>
  )
}


const App = () => {

  return (
    <div className="App">
      {primeiroJSX()}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)

export default App;
