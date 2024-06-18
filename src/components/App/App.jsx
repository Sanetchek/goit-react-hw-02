import { useEffect, useState } from 'react'
import css from "./App.module.css"

import Description from "../Description/Description"
import Options from "../Options/Options"
import Feedback from "../Feedback/Feedback"

function App() {
  const [countFeed, setCountFeed] = useState(() => {
    const savedFeed = localStorage.getItem('count-feedbacks');
    if (savedFeed) {
      return JSON.parse(savedFeed);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = feedbackType => {
    setCountFeed({
      ...countFeed,
      [feedbackType]: countFeed[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setCountFeed({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  useEffect(() => {
    localStorage.setItem('count-feedbacks', JSON.stringify(countFeed));
  }, [countFeed]);

  const totalFeedback = countFeed.good + countFeed.neutral + countFeed.bad;
  const positiveFeedback = totalFeedback
    ? Math.round((countFeed.good / totalFeedback) * 100)
    : 0;

  return (
    <>
      <Description />

      <Options
        onFeedback={updateFeedback}
        total={totalFeedback}
        reset={resetFeedback}
      />

      <Feedback
        count={countFeed}
        total={totalFeedback}
        positive={positiveFeedback}
      />
    </>
  );
}

export default App
