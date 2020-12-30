const express = require('express');

const router = express.Router();



router.get('/list',(req,res)=>{
    res.json({
        list:[
            {
                id:1,
                name:'dhy'
            }
        ]
    })
})



module.exports = router