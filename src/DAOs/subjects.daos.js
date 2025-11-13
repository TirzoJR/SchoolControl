import Subject from "../models/Subject.js";

const subjectDaos = {};

subjectDaos.getAll = async () => {
    const subjects = await Subject.find();
    return subjects;
};

subjectDaos.getOne = async (subject_id) => {
    const subject = await Subject.findOne({ subject_id: subject_id });
    return subject;
};

subjectDaos.deleteOne = async (subject_id) => {
    const deletedSubject = await Subject.findOneAndDelete({ subject_id: subject_id });
    return deletedSubject;
};


subjectDaos.insertOne = async (subjectData) => {
    const newSubject = await Subject.create(subjectData);
    return newSubject;
};

subjectDaos.updateOne = async (subject_id, updateData) => {
    const updatedSubject = await Subject.findOneAndUpdate({ subject_id: subject_id }, updateData);
    return updatedSubject;
};






export default subjectDaos;