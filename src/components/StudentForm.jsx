import { useState, useEffect } from 'react';

function StudentForm({ onSave, onCancel, initialStudent }) {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    age: '',
    course: ''
  });

  useEffect(() => {
    if (initialStudent) {
      setStudent(initialStudent);
    }
  }, [initialStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(student);
    setStudent({ name: '', email: '', age: '', course: '' });
  };

  const handleCancel = () => {
    setStudent({ name: '', email: '', age: '', course: '' });
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialStudent ? 'Edit Student' : 'Add Student'}</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={student.age}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Course:</label>
        <input
          type="text"
          name="course"
          value={student.course}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Save</button>
      {initialStudent && <button type="button" onClick={handleCancel}>Cancel</button>}
    </form>
  );
}

export default StudentForm;