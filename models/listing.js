const mongoose=require("mongoose");
const Schema =mongoose.Schema;

const listingSchema=new Schema({
    title:String,
    description:String,
    image:{
        type:String,
        default:"https://www.google.com/search?sca_esv=b176e63ef7d8ad5d&sca_upv=1&rlz=1C1CHWL_enIN944IN944&q=taj+mahal&udm=2&fbs=AEQNm0DPvcmG_nCbmwtBO9j6YBzM68ZanC7g01Skprhw5JoufUv28nkH7BlZuPSVPZEeFf4zEsryEwMB77hXASo0GX6ktue4NmhwpwwiaMFtmA_2de5gQg9OmAOSesxIZD6S4gXYPCVj4OKmStbIQFzMmPzehIwnfhd1m8eu_TTiEQtZI-2_KIp5i92eMzcT7Kg1ndlwZaOmZES9TUdJujq5hGT0Ub9e5g&sa=X&ved=2ahUKEwjGzMLUs-iGAxX38DgGHWS8CbwQtKgLegQIDBAB&biw=689&bih=489&dpr=1.5#vhid=UwI6CZLxWYKjeM&vssid=mosaic ",
        set:(v)=>v===""?"https://www.google.com/search?sca_esv=b176e63ef7d8ad5d&sca_upv=1&rlz=1C1CHWL_enIN944IN944&q=taj+mahal&udm=2&fbs=AEQNm0DPvcmG_nCbmwtBO9j6YBzM68ZanC7g01Skprhw5JoufUv28nkH7BlZuPSVPZEeFf4zEsryEwMB77hXASo0GX6ktue4NmhwpwwiaMFtmA_2de5gQg9OmAOSesxIZD6S4gXYPCVj4OKmStbIQFzMmPzehIwnfhd1m8eu_TTiEQtZI-2_KIp5i92eMzcT7Kg1ndlwZaOmZES9TUdJujq5hGT0Ub9e5g&sa=X&ved=2ahUKEwjGzMLUs-iGAxX38DgGHWS8CbwQtKgLegQIDBAB&biw=689&bih=489&dpr=1.5#vhid=UwI6CZLxWYKjeM&vssid=mosaic":v
    },
    price:Number,
    location:String,
    country:String,
});

const Listing= mongoose.model("Listing",listingSchema);
module.exports=Listing;