const Job = require("../models/job.model");

exports.addJob = async (req, res)=>{
  try {
    const {name,title,minExn, maxExn, salary, location, desc, skills} = req.body;

    if(req.user.role == "employeer"){
      await Job.create({companyName:name, jobTitle:title, minExperience:minExn, maxExperience: maxExn, salary, location, desc, skills});

      return res.json({
        message:"job added successfully",
        jobAdded:true
      })
    }

    res.json({
      message:"you are not allowed to do that",
      jobAdded:false
    })
  } catch (error) {
    console.log(error);
  }
}

exports.getJobs = async (req, res)=>{
  try {
    const jobs =await Job.findAll({});

    res.json({
      jobs
    })
  } catch (error) {
    console.log(error);
  }
}

exports.getMyJobs = async (req, res)=>{
  try {
    const jobs =await Job.findAll({where : {UserId: req.user.id}});

    res.json({
      jobs
    })
  } catch (error) {
    console.log(error);
  }
}

exports.deleteJob = async (req, res)=>{
  try {
    const {id} = req.params;

    await Job.destroy({where :{id}});

    res.json({
      message:"job deleted successfully",
      deleted : true,
    })
  } catch (error) {
    console.log(error);
  }
}