
import './App.css';
import Home from './components/Home'
import Department from './components/department'; 
import Employee from './components/employee';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from './components/NavBar';
import Login from './components/Login';



function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <div className="App bg-dark container">
      <Switch>
        <Route path="/" component =  {Home} exact/>

        <Route path="/department" component =  {Department} exact/>
        <Route path="/employee" component =  {Employee} exact/>
        <Route path="/Login" component =  {Login} exact/>
        

      </Switch>
    
    {/* <Department/>
    <Employee/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
