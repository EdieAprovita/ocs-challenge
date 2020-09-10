import React from 'react';

const AddTeacher = (props) => {
  const initialFormState = { name: '', rollNo: '', class: '', section: '' };
  const [teacher, setTeacher] = useState(initialFormState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setTeacher({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!teacher.name || !teacher.rollNo) return;

        props.addTeacher(teacher);
        setTeacher(initialFormState);
      }}
    >
      <label>Name</label>
      <input
        type='text'
        name='name'
        value={teacher.name}
        onChange={handleInputChange}
      />
      <label>Username</label>
      <input
        type='text'
        name='username'
        value={teacher.username}
        onChange={handleInputChange}
      />
      <button>Add new teacher</button>
    </form>
  );
};

export default AddTeacher;
