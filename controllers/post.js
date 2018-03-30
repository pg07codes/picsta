const post=require("../db/models").post
const user=require("../db/models").user
const like=require("../db/models").like


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
        post.findAll(
            {
                order: [['updatedAt', 'DESC']],
                include:[{model: user}]
            }
        ).then((d)=>{s.send(d)})
    },
    liked:function(r,s){
    like.create({
        postid:r.params.pid,
        userid:r.params.uid

    }).then((d)=>{
        s.send("success")
    })
    },
    findlikes:function(r,s){
        like.findAll({
            attributes:['postid'],
            where:{
                userid:r.user.id
            }
        }).then((d)=>{
            s.send(d)
        })
    },
}