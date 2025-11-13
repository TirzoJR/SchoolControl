import express from "express";
import morgan from "morgan";
import ejs from "ejs";  


import studentsRoutes from "./routes/students.routes.js";
import teachersRoutes from "./routes/teachers.routes.js";
import subjectRoutes from "./routes/subject.routes.js";


const app = express();


app.use(morgan("dev"));
//Setings
app.set("port",process.env.PORT ||3000);
app.set("View engine","ejs");
app.set("views","./src/views");

//Middelwares
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));


//Routes
app.use("/api/students",studentsRoutes);
app.use("/api/teachers",teachersRoutes);
app.use("/api/subject",subjectRoutes);



export default app;