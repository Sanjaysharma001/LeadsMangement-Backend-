const Reminder = require("../models/Reminder");

// Get all Reminders
exports.getReminders = async (req, res) => {
  try {
    const reminders = await Reminder.find({}).lean(); // Use .lean() to get plain objects

    const formattedReminders = reminders.map(reminder => ({
      reminderId: reminder._id, // Rename _id to reminderId
      title: reminder.title,
      description: reminder.description,
      createdAt: reminder.createdAt,
      updatedAt: reminder.updatedAt,
    }));

    res.status(200).json({
      reminders: formattedReminders,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Error while fetching Reminders",
    });
  }
};

// Get Reminder by ID
exports.getReminderById = async (req, res) => {
  try {
    const { id } = req.params;

    const reminder = await Reminder.findById({ _id: id }).lean(); // Use .lean() for a plain object

    if (!reminder) {
      return res.status(404).json({
        message: "Reminder not found",
      });
    }

    const formattedReminder = {
      reminderId: reminder._id, // Rename _id to reminderId
      title: reminder.title,
      description: reminder.description,
      createdAt: reminder.createdAt,
      updatedAt: reminder.updatedAt,
    };

    res.status(200).json({
      reminder: formattedReminder,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Error while fetching the Reminder by Id",
    });
  }
};
