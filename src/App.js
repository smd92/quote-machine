import "./App.css";
import React from 'react';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <QuoteBox />
    );
  }
}

const QuoteBox = (props) => {
  return (
    <div id="quote-box">
      <p id="text">text</p>
      <p id="author">author</p>
      <button id="new-quote" className="btn btn-primary">new quote</button>
      <a id="tweet-quote" href="#">tweet quote</a>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p id="page-title">Quote Machine by smd92</p>
      </header>
      <main className="App-content">
        <QuoteMachine />
      </main>
    </div>
  );
}

export default App;