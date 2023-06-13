import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import FormDisplay from "./components/FormDisplay";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import FormState from "./context/Form/FormState";
import Alerts from "./components/Alerts"
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  return (
    <>
      <FormState>
        <Router>
          <Navbar />
          <div className="App">
            <Alerts alert={alert} />
            <Switch>
              <Route exact path="/">
                <Home showAlert={showAlert} />
              </Route>
              <Route exact path="/login">
                <Login showAlert={showAlert} />
              </Route>
              <Route exact path="/signup">
                <Signup showAlert={showAlert} />
              </Route>
              <Route exact path="/register">
                <Registration showAlert={showAlert} />
              </Route>
              <Route exact path="/forminfo" >
                <FormDisplay />
              </Route>
            </Switch>
          </div>
        </Router>
      </FormState>
    </>
  );
}

export default App;
