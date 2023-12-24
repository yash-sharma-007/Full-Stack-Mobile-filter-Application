const mongo = require('mongoose')


const connectToMongoDB = async()=>{
    
    try {
        await mongo.connect(process.env.DATABASE_URL);
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Error while connecting to MongoDB...")
    }
}

module.exports = connectToMongoDB;