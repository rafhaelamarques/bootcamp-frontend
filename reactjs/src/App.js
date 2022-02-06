import logo from './logo.svg';
import './App.css';

function App() {
    return ( <
        div className = "App" >
        <
        header className = "App-header" >
        <
        img src = { logo }
        className = "App-logo"
        alt = "logo" / >
        <
        p >
        Edit < code > src / App.js < /code> and save to reload. <
        /p> <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React <
        /a> <
        /header> <
        /div>
    );
}

export default App;

function primeiroJSX() {
    return ( <
        div className = "teste" >
        Bruno Carneiro - Introdução ao ReactJS <
        h1 > Soma: { sum(10, 20) } < /h1> < /
        div >
    )
}


const App = () => {

    return ( <
        div className = "App" > { primeiroJSX() } <
        /div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render( < App / > , rootElement)