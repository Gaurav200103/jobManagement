const sequelize = require("../utils/db");
const Sequelize = require("sequelize");
const {DataTypes} = require("sequelize");


const Job= sequelize.define("Job",{
  companyName:{
    type:Sequelize.STRING,
    allowNull : false
  },
  jobTitle:{
    type:Sequelize.STRING,
    allowNull:false
  },
  minExperience:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  maxExperience:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  salary:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  location:{
    type:Sequelize.STRING,
    allowNull:false
  },
  desc:{
    type:DataTypes.STRING,
    allowNull:false
  },
  skills:{
    type:DataTypes.STRING,
    allowNull:false
  }
},{
  timestapm:true
})

module.exports = Job;