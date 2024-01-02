const express = require('express');

const router=express.Router();

router.post('/',(req,res)=>{
    obj = {
        title:"hello notes",
        desc:"this is note router",
        number:56
    }
    res.json(obj);
})

module.exports = router;