import teachersDaos from "../DAOs/teachers.daos.js";

const teachersControllers = {};

teachersControllers.getAll = (req, res) => {
    teachersDaos.getAll()
    
    .then((teachers) => {
        res.render("indexTeachers.ejs",{
                teachers
            })
        
    })
    .catch((err) => {
        res.status(500).json({
            message: "An error has occurred",
            error: err
        });
        })
}



teachersControllers.getOne = (req, res) => {
    teachersDaos.getOne(teacherId)
        .then((teacher) => {
            if (teacher) {
                res.render("editTeachers.ejs",{student});
            } else {
                res.status(404).json({
                    message: "Teacher not found"
                });
            }
        })
        
}

teachersControllers.insertOne = (req, res) => {
    teachersDaos.insertOne(req.body)
        .then((newTeacher) => {
            res.redirect("/api/teachers/getAll");
        })
        .catch((err) => {
            res.status(500).json({
                message: "An error has occurred",
                error: err
            });
        });
};


teachersControllers.updateOne = (req, res) => {
    teachersDaos.updateOne(req.params.teacher_id, req.body)
        .then((updatedTeacher) => {
            if (updatedTeacher) {
                res.redirect("/api/teachers/getAll");
            }else{
                res.status(404).json({
                    message: "Teacher not found"
                });

            }
        })

    }



teachersControllers.deleteOne = (req, res) => {
    teachersDaos.deleteOne(req.params.teacher_id)
    .then((deletedTeacher) => {
        if (deletedTeacher) {
            res.redirect("/api/teachers/getAll");
        } else {
            res.status(404).json({
                message: "Teacher not found"
            });
        }
    })
    .catch((err)=>{
        res.status(500).json({
            message: "An error has occurred",
            error: err
        });


    })
}




export default teachersControllers