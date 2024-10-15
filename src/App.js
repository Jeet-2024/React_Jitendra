import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Search from './components/Search';
import Loginwin from './components/Loginwin';
import { Routes,Route } from 'react-router-dom';





function App() {
  return (
    <div className="App">
     
      <Home/>
      <Loginwin/>
      <Search/>

      <Routes>
       <Route path="/" component={<Home/>}/>
       <Route path="/Login" component={<Login/>}/>

      </Routes>


    </div>
  );
}

export default App;
