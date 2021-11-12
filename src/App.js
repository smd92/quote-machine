import "./App.css";
import React from "react";
import { TwitterShareButton } from "react-twitter-embed";

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      author: "",
      tsbOptions: { text: "" },
      rerenderTsb: true,
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
          tsbOptions: { text: `"${data.content}"\n- ${data.author}` },
          rerenderTsb: !this.state.rerenderTsb,
        });
      });
  }

  render() {
    return (
      <QuoteBox
        text={`"${this.state.text}"`}
        author={`- ${this.state.author}`}
        fetchQuote={this.fetchQuote}
        options={this.state.tsbOptions}
        rerenderTsb={this.state.rerenderTsb}
      />
    );
  }
}

const QuoteBox = (props) => {
  return (
    <div id="quote-box">
      <p id="text">{props.text}</p>
      <p id="author">{props.author}</p>
      <TwitterShareButton
        id="tweet"
        url={`\n`}
        options={props.options}
        key={props.rerenderTsb}
      />
      <button
        id="new-quote"
        className="btn btn-primary"
        onClick={props.fetchQuote}
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
        <p>by smd92</p>
      </main>
    </div>
  );
}

export default App;
