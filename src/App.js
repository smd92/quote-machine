import "./App.css";
import React from 'react';

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: ""
    }
  }

  componentDidMount() {
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });
    
    xhr.open("GET", "https://yusufnb-quotes-v1.p.rapidapi.com/widget/~einstein.json");
    xhr.setRequestHeader("x-rapidapi-key", "SIGN-UP-FOR-KEY");
    xhr.setRequestHeader("x-rapidapi-host", "yusufnb-quotes-v1.p.rapidapi.com");
    
    xhr.send(data);
    this.setState({
      quote: xhr.response
    });
    console.log(xhr.response);
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