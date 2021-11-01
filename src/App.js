import "./App.css";
import React from 'react';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <QuoteBox />
      </main>
    );
  }
}

const QuoteBox = (props) => {
  return (
    <div id="quote-box">
      <p id="text">text</p>
      <p id="author">author</p>
      <button id="new-quote">new quote</button>
      <a id="tweet-quote" href="#">tweet quote</a>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <QuoteMachine />
      </header>
    </div>
  );
}

export default App;