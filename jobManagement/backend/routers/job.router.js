const express = require("express");
const { isLoginUser } = require("../middlewares/auth");
const { addJob, getJobs, getMyJobs } = require("../controllers/job.controller");
const router = express.Router();

router.post('/addJob', isLoginUser, addJob);
router.get("/getJobs", getJobs);
router.get("/myJobs", isLoginUser, getMyJobs);

module.exports = router;