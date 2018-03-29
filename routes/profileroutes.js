const router=require('express').Router()
const tobeused=require("../controllers/user")

router.get("/:id",(r,s)=>{
    if(r.isAuthenticated())
s.render('profile',{title:"Feed"})
    else
        s.redirect("/")
})


module.exports=router