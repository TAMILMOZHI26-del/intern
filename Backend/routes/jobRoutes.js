// backend/routes/jobRoutes.js
const express = require("express");
const router = express.Router();
const jobController = require("../Controllers/jobController");

router.post("/", jobController.addJob);
router.get("/", jobController.getJobs);
router.put("/:id", jobController.updateStatus);
router.delete("/:id", jobController.deleteJob);

module.exports = router;
