function StudentItem({ student, onEdit, onDelete }) {
  return (
    <div className="student-item">
      <h3>{student.name}</h3>
      <p>Email: {student.email}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <button onClick={() => onEdit(student)}>Edit</button>
      <button onClick={() => onDelete(student.id)}>Delete</button>
    </div>
  );
}

export default StudentItem;