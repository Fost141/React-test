import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className="page">
      <div className="container">
        <div className="header">
          <Link to="/"><h1 className="site_name">Hello React</h1></Link>
          <div className="nav">
            <Link to="/about">О нас</Link>    
            <Link to="/blog">Блог</Link>
          </div>    
        </div>
        <img src="/img/header_logo.jpg" alt="logo" title="logo"/>       
      </div>
    </div>
  );
}

export default App;
