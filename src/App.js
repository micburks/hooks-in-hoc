import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      App - {props.count}
    </div>
  );
}

function withState(Component) {
  return function withStateHOC(props) {
    const [count] = React.useState(0);
    return (
      <Component {...props} count={count}/>
    );
  }
}

export default withState(App);
