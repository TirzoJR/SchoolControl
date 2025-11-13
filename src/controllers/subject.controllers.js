import subjectDaos from "../DAOs/subjects.daos.js";

const subjectControllers = {};

subjectControllers.getAll = (req, res) => {
    subjectDaos.getAll()
        .then((subjects) => {
            res.json({
                data: subjects
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "An error has occurred",
                error: err
            });
        });
    }

subjectControllers.getOne = (req, res) => {
    const subjectId = req.params.subject_id;
        if (!subjectId || isNaN(subjectId)) {
            return res.status(400).json({
                message: "Invalid subject ID"
            });
        }
    subjectDaos.getOne(subjectId)
        .then((subject) => {
            if (subject) {
                res.json({
                    data: subject
                });
            } else {
                res.status(404).json({
                    message: "Subject not found"
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                message: "An error has occurred",
                error: err
            });
            
        });
            

        }

subjectControllers.insertOne= async (req, res) => {
    subjectDaos.insertOne(req.body)
        .then((newSubject) => {
            res.status(201).json({
                message: "Subject created successfully",
                data: newSubject
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: "An error has occurred",
                error: err
            });
        });
}

subjectControllers.updateOne = (req, res) => {
    subjectDaos.updateOne(req.params.subject_id, req.body)
        .then((updatedSubject) => {
            if (updatedSubject) {
                res.json({
                    message: "Subject updated successfully",
                    data: updatedSubject
                });
            }else{
            res.status(404).json({
                message: "Subject not found"
            });
        }
    })
    .catch((err) => {
        res.status(500).json({
            message: "An error has occurred",
            error: err
        });
    })

    }

subjectControllers.deleteOne = (req, res) => {
    subjectDaos.deleteOne(req.params.subject_id)
    .then((deletedSubject) => {
        if (deletedSubject) {
            res.json({
                message: "Subject deleted successfully",
                data: deletedSubject
            });
    }else{
        res.status(404).json({
            message: "Subject not found"});
    
    }
})
.catch((err) => {
    res.status(500).json({
        message: "An error has occurred",
        error: err
    });
})
}
            



export default subjectControllers;