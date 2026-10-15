import { Component } from "react";

class Statistics extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div>
        {options.map((btn) => {
          return (
            <button
              onClick={() => onLeaveFeedback(btn)}
              key={btn}
              type="button"
            >
              {btn[0].toUpperCase() + btn.slice(1)}
            </button>
          );
        })}
      </div>
    );
  }
}

export default Statistics;