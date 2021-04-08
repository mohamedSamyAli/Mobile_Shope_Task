import './App.css';
import { Button } from 'antd';
import { MainPage } from './pages/main/main.page';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";import { AddPage } from './pages/add/add.page';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/addpage">
            <AddPage />
          </Route>
          <Route  exact path="/mainpage">
            <MainPage />
          </Route>
          <Route path="*">
            <Redirect to="/mainpage" />
          </Route>
        </Switch>
      </Router>
  </div>
  );
}

export default App;
