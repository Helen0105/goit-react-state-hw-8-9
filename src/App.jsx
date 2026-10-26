import "./App.css";
import { Component } from "react";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOption";
import Section from "./components/Section";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCounterFeedback = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
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
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions 
            options={options} 
            onLeaveFeedback={this.handleCounterFeedback} 
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback > 0 ? (
            <Statistics 
              good={this.state.good} 
              neutral={this.state.neutral} 
              bad={this.state.bad} 
              total={totalFeedback} 
              positivePercentage={positivePercentage} 
            />
          ) : (
            <Notification message="There is no feedback " />
          )}
        </Section>
      </>
    );
  }
}

export default App;