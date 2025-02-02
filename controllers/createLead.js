const Lead = require("../models/Lead");

exports.createLead = async (req, res) => {
  try {
    // console.log("request body:: ", req.body);
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const lead = await Lead.create({ name, email, phone });

    const formattedLead = lead.toObject(); // Convert to plain object
    formattedLead.leadId = formattedLead._id; // Rename _id to leadId
    delete formattedLead._id; // Remove _id field
    delete formattedLead.__v; // Remove __v field

    res.status(200).json({
      lead: formattedLead,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while creating the lead" });
  }
};
