import './App.css';
import {Route} from "react-router-dom"
import { Landing,Home } from './views';


function App() {
  return (
    <div>
    <Route exact path ="/" component={Landing}/>
    <Route path ="/home" component={Home}/>
    </div>
  );
}

export default App;
