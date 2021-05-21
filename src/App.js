import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
function App() {
  return (
    <div className="App">
      {/* router helps us to move between pages whithout having to reflesh */}
       <Router>
         <Header/>
         <Switch>
           <Route exact path="/">
             <Login/>
           </Route>
           <Route path='/home'>
             <Home/>
           </Route>
           <Route path='/detail/:id'>
             <Detail/>
           </Route>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
