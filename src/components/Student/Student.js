import React, { useState } from 'react';
import valueStudent from '../../database/student.json';
import StudentList from './studentTable';

const Student = () => {
  const initialStudentState = { name: '', rollNo: '', class: '', section: '' };
  const [students, setStudents] = useState(valueStudent);
  const [edit, setEdit] = useState(false);

  const addStudent = (student) => {
    student.name = students.length + 1;
    setStudents([...students, student]);
  };

  const updateStudent = (name, updateStudent) => {
    setEdit(false);
    setStudents(
      students.map((student) =>
        Student.name === name ? updateStudent : student
      )
    );
  };

  const deleteStudent = (name) => {
    setEdit(false);
    setStudents(students.filter((student) => student.name !== name));
  };

  const [currentStudent, setCurrentStudent] = useState(initialStudentState);
  return (
    <div className='container-fluid'>
      <h1 className='text-center'>Student Page</h1>
      <StudentList />
    </div>
  );
};

export default Student;
