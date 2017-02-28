const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
      </div>
    );
  }
}

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById('app-root-container'));
};
