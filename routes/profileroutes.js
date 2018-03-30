const router=require('express').Router()
const insertpixta=require("../controllers/post").insertpixta
const findpixta=require("../controllers/post").findpixta

router.get("/:id",(r,s)=>{
    if(r.isAuthenticated()) {
        if(r.user.id.toString()===r.params.id)
            s.render('profile',{title:"Feed",id:r.user.id})
        else{
            r.logout()
            r.session.destroy()
            s.send("Security Breach detected! Logging you out of your account!!")
        }
    }
    else
        s.redirect("/")
})
router.post("/postpixta",(r,s)=>{
    if(r.isAuthenticated()){
        insertpixta(r,s)
    }
    else
        s.redirect("/")
})

router.get("/:id/getpixta",(r,s)=>{
    if(r.isAuthenticated())
        findpixta(r,s)
    else
        s.redirect("/")
})
module.exports=router