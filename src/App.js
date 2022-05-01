import './App.css';
import Navbar from './Components/Navbar';
import Productos from './Components/Productos';
import CheckoutPage from './Components/CheckoutPage';
import Producto from './Components/Producto';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import { useEffect } from 'react';
import { auth } from './firebasec';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import { onAuthStateChanged } from 'firebase/auth';


function App() {

  const [{user}, dispatch] = useStateValue();


  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/signUp'>
            <SignUp/>
          </Route>
          <Route path='/signIn'>
            <SignIn/>
          </Route>
          <Route path='/checkout-page'>
            <CheckoutPage/>
          </Route>
          <Route path='/'>
            <Productos/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
