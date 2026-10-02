import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCounterFeedback = (type) => {
    this.setState((prevState) => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const positive = good / this.countTotalFeedback() * 100;
    return Maths.floor(positive)

  };

  render() {
    const option = Object.keys(this.state);

    return (
      <>
        <section>
          <h1>Please leave feedback</h1>
          <div>
            {option.map((btn) => {
              return (
                <button
                  onClick={() => this.handleCounterFeedback(btn)}
                  key={btn}
                  type="button"
                >
                  {btn}
                </button>
              );
            })}
          </div>
        </section>

        <section>
          <h2>Statistic</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()} %</p>
        </section>
      </>
    );
  }
}

export default App;
