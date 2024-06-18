import css from "./Options.module.css"

export default function Options({ onFeedback, total, reset }) {
  return (
    <div className={css.container}>
      <button
        type="button"
        className={css.button}
        onClick={() => onFeedback('good')}
      >
        Good
      </button>
      <button
        type="button"
        className={css.button}
        onClick={() => onFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        type="button"
        className={css.button}
        onClick={() => onFeedback('bad')}
      >
        Bad
      </button>

      {total ? (
        <button
          type="button"
          className={css.button}
          onClick={() => reset()}
        >
          Reset
        </button>
      ) : (
        ''
      )}
    </div>
  );
};
