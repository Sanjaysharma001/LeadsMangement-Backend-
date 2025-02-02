const Reminder = require("../models/Reminder");

// Delete Reminder
exports.deleteReminder = async (req, res) => {
  try {

   
    const id = req.params.id;

    await Reminder.findByIdAndDelete({_id:id});
    res.status(200).json({
     
      Reminder,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while Deleting the Reminder" });
  }
};
