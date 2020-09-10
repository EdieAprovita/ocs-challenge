import React, { useState, Fragment } from 'react';
import valueStudent from '../../database/student.json';
import addStudent from './addStudent';
import StudentList from './addStudent';
import StudentTable from '../Student/studentTable';

const Student = () => {
  const initialStudentState = { name: '', rollNo: '', class: '', section: '' };

  const [currentStudent, setCurrentStudent] = useState(initialStudentState);
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

  return (
    <div className='container-fluid'>
      <h1 className='text-center'>Student Page</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {edit ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div className='flex-large'>
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>{' '}
    </div>
  );
};

export default Student;
