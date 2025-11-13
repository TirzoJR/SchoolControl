import mongoose from "mongoose";
mongoose.connect("mongodb+srv://TirzoMartinezSolis:141E5dec1a@tirzomartinezsolis.crqyt4p.mongodb.net/school_control?retryWrites=true&w=majority&appName=TirzoMartinezSolis")
.then(()=>console.log("Mongo DB conected"))
.catch((err)=> console.log(err));
export default mongoose;