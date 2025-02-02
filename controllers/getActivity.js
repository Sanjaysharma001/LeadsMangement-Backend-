const Activity = require("../models/Activity");

exports.getActivity = async (req, res) => {
  try {
    const activities = await Activity.find({}).lean(); // Use .lean() to get plain JavaScript objects

    const formattedActivities = activities.map(activity => {
      return {
        activityId: activity._id,
        title: activity.title,
        description: activity.description,
        leadId: activity.leadId,
        createdAt: activity.createdAt,
        updatedAt: activity.updateAt,
      };
    });

    res.status(200).json({
      activities: formattedActivities,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Error while fetching Activity",
    });
  }
};

exports.getActivityById = async (req, res) => {
  try {
    const { id } = req.params;

    const activity = await Activity.findById({ _id: id }).lean(); // Use .lean() for plain object

    if (!activity) {
      return res.status(404).json({
        message: "Activity not found",
      });
    }

    const formattedActivity = {
      activityId: activity._id,
      title: activity.title,
      description: activity.description,
      // leadId: activity.leadId,
      createdAt: activity.createdAt,
      updatedAt: activity.updateAt,
    };

    res.status(200).json({
      activity: formattedActivity,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error while fetching the Activity by Id",
    });
  }
};
