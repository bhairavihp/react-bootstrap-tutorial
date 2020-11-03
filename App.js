import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Accordian from './Accordian';

import NaviBar from './NaviBar';
import Jewelry from './Jewelry';
import Home from './Home';
import Handbags from './Handbags';
import SignIn from './SignIn';
import CreateAccount from './CreateAccount';
import Women from './Grid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Link from './Link';

//import Home from './Home';
//<Home></Home>
function App() {
  return (
    <div>
      <NaviBar></NaviBar>
      
      <Router>
      <Switch>
      
        <Route path="/" component={Home} exact />
        <Route path="/jewel" component={Jewelry} />
        <Route path="/account" component={CreateAccount} />
        <Route path="/signin" component={SignIn} />
        <Route path="/women" component={Women} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
