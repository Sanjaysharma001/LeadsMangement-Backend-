const express = require("express");

const router = express.Router();

const {createReminder} = require("../controllers/createReminder");
const{deleteReminder} = require("../controllers/deleteReminder");
const{getReminders,getReminderById} = require("../controllers/getReminder");
const {updateReminder} = require("../controllers/updateReminder");


router.post("/lead/:id/reminder",createReminder);
router.delete("/lead/:id/reminder/:id",deleteReminder);
router.get("/lead/:id/reminders",getReminders);
router.get("/lead/:id/reminder/:id",getReminderById);
router.put("/lead/:id/reminder/:id",updateReminder);

module.exports = router;