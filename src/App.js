import React from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'

const TopicsList = props => {
  return (
    <div>
      <Link to={`${props.match.url}/13`}>to 13</Link>
      <Link to={`${props.match.url}/14`}>to 14</Link>
      <Link to={`${props.match.url}/16`}>to 16</Link>
    </div>
  );
}

const TopicDetail = props => {
  return (
    <div>
      {props.match.params.topicId}
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' component={HomePage} exact={true} />
        <Route path='/topics' component={TopicsList} exact={true}/>
        <Route path='/topics/:topicId' component={TopicDetail} />
      </Switch>
    </div>
  );
}

export default App;
