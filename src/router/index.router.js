const express = require('express');
const router = express.Router();


router.use(function(req,res,next){
    console.log('router from index')
    next()
})
router.get('/dhy',(req,res)=>{
    res.json({
        message:"dhy"
    })
})


module.exports= router