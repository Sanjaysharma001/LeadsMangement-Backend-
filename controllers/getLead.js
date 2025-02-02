const Lead = require("../models/Lead");

exports.getLead = async (req, res) => {
  try {
 
    const leads = await Lead.find({});

    // Map through the leads to format each lead
    const formattedLeads = leads.map(lead => {
      const formattedLead = lead.toObject(); // Convert to plain JavaScript object
      formattedLead.leadId = formattedLead._id; // Rename _id to leadId
      delete formattedLead._id; // Remove _id field
      delete formattedLead.__v; // Remove __v field
      return formattedLead;
    });

    res.status(200).json({ leads: formattedLeads });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "An error occurred while getting the leads",
    });
  }
};

exports.getLeadById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id:::", id);

    const lead = await Lead.findById({ _id: id });

    
    if (!lead) {
      return res.status(404).json({
        message: "Lead not found",
      });
    }

    // Convert the lead to plain object and modify the fields
    const formattedLead = lead.toObject();
    formattedLead.leadId = formattedLead._id; // Rename _id to leadId
    delete formattedLead._id; // Remove _id field
    delete formattedLead.__v; // Remove __v field

    res.status(200).json({ lead: formattedLead });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "An error occurred while getting the lead by Id",
    });
  }
};
