const mongoose= require("mongoose");
const initData = require("./dat.js"); //data
// console.log(initData)
const Listing= require("../models/listing.js"); //model
// console.log(Listing)
main().then(()=>console.log("db is connected")).catch((err)=>console.log(err));


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
    };
    const initDB =async ()=>{
        await Listing.deleteMany({});
        await Listing.insertMany(initData.data);
        console.log("completely initialize");
    }
    initDB();


