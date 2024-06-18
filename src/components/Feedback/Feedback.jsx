import css from "./Feedback.module.css"

export default function Feedback({ count: { good, neutral, bad }, total, positive }) {
  return (
    <div className={css.container}>
      {total ? (
        <>
          <p className={css.feedbackItem}>Good: {good}</p>
          <p className={css.feedbackItem}>Neutral: {neutral}</p>
          <p className={css.feedbackItem}>Bad: {bad}</p>
          <p className={css.feedbackItem}>Positive: {positive}%</p>
        </>
      ) : (
        <p className={css.noFeedback}>No feedback yet</p>
      )}
    </div>
  );
};
