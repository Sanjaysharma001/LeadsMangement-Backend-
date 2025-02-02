const Activity = require("../models/Activity");

exports.updateActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const activity = await Activity.findByIdAndUpdate(
      { _id: id },
      { title, description, updateAt: Date.now() },
      { new: true } // Ensures the updated document is returned
    ).lean(); // Use .lean() for plain object

    if (!activity) {
      return res.status(404).json({
        message: "Activity not found",
      });
    }

    const formattedActivity = {
      activityId: activity._id,
      title: activity.title,
      description: activity.description,
      leadId: activity.leadId,
      createdAt: activity.createdAt,
      updatedAt: activity.updateAt,
    };

    res.status(200).json({
      activity: formattedActivity,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error while updating Activity",
    });
  }
};
