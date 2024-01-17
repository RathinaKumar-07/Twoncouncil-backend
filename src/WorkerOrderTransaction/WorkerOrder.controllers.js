const {createWorkOrder, orderImage, getAllWorkOrder, getAllworkOrderTransaction} =require('./WorkerOrder.services')
module.exports ={
  createWorkOrder :(req,res)=>{
        const body =req.body
        createWorkOrder(body,(err,result)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:"Internal server Error"
                })
            }
            return res.status(200).json({
                success:1,
                message:"Inserted Successfully"
            })
        })
  },
  createImageTransaction :(req,res)=>{
    const body =req.body
    console.log(body)
    orderImage(body,(err,result)=>{
        if(err){
            console.log(err)
            return res.status(500).json({
                success:0,
                message:"Internal Server Error"
            })

        }
        return res.status(200).json({
            success:1,
            message:"Inserted Successfully"
        })
    })

  },
  getAllWorkOrder:(req,res)=>{
    getAllWorkOrder((err,result)=>{
        if(err){
            return res.status(500).json({
                success:0,
                message:"Internal server error"
            })
        }
         return res.status(200).json({
            success:1,
            data:result
         })
    })
  },
  getAllWorkOrderTransaction :(req,res)=>{
    getAllworkOrderTransaction((err,result)=>{
        if(err){
            console.log(err)
            res.status(500).json({
                success:0,
                message:"Interal Server Error"
            })
        }
        return res.status(200).json({
            success:1,
            data:result
        })
    })
    
  },
 
}