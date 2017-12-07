import * as React from 'react';
import Container from './components/layout/Container';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container>
          <img className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </Container>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
