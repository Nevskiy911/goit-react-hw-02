import style from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
  return (
    <div>
      <ul className={style.list}>
        <li>
          <button onClick={() => updateFeedback("good")}>Good</button>
        </li>
        <li>
          <button onClick={() => updateFeedback("neutral")}>Neutral</button>
        </li>
        <li>
          <button onClick={() => updateFeedback("bad")}>Bad</button>
        </li>
        {totalFeedback > 0 && (
          <li>
            <button onClick={resetFeedback}>Reset</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Options;
