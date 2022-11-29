import React, { useState, useEffect } from 'react';
import { Link, Route, Switch, BrowserRouter as Router } from 'react-router-dom';

//다국어 처리 import
import { IntlProvider } from "react-intl";
import IntlPage from './components/Login/intlage';

//인증 관련
import { signIn } from './auth/auth';
import AuthRoute from './auth/AuthRoute';

import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
//로그인 관련
// import LoginForm from './components/Login/LoginForm';
// import IntlLoginForm from './components/Login/IntlLoginForm';
import LogoutButton from './components/Login/LogoutButton';

//국가별 jsonData
import enUsMsg from "../src/lang/en-US.json";
import koMsg  from "../src/lang/ko.json";

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  //locale 선언
  const locale = localStorage.getItem("locale") ?? "ko";
  const messages = { "en-US": enUsMsg, ko: koMsg }[locale];

  const login = ({ username, password }) => setUser(signIn({ username, password }));
  const logout = () => setUser(null);

  return (
    <Router>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/profile">
          <button>Profile</button>
        </Link>
        {authenticated ? (
          <LogoutButton logout={logout} />
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </header>
      <hr />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route
            path="/login"
            render={props => (
              
              <IntlProvider locale={locale} messages={messages}>
                <IntlPage authenticated={authenticated} login={login} {...props} />
              </IntlProvider>

             // <LoginForm authenticated={authenticated} login={login} {...props} />
            )}
          />
          <AuthRoute
            authenticated={authenticated}
            path="/profile"
            render={props => <Profile user={user} {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
