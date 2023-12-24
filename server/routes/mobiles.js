const router = require('express').Router();
const Mobile = require('../models/mobile');
const cors = require('cors')

router.get("/mobiles",async(req,res)=>{

    try {

        // get query parameters
        const search = req.query.search || "";
        const sortBy =req.query.sortBy || "price";
        var order = req.query.order || 1;
        const device_type = req.query.device ? req.query.device.split(',') : ["Smartphone","Feature Phone","Tablet","Phablet","Smartwatch"];
        var max_price =  req.query.maxPrice || 826474643;
        const os_type = req.query.os ? req.query.os.split(',') : ["Android", "iOS", "Windows", "macOS", "BlackBerry", "Symbian", "Firefox OS", "Ubuntu Touch", "Tizen", "KaiOS","ZenithOS"];
       
        // check order for sorting 
        if(order==="Ascending") order=1;
        else if(order==="Descending") order=-1;

        // Price or Memory in Ascending or Descending
        const sort ={}
        sort[sortBy] = order;
        console.log(111);
        // feching data
        const data = await Mobile.find({ OS:{$in:os_type},price:{$lte:max_price.toString()}, type:{$in : device_type} , name:{$regex:`(?i)${search}`}}).sort(sort).collation({ locale: "en_US", numericOrdering: true });
        // const data = await Mobile.find({});
        // sending responce 
        res.json({data:data}).status(200);

    } catch (error) {
        console.error('Error fetching mobile data:', error);
        res.json({status:false,error}).status(500);
    }
})


module.exports = router;
