import React from 'react';

const editTeacher = (props) => {
  const [teacher, setTeacher] = useState(props.currentTeacher);

  useEffect(() => {
    setTeacher(props.currentTeacher);
  }, [props]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setTeacher({ ...teacher, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        props.updateTeacher(teacher.name, teacher);
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
      <button>Update teacher</button>
      <button
        onClick={() => props.setEdit(false)}
        className='button muted-button'
      >
        Cancel
      </button>
    </form>
  );
};

export default editTeacher;
