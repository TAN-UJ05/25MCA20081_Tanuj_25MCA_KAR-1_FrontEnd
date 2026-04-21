import StudentItem from './StudentItem';

function StudentList({ students, onEdit, onDelete }) {
  if (students.length === 0) {
    return <p>No students added yet.</p>;
  }

  return (
    <div className="student-list">
      {students.map(student => (
        <StudentItem
          key={student.id}
          student={student}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default StudentList;