import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Inventory from './components/Inventory'
import Finance from './components/pages/Finance'
import TradeSale from './components/pages/Trade-Sale'
import SignUp from './components/pages/SignUp'



function App(){
  return(
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Services' exact component={Inventory}/>
        <Route path='/Products' exact component={Finance}/>
        <Route path='/TradeSale' exact component={TradeSale}/>
        <Route path='/Sign-up' exact component={SignUp}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
