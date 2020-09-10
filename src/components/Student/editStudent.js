import React from 'react';

const editStudent = (props) => {
  const [student, setStudent] = useState(props.currentStudent);

  useEffect(() => {
    setStudent(props.currentStudent);
  }, [props]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setStudent({ ...student, [name]: value });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        props.updateStudent(student.name, student);
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
      <button>Update student</button>
      <button
        onClick={() => props.setEdit(false)}
        className='button muted-button'
      >
        Cancel
      </button>
    </form>
  );
};

export default editStudent;
