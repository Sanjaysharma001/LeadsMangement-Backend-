const Activity = require("../models/Activity");

exports.deleteActivity = async (req, res) => {
  try {
    const  id  = req.params.id;

    await Activity.findByIdAndDelete({ _id: id });
    res.status(200).json({
    Activity,
     
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Error while deleting an activity",
    });
  }
};
