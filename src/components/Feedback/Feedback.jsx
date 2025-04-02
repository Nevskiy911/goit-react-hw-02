import style from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback }) => {
  return (
    <div>
      <ul className={style.list}>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {totalFeedback}</li>
        <li>
          Positive:
          {totalFeedback > 0
            ? ((feedback.good / totalFeedback) * 100).toFixed(1) + "%"
            : "0%"}
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
