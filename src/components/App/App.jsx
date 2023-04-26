import React, { useState } from 'react';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good, neutral, bad };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(feedback[option] + 1);
        break;
      case 'neutral':
        setNeutral(feedback[option] + 1);
        break;
      case 'bad':
        setBad(feedback[option] + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return Number(good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    return Number((good * 100) / (good + neutral + bad)) || '0';
  };

  return (
    <div className="task-one">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {(good || neutral || bad) === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positive={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
