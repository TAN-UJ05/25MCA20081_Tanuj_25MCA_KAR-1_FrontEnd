# Smart To-Do Manager (HTML + Bootstrap + JavaScript)

## 📌 Project Overview

**Smart To-Do Manager** is a modern web-based task management application that helps users efficiently organize their daily tasks.
The application allows users to add tasks with **priority levels** and **deadlines**, apply **filters**, perform **sorting**, and track overall **task statistics**.

This project is built using:

* **HTML5** → Structure
* **CSS3 + Bootstrap 5** → Styling & Responsive UI
* **Debounce Technique** → Optimized user input handling

---

## 🎯 Features

### ➕ Task Management

* Add new tasks with:

  * Task Name
  * Priority (Low / Medium / High)
  * Deadline Date
* Mark tasks as **Completed / Pending**
* Delete tasks easily

### 🔍 Filtering System

Users can filter tasks by:

* All Tasks
* Completed Tasks
* Pending Tasks

### 🔃 Sorting Functionality

* Sort tasks by **Priority**
* Sort tasks by **Deadline**

### 📊 Task Statistics Dashboard

Displays:

* Total number of tasks
* Number of completed tasks
* Number of pending tasks

### ⚡ Debounce Optimization

* Prevents multiple rapid clicks or filter calls
* Improves performance and user experience

### 💾 Data Persistence

* Tasks are stored in **Browser localStorage**
* Data remains available even after page refresh

---

## 🏗️ Project Structure

```
Smart-ToDo-Manager/
│
├── index.html      → Main UI structure
├── new.css         → Custom styling
├── new.js          → Application logic
└── README.md       → Project documentation
```

---

## 🖥️ User Interface Components

### 🧾 Task Input Section

* Text input for task name
* Dropdown for priority
* Date picker for deadline
* Add Task button

### 🎛️ Control Section

* Filter buttons (All / Completed / Pending)
* Sorting buttons (Priority / Deadline)

### 📋 Task Display Section

* Dynamic card layout using Bootstrap
* Each task shows:

  * Name
  * Priority
  * Deadline
  * Done Button
  * Delete Button

### 📈 Statistics Section

Real-time counter updates for:

* Total tasks
* Completed tasks
* Pending tasks

---

## ⚙️ How Debounce Works in This Project

Debounce ensures that a function executes **only after a fixed delay of user inactivity**.

Example Uses:

* Adding tasks
* Applying filters

This avoids:

* Multiple rapid task insertions
* Unnecessary UI rendering

---

## 🌐 Browser Compatibility

Works on all modern browsers such as:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Brave

---

## 📚 Learning Outcomes

This project helps understand:

* DOM Manipulation
* Event Handling
* Array Operations (filter, sort, loop)
* Debounce Technique
* Bootstrap Grid System
* Responsive UI Design

---

## 🔮 Future Improvements (Optional Ideas)

* Search bar with debounce
* Edit task feature
* Dark mode toggle
* Drag & drop task ordering
* Priority color badges
* Notifications for upcoming deadlines

---

⭐ *This project is useful for Web Development practice, JavaScript concepts, and co*
