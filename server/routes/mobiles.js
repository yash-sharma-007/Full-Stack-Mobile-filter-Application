const router = require('express').Router();
const Mobile = require('../models/mobile');
const cors = require('cors')

router.use(cors())
router.get("/mobiles",async(req,res)=>{

    try {

        // get query parameters
        const search = req.query.search || "";
        const sortBy =req.query.sortBy || "price";
        var order = req.query.order || 1;
        const device_type = req.query.device.split(',');
        var max_price =  req.query.maxPrice || 826474643;
        const os_type = req.query.os.split(',');
       
        // check order for sorting 
        if(order==="Ascending") order=1;
        else if(order==="Descending") order=-1;

        const sort ={}
        sort[sortBy] = order;

        // check if user has selected any device_type or not
        const type = device_type[0]!='' ? device_type : ["Smartphone","Feature Phone","Tablet","Phablet","Smartwatch"];

        // check if user has selected any OS or not
        const os = os_type[0]!='' ? os_type : ["Android", "iOS", "Windows", "macOS", "BlackBerry", "Symbian", "Firefox OS", "Ubuntu Touch", "Tizen", "KaiOS","ZenithOS"];

        // feching data
        const data = await Mobile.find({ OS:{$in:os},price:{$lte:max_price.toString()}, type:{$in : type} , name:{$regex:`(?i)${search}`}}).sort(sort).collation({ locale: "en_US", numericOrdering: true });

        // sending responce 
        res.json({data:data})

    } catch (error) {
        res.json({status:false,error});
    }
})


module.exports = router;