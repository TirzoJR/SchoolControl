import teachersDaos from "../daos/teachers.daos.js";

const teachersControllers = {};

teachersControllers.getAll = (req, res) => {
    teachersDaos.getAll()
    
    .then((teachers) => {
        if (!teachers || teachers.length === 0) {
                return res.status(200).json({
                    message: 'No hay profesores disponibles'
                });
            }
        res.json({
            data: teachers
        });
        
    })
    .catch((err) => {
        res.status(500).json({
            message: "An error has occurred",
            error: err
        });
        })
}



teachersControllers.getOne = (req, res) => {
    const teacherId = req.params.teacher_id;
    if (!teacherId) {
        return res.status(400).json({
            message: "Invalid teacher ID"
        });
    }
    teachersDaos.getOne(teacherId)
        .then((teacher) => {
            if (teacher) {
                res.json({
                    data: teacher
                });
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
            res.status(201).json({
                message: "Teacher created successfully",
                data: newTeacher
            });
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
                res.json({
                    message: "Teacher updated successfully",
                    data: updatedTeacher
                });
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
            res.json({
                message: "Teacher deleted successfully",
                data: deletedTeacher
            });
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