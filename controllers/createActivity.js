const Activity = require("../models/Activity");

exports.createActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Lead ID is required." });
    }

    const activity = await Activity.create({
      title,
      description,
      leadId: id,
    });

 
    res.status(200).json({
      activityId: activity._id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
      message: "An error occurred while creating the activity",
    });
  }
};
