const router=require('express').Router()
const passport=require("../passport")
const insertuser=require("../controllers/user").insertuser

router.post("/signin",passport.authenticate('local', {
    successRedirect: `/auth/profile`,
    failureRedirect: '/?ein=true'
}))

router.post("/signup",(r,s)=>{
    insertuser(r,s)
})

router.get("/logout",(r,s)=>{
    if(r.isAuthenticated()) {
        r.logout()
        r.session.destroy()
        s.redirect("/")
    }
    else
    s.redirect("/")
})

router.get("/profile",(r,s)=>{
    if(r.isAuthenticated()){
        let id=r.user.id
        s.redirect(`/profile/:${id}`)
    }
    else
    s.redirect("/")
})


module.exports=router