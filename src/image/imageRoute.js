const { upload } = require("../database/imageMulter")

const express = require("express");

const router =express.Router()

router.post('/upload', upload.array('photos',10),(req,res)=>{
    // console.log("req",req.files)
    // console.log('re',req.body.time)
    const data = [...req.files];
    const time = req.body.time;

    const dateString = new Date(time * 1000).toLocaleString();

    
    if (req.files) {
        const updatedData = data.map(file => {
            return {
                ...file,
                "StartTime": dateString
            };
        });
    
        res.json({
            message: "Image Uploaded",
            data: updatedData
        });
    }
});

module.exports =router
