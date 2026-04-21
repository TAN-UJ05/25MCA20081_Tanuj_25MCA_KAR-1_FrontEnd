import { useState } from 'react';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  const handleSave = (student) => {
    if (editingStudent) {
      setStudents(prev => prev.map(s => s.id === editingStudent.id ? { ...student, id: editingStudent.id } : s));
      setEditingStudent(null);
    } else {
      const newStudent = { ...student, id: Date.now() };
      setStudents(prev => [...prev, newStudent]);
    }
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
  };

  const handleDelete = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  };

  const handleCancel = () => {
    setEditingStudent(null);
  };

  return (
    <div className="app">
      <h1>Student Management System</h1>
      <StudentForm
        onSave={handleSave}
        onCancel={handleCancel}
        initialStudent={editingStudent}
      />
      <StudentList
        students={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
