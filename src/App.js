import "./App.css";
import React from "react";
import { TwitterShareButton } from "react-twitter-embed";

/*class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      author: "",
      fetched: false,
      tsbOptions: { text: "Hallo-Georg" },
      refresh: null,
      // { text: `${props.text}\n${props.author}` }
    };
    this.fetchQuote = this.fetchQuote.bind(this);
  }

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote() {
    this.setState({ fetched: false });

    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          text: data.content,
          author: data.author,
          fetched: true,
          tsbOptions: { text: `${data.content}\n${data.author}` },
        });
      });
  }

  render() {
    return (
      this.state.fetched && (
        <QuoteBox
          text={`"${this.state.text}"`}
          author={`- ${this.state.author}`}
          fetchQuote={this.fetchQuote}
          options={this.state.tsbOptions}
        />
      )
    );
  }
}

const QuoteBox = (props) => {
  return (
    <div id="quote-box">
      <p id="text">{props.text}</p>
      <p id="author">{props.author}</p>
      <TwitterShareButton id="tweet" url={props.text} options={props.options} />
      <button
        id="new-quote"
        className="btn btn-primary"
        onClick={props.fetchQuote}
      >
        new quote
      </button>
    </div>
  );
};*/

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      author: "",
      fetched: false,
    };
    this.fetchQuote = this.fetchQuote.bind(this);
  }

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote() {
    this.setState({
      fetched: false,
    });
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          text: data.content,
          author: data.author,
          fetched: true,
        });
      });
  }

  render() {
    return (
      this.state.fetched && (
        <div>
          <TwitterShareButton
            id="tweet"
            url={"\n"}
            options={{ text: `${this.state.text}\n${this.state.author}` }}
          />
          <noRerender />
        </div>
      )
    );
  }
}

const noRerender = (props) => {
  return (
    <div id="quote-box">
      <p id="text">{props.text}</p>
      <p id="author">{props.author}</p>
      <button
        id="new-quote"
        className="btn btn-primary"
        onClick={this.fetchQuote}
      >
        new quote
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <main className="App-content">
        <QuoteMachine />
        <p>smd92</p>
      </main>
    </div>
  );
}

export default App;
