import React from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Control } from './Control';
import { Section } from './Section';
import { Notificstion } from './Notification';
export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  click = event => {
    const name = event.target.dataset.action;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.positivePercentage;
    let haveFeedback;
    total
      ? (haveFeedback = (
          <Control
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ))
      : (haveFeedback = <Notificstion message={'There is no feedback'} />);

    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.click}
          />
        </Section>
        <Section title={'Statistick'}>{haveFeedback}</Section>
      </div>
    );
  }
}
// hendleGood = () => {
//   this.setState(prevState => {
//     return {
//       good: prevState.good + 1,
//     };
//   });
// };
// hendleNeutral = () => {
//   this.setState(prevState => {
//     return {
//       neutral: prevState.neutral + 1,
//     };
//   });
// };
// hendleBad = () => {
//   this.setState(prevState => {
//     return {
//       bad: prevState.bad + 1,
//     };
//   });
// };
