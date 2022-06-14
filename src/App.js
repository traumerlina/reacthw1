import logo from './logo.svg';
import './App.css';

function Header () {
  return (
    <ul>
      <li>home</li>
      <li>about</li>
      <li>blogs</li>
      <li>contact</li>
    </ul>
  )
}

function Logo () {
  return(
    <div>Logo</div>

  )
   
}

function Footer() {
  return (
    <div>
      <h1>i am footer</h1>
      <Logo/>
    </div>
  )
}
function AboutUs () {
  return (
    <div>
      <h1>React Developer Tools is a tool that allows you to inspect a React tree, including the component hierarchy, props, state, and more. </h1>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <h1> HELLO WORLD</h1>

      <Header/>
      ------------------------
      <Footer/>

      <Logo/>

      <AboutUs/>
      

       
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
