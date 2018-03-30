const post=require("../db/models").post



module.exports={
    insertpixta:function(r,s){
post.create({
    post: r.body.post,
    userId:r.user.id
}).then((post)=>{
    s.redirect(`/profile/${r.user.id}`)
})
    },
    findpixta:function(r,s){
        post.find(
            {
                where:{
                    userId:r.user.id
                }
            }
        ).then((d)=>{s.send(d)})
    },
}