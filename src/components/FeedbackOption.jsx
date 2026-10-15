import { Component } from "react";
 class FeedbackOption extends Component {
    render () {
        return (
            <div>
                <p>Good: {this.props.good}</p>
              <p>Neutral: {this.props.neutral}</p>
              <p>Bad: {this.props.bad}</p>
              <p>Total: {this.props.total}</p>
              <p>Positive feedback: {this.props.good > 0 ? this.props.positvePercentage : 0}%</p>
            </div>
        )
    }
 }


 export default FeedbackOption