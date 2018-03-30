const router=require('express').Router()
const tobeused=require("../controllers/user")

router.get("/:id",(r,s)=>{
    if(r.isAuthenticated()) {
        if(r.user.id.toString()===r.params.id)
            s.render('profile',{title:"Feed",name:r.user.name})
        else{
            r.logout()
            r.session.destroy()
            s.send("Security Breach detected! Logging you out of your account!!")
        }
    }
    else
        s.redirect("/")
})

module.exports=router