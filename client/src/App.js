import './App.css';
import {Route} from "react-router-dom"
import { About, Detail, Form, Home, Landing } from './views';
import axios from 'axios';
axios.defaults.baseURL ="pipokemon-production-f27a.up.railway.app/"


function App() {
  return (
    <div>
    <Route exact path ="/" component={Landing}/>
    <Route path ="/home" component={Home}/>
    <Route path ="/detail/:id" component={Detail}/>
    <Route path ="/form" component={Form}/>
    <Route path ="/about" component={About}/>
    </div>
  );
}

export default App;
