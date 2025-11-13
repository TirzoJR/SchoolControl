import { model,Schema } from "mongoose";  //desestrucutracion de objetos solamente importa lo que le decimos

const studentsSchema = new Schema({
    student_id:{
        type:String,
        require:true,
        unique:true
    },
    name:String,
    lastname:String,
    grade:Number,
    group:String,
    average:Number
},{
   timestamps:true,
   versionKey:false 
});

export default model ('student',studentsSchema);







