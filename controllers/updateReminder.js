const Reminder = require("../models/Reminder");
// Update Reminder

exports.updateReminder = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const reminder = await Reminder.findByIdAndUpdate(
      { _id: id },
      { title, description, updateAt: Date.now() },
      { new: true }
    ).lean();

    if (!reminder) {
      return res.status(404).json({
        message: "reminder not found",
      });
    }
    const formattedReminder = {
      reminderId: reminder._id, // Rename _id to reminderId
      title: reminder.title,
      description: reminder.description,
      leadId: reminder.leadId,
      createdAt: reminder.createdAt,
      updatedAt: reminder.updatedAt,
    };

    res.status(200).json({
      reminder: formattedReminder,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      messsage: { error: "Error while Updating Reminder" },
    });
  }
};
