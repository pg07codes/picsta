const Sequelize=require('sequelize')
const dt=Sequelize.DataTypes

const dbconfig=require('../config').DB

const db=new Sequelize(dbconfig.NAME,dbconfig.USER,dbconfig.PASSWORD,{
    dialect:'mysql'
})

//define models here
const user=db.define("user",{
    id:{
        autoIncrement:true,
        primaryKey:true,
        type:dt.INTEGER
    },
    name:{
        allowNull:false,
        type:dt.STRING
    },
    email:{
        allowNull:false,
        unique:true,
        type:dt.STRING
    },
    password:{
        allowNull:false,
        type:dt.STRING
    }
})

const post=db.define("post",{
    postid:{
        autoIncrement:true,
        primaryKey:true,
        type:dt.INTEGER
    },
    post:{
        allowNull:false,
        type:dt.STRING
    }
})

user.hasMany(post)
post.belongsTo(user)

db.sync().then(()=>console.log("db is synced"))


module.exports={db,user,post}