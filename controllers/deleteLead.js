const Lead = require("../models/Lead");

exports.deleteLead = async (req, res) => {
  try {

   
    const id = req.params.id;

    await Lead.findByIdAndDelete({_id:id});
    res.status(200).json({
     
      Lead
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while Deleting the lead" });
  }
};
