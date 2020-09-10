import React from 'react';

const teacherTable = () => {
  return (
    <div className='container-fluid'>
      <h1 className='text-center'>Teacher Register Form</h1>

      <div class='form-group'>
        <label for='exampleFormControlInput1'>Name</label>
        <input
          type='name'
          class='form-control'
          id='exampleFormControlInput1'
          placeholder='Name'
        />
        <label for='exampleFormControlInput1'>Roll No.</label>
        <input
          type='number'
          class='form-control'
          id='exampleFormControlInput1'
          placeholder='Roll No.'
        />
      </div>
      <div class='form-group'>
        <label for='exampleFormControlSelect1'>Class</label>
        <select class='form-control' id='exampleFormControlSelect1'>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
      </div>
      <div class='form-group'>
        <label for='exampleFormControlSelect1'>Section</label>
        <select class='form-control' id='exampleFormControlSelect1'>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
          <option>E</option>
          <option>F</option>
        </select>
      </div>
      <button type='button' class='btn btn-primary'>
        Submit
      </button>
    </div>
  );
};

export default teacherTable;
