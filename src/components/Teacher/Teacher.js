import React, { useState } from 'react';
import teacherValue from '../../database/teacher.json';
import TeacherList from './teacherList';

const Teacher = () => {
  const teacherState = { name: '', noRoll: '', class: '', section: '' };

  const [teachers, setTeachers] = useState(teacherValue);
  const [currentTeacher, setCurrentTeacher] = useState(teacherState);
  const [edit, setEdit] = useState(false);

  const addTeacher = (teacher) => {
    teacher.name = teachers.length + 1;
    setTeachers([...teachers, teacher]);
  };

  const updateTeacher = (name, updateTeacher) => {
    setEdit(false);
    setTeachers(
      teachers.map((teacher) =>
        teacher.name === name ? updateTeacher : teacher
      )
    );
  };

  const deleteTeacher = (name) => {
    setEdit(false);
    setTeachers(teachers.filter((teacher) => teacher.name !== name));
  };
  return (
    <div className='container-fluid'>
      <h1 className='text-center'>Teacher Page</h1>

      <TeacherList />
    </div>
  );
};

export default Teacher;
