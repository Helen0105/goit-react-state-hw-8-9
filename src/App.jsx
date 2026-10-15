import "./App.css";
import { Component } from "react";
import Statistics from "./components/Statistics";
import FeedbackOption from "./components/FeedbackOption";

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
    const total = this.countTotalFeedback();
    
    if (total === 0) return 0;

    const positive = (good / total) * 100;
    return Math.floor(positive);
  };

  render() {
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();

    return (
      <>
        <section>
          <h1>Please leave feedback</h1>
          {/* Компонент для отрисовки кнопок */}
          <FeedbackOption 
            options={options} 
            onLeaveFeedback={this.handleCounterFeedback} 
          />
        </section>

        <section>
          <h2>Statistics</h2>
          {totalFeedback > 0 ? (
            <Statistics 
              good={this.state.good} 
              neutral={this.state.neutral} 
              bad={this.state.bad} 
              total={this.countTotalFeedback} 
              positivePercentage={this.countPositiveFeedbackPercentage()} 
            />
          ) : (
            <p>No feedback given yet</p>
          )}
        </section>
      </>
    );
  }
}

export default App;