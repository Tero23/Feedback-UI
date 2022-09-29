const feedbackController = require("../controllers/feedback");
const express = require("express");

const router = express.Router();

router
  .route("/")
  .get(feedbackController.getAllFeedbacks)
  .post(feedbackController.createFeedback);

router
  .route("/:id")
  .put(feedbackController.updateFeedback)
  .delete(feedbackController.deleteFeedback);

module.exports = router;
