import './App.css';
import {Switch,Route} from 'react-router-dom';
import HomePage from './Components/Pages/Homepae/homepage.component.jsx'

const HatsPage=()=>(
  <div>
    <h1>HatsPage</h1>
  </div>
)
function App() {
  return (

    <div className="App">
  <Switch>
  <Route  exact path='/' component={HomePage} />
  <Route exact path='/hats' component={HatsPage} /> 
  </Switch>
    
   
     
     

    </div>
  );
}

export default App;
