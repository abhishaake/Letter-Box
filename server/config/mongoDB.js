const mongoose=require('mongoose');
 const db = process.env.MONGO_DB_URL;
// console.log("debug : DB URL " + db);
const connectDB =async()=>{
    try {
        await mongoose.connect(db);
        console.log('MongoDB is Connected...')
    } catch (err) {
        console.error(err.message);
        console.log('Check Your ENV VAR')
        process.exit(1)
    }
}
module.exports = connectDB;