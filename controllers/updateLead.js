const Lead = require("../models/Lead");

exports.updateLead = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;

    const lead = await Lead.findByIdAndUpdate(
      { _id: id }, 
      { name, email, phone, updatedAt: Date.now() }, 
      { new: true } 
    );

    
    if (!lead) {
      return res.status(404).json({
        message: "Lead not found",
      });
    }

    const formattedLead = lead.toObject();

    // Rename _id to leadId
    formattedLead.leadId = formattedLead._id;

    // Delete the original _id and __v fields
    delete formattedLead._id;
    delete formattedLead.__v;

    // Return the formatted lead in the response
    res.status(200).json({
      lead: formattedLead,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: err.message,
      message: "Cannot Update Lead",
    });
  }
};
