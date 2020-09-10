import React from 'react';

const teacherTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.teachers.length > 0 ? (
        props.teachers.map((teacher) => (
          <tr key={teacher.id}>
            <td>{teacher.name}</td>
            <td>{teacher.username}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(teacher);
                }}
                className='button muted-button'
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteTeacher(teacher.id)}
                className='button muted-button'
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default teacherTable;
