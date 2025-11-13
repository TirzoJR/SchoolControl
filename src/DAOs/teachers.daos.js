import Teachers from "../models/Teachers.js";

const teachersDaos = {};

teachersDaos.getAll = async () => {
    const teachers = await Teachers.find();
    return teachers;
};

teachersDaos.insertOne = async (teacherData) => {
    const newTeacher = await Teachers.create(teacherData);
    return newTeacher;
}

teachersDaos.updateOne = async (teacher_id, updateData) => {
    const updatedTeacher = await Teachers.findOneAndUpdate({ teacher_id: teacher_id }, updateData);
    return updatedTeacher;
};

teachersDaos.getOne = async (teacher_id) => {
    const teacher = await Teachers.findOne({ teacher_id: teacher_id });
    return teacher;
};

teachersDaos.deleteOne = async (teacher_id) => {
    const deletedTeacher = await Teachers.findOneAndDelete({ teacher_id: teacher_id });
    return deletedTeacher;
};



export default teachersDaos;