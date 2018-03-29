const router=require('express').Router()
const tobeused=require("../controllers/user")

router.get("/:id",(r,s)=>{
    let d=`<h1>welcome ${r.user.name}</h1><p>your id is ${r.user.id}</p>`
    s.send(d);
})

module.exports=router