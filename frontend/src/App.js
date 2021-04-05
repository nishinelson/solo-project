import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import GroupList from "./components/GroupList";
import EventList from "./components/EventList";
import GroupPage from "./components/GroupPage";
import EventPage from "./components/EventPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/groups" exact={true}>
            <GroupList/>
          </Route>
          <Route path="/events/:city/:state" exact={true}>
            <EventList/>
          </Route>
          <Route path="/groups/:id">
            <GroupPage/>
          </Route>
          <Route path="/events/:id">
            <EventPage/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
