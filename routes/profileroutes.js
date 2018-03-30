const router=require('express').Router()
const insertpixta=require("../controllers/post").insertpixta
const findpixta=require("../controllers/post").findpixta
const liked=require("../controllers/post").liked
const findlikes=require("../controllers/post").findlikes

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

router.get("/:id/getlikes",(r,s)=>{
    if(r.isAuthenticated())
        findlikes(r,s)
    else
        s.redirect("/")
})
router.get("/",(r,s)=>{
    if(r.isAuthenticated()){
        s.redirect(`/profile/${r.user.id}`)
    }
    else
        s.redirect("/")
})

router.post("/:uid/like/:pid",(r,s)=>{
    liked(r,s)
})

module.exports=router