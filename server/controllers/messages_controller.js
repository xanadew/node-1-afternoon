let msgs=[];
let msgId=0;

module.exports={
    create:(req,res)=>{
        let {text,time}=req.body;
        msgs.push({id,text,time});
        id++;
        res.status(200).send(msgs);
    },
    read:(req,res)=>{
        res.status(200).send(msgs);
    },
    update:(req,res)=>{
        let {text}=req.body;
        let updateID=req.params.id;
        let msgIndex=msgs.findIndex(msg=>msg.id==updateID);
        let msg=msgs[msgIndex];

        msgs[msgIndex]={
            
        }
    },
    delete:(req,res)=>{

    }
}