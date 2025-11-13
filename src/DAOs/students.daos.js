import Student from "../models/Students.js";

const studentsDaos = {};
studentsDaos.getAll =async()=>{
    //AQui el voy a pedir los datos a moongose para extraer los datos de mi cluster >:)
    const students = await Student.find();
    return students;
}

studentsDaos.getOne=async(student_id)=>{
    const student = await Student.findOne({student_id:student_id});
    return student;
}
//Crear nuevo estudiante
studentsDaos.insertOne = async(studentData) =>{
    const newStudent = await Student.create(studentData);
    return newStudent;

}
//Actualizar un estudiante
studentsDaos.updateOne = async(student_id,updateData)=>{
    const updatedStudent = await Student.findOneAndUpdate({student_id:student_id},updateData);
    return updatedStudent;
}
//Borrar un estudiante por su id
studentsDaos.deleteOne = async(student_id)=>{
    const deletedStudent = await Student.findOneAndDelete({student_id:student_id});
    return deletedStudent;
}











export default studentsDaos;