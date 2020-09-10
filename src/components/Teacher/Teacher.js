import React, { useState } from 'react';

const Teacher = () => {
  const teacherList = [
    {
      name: 'Pablo',
      rollNo: '685748',
      class: '2 B',
    },
  ];

  const [teachers, setTeachers] = useState(teacherList);

  const addTeacher = (teacher) => {
    teacher.name = teachers.length + 1;
    setTeachers([...teachers, teacher]);
  };
  return (
    <div className='container-fluid'>
      <h1 className='text-center'>Teacher Page</h1>
    </div>
  );
};

export default Teacher;
