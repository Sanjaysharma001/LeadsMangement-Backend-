const express = require("express");

const router = express.Router();

const { createLead } = require ("../controllers/createLead")
const {deleteLead} = require("../controllers/deleteLead")
const {getLead,getLeadById} = require("../controllers/getLead")
const {updateLead} = require("../controllers/updateLead")


// console.log("createLead",createLead)
router.delete("/lead/:id",deleteLead);
router.get("/leads",getLead);
router.get("/lead/:id",getLeadById);

router.put("/update/lead/:id",updateLead);

router.post("/create/lead", createLead);

module.exports = router;
