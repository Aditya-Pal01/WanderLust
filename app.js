const express= require("express");
const app=express();
const mongoose =require("mongoose");
const Listing=require("./models/listing.js");
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate"); 


main().then(()=>console.log("db is connected")).catch((err)=>console.log(err));

async function main(){
await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
};

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.urlencoded({extented:true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate); 
app.use(express.static(path.join(__dirname,"/public")));


// app.get("/testListing",async (req,res)=>{
//     let sample=new Listing({
//         title:"new mera Villa",
//         desciption:" on   the Beach",
//         price:10000,
//         location:"asdfgh",
//         country:"asd",
//     });
//   await  sample.save();
//   console.log("sample was save");
//   res.send("successful testing");
// }); 


app.get("/",(req,res)=>{   
    res.send("Hello,I am Groot");
});

app.get("/listings",async (req,res)=>{
    const aListings= await Listing.find({});
    res.render("listings/index.ejs",{ aListings });
});

app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs");
});



app.get("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    const listing =await Listing.findById(id);
    res.render("listings/show.ejs",{ listing});
});

// app.post("/listings",async (req,res)=>{
//     // let {title,description,image,price,location,country}=req.body;
//     //let listing=req.body.listing;
//     const newListing=new Listing(req.body.listing);
//     await newListing.save();
//     res.redirect("/listings");
    
// });
app.post("/listings", async (req, res) => {
    try {
        const newListings = new Listing(req.body.listing);
        await newListings.save();
        res.redirect("/listings");
    } catch (error) {
        // Handle the error
        console.error("Error saving listing:", error);
        res.status(500).send("Error saving listing");
    }
});

app.get("/listings/:id/edit",async  (req,res)=>{
    let { id }= req.params;
    const listing= await Listing.findById(id);
    res.render("listings/edit.ejs",{ listing}); 
});

app.put("/listings/:id",async (req,res)=>{
    let { id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
   res.redirect(`/listings/${id}`);
});
app.delete("/listings/:id",async (req,res)=>{
    let {id}=req.params;
    let dellisting=await Listing.findByIdAndDelete(id);
    console.log(dellisting);
    res.redirect("/listings");
});

app.listen(8080,()=>{
    console.log("8080 port is set");
});