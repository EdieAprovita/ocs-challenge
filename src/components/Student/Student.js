import React, { useState } from 'react';

const Student = () => {
  const valueStudent = [
    {
      name: 'Pedro',
      rollNo: '354849',
      class: '2',
      section: 'A',
    },
  ];

  const [students, setStudents] = useState(valueStudent);

  const addStudent = (student) => {
    student.name = students.length + 1;
    setStudents([...students, student]);
  };
  return (
    <div className='container-fluid'>
      <h1 className='text-center'>Student List</h1>
    </div>
  );
};

export default Student;
