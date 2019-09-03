import React from "react";
import { Switch, Route } from "react-router-dom";
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ClassList from "./components/ClassList/ClassList";
import Student from "./components/Student/Student";

export default (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={About} path="/about" />
      <Route component={ClassList} path="/classlist/:class" />
      <Route component={Student} path="/student/:id" />
    </Switch>
  );


export default class App extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <nav className="nav">
              <div>WestSide University</div>
              <div className="link-wrap">
                <div className="links">Home</div>
                <div className="links">About</div>
              </div>
            </nav>
          </div>
        </HashRouter>
      );
    }
  }

  export default (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={About} path="/about" />
    </Switch>
  );