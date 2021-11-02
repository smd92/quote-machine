import "./App.css";
import React from "react";

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      author: "",
    };
    this.fetchQuote = this.fetchQuote.bind(this);
  }

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          text: data.content,
          author: data.author,
        });
      });
  }

  render() {
    return (
      <QuoteBox
        text={`"${this.state.text}"`}
        author={`- ${this.state.author}`}
        fetchQuote={this.fetchQuote}
      />
    );
  }
}

const QuoteBox = (props) => {
  return (
    <div id="quote-box">
      <p id="text">{props.text}</p>
      <p id="author">{props.author}</p>
      <span>
        <button id="new-quote" className="btn btn-primary" onClick={props.fetchQuote}>
          new quote
        </button>
        <a id="tweet-quote" href="#">
          tweet quote
        </a>
      </span>
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
