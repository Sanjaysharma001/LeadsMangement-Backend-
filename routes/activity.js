const express = require("express");

const router = express.Router();

const {createActivity} = require("../controllers/createActivity");
const{deleteActivity} = require("../controllers/deleteActivity");
const{getActivity,getActivityById} = require("../controllers/getActivity");
const {updateActivity} = require("../controllers/updateActivity");


router.post("/lead/:id/activity",createActivity);
router.delete("/lead/:id/activity/:id",deleteActivity);
router.get("/lead/:id/activites",getActivity);
router.get("/lead/:id/activity/:id",getActivityById);
router.put("/lead/:id/activity/:id",updateActivity);

module.exports = router;