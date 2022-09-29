import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  return (
    <div className="feedback-stats">
      <div>Total Feedbacks: {feedback.length}</div>
      <div>
        Average Rating:
        {feedback.length !== 0
          ? feedback.reduce((acc, el) => acc + el.rating, 0) / feedback.length
          : 0}
      </div>
    </div>
  );
}

export default FeedbackStats;
