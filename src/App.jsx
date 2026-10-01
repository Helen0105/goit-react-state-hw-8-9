import "./App.css";
import { Component } from "react";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const option = Object.keys(this.state);
    console.log(option);
    
    return (
      <>
        <section>
          <h1>Please leave feedback</h1>
          <div>
            {option.map((btn) => {
              return <button key={btn} type="button">{btn}</button>;
            })}
          </div>
        </section>

        <section>
          <h2>Statistic</h2>
        </section>
      </>
    );
  }
}

export default App;