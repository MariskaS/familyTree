import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Members from "./pages/Members";
import MemberDetail from "./components/members/MemberDetail";
import ErrorPage from "./pages/ErrorPage";

class App extends React.Component {

  render() {
    return (
      <main className="ft-main">
        <div className="ft-main__container">
          <Router>
            <Switch>
              <Route exact path="/" component={Members}/>
              <Route path="/member-detail/:memberId" component={MemberDetail}/>
              <Route component={ErrorPage}/>
            </Switch>
          </Router>
        </div>
      </main>
    );
  }
}

export default App;
