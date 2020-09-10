import React, { useState } from 'react';

const AddStudentForm = (props) => {
  const initialFormState = { name: '', rollNo: '', class: '', section: '' };
  const [student, setStudent] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setStudent({ ...student, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!student.name || !student.username) return;

        props.addUser(student);
        setStudent(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type='text'
        name='name'
        value={student.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type='text'
        name='username'
        value={student.username}
        onChange={handleInputChange}
      />
      <button>Add new student</button>
    </form>
  );
};

export default AddStudentForm;
