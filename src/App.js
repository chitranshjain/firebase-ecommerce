import "./App.css";
// We will use 3rd party library for this purpose we have already installed it.
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./Client/Pages/Authentication/SignUp";
import SignIn from "./Client/Pages/Authentication/SignIn";
import UserRegistration from "./Client/Pages/Authentication/UserRegistration";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup" exact component={SignUp} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/user/register" exact component={UserRegistration} />
        </Switch>
      </Router>
    </div>
  );
}

// Ok, our routes are working fine, now lets get to designing the ui!

export default App;
