const { Op, Sequelize } = require("sequelize");
const { feedback: Feedback } = require("../models/index");

exports.createFeedback = async (req, res) => {
  try {
    const { text, rating } = req.body;
    const feedback = await Feedback.create({
      text,
      rating,
    });
    res.status(201).json({
      feedback,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.deleteFeedback = async (req, res) => {
  try {
    await Feedback.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      status: "success",
      message: "Feedback successfully deleted!",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.updateFeedback = async (req, res) => {
  try {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["text", "rating"];
    const isValidOperation = updates.every((update) =>
      allowedUpdates.includes(update)
    );
    if (!isValidOperation)
      return res.status(404).json({
        status: "fail",
        message: "Invalid Update!",
      });
    const feedback = await Feedback.findOne({ where: { id: req.params.id } });
    if (!feedback) {
      return res.status(404).json({
        status: "fail",
        message: "There is no such feedback id!",
      });
    }
    updates.forEach((update) => (feedback[update] = req.body[update]));
    await feedback.save();
    res.status(200).json({
      status: "success",
      message: "Feedback Updated!",
      feedback,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.findAll();
    res.status(200).json({
      feedbacks,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
