# 📊 Sorting Visualizer - Algorithm Simulator

**Python | Matplotlib**

A Python-based sorting visualizer that demonstrates how different sorting algorithms work using animated bar graphs.
Users can input custom data and observe step-by-step transformations during sorting.

---

## ✨ Features

| Feature                | Description                                         |
| ---------------------- | --------------------------------------------------- |
| 📊 Multiple Algorithms | Selection, Insertion, Bubble, Quick, and Merge Sort |
| 🎥 Visualization       | Step-by-step graphical animation using bar charts   |
| ⌨️ Custom Input        | Users can enter their own dataset                   |
| ⚡ Real-Time Updates    | Sorting steps shown dynamically                     |
| 🧠 Educational Tool    | Helps understand algorithm behavior visually        |

---

## 🖥️ Project Structure

```
SortingAlgos.py   -> Main Python script
```

---

## 🛠️ How It Works

### Input

User enters numbers:

```
Enter Values: 5 3 8 1 2
```

---

### Algorithm Selection

User selects sorting method:

```
Enter Choice: bubble sort
```

---

### Visualization

* Each step of sorting is stored
* Matplotlib displays bar graphs
* Bars update dynamically to show sorting progress

---

### Output

```
Original Data: [5, 3, 8, 1, 2]
sorted values: [1, 2, 3, 5, 8]
```

---

## 🏷️ Code Overview

### Sorting Functions

* `selection_sort(arr)` → Finds minimum element and swaps
* `insertion_sort(arr)` → Inserts element into sorted portion
* `bubble_sort(arr)` → Swaps adjacent elements
* `quick_sort(arr)` → Divide and conquer using pivot
* `merge_sort(arr)` → Recursively merges sorted halves

---

### Visualization Function

* `visualize_sorting(steps)`

  * Uses **Matplotlib**
  * Displays bar chart updates using `plt.pause()`

---

## ⚡ How to Run

1. Install dependencies:

```
pip install matplotlib
```

2. Run the program:

```
python SortingAlgos.py
```

3. Enter values and choose algorithm

4. Type `exit` to quit

---

## 📊 Sample Input

```
5 2 9 1 5 6
```

---

## 🚀 Future Improvements

* Add color highlighting (comparisons & swaps)
* Add speed control slider
* GUI version using Tkinter / PyQt
* Add more algorithms (Heap Sort, Radix Sort)
* Show time complexity comparison

---

## 📫 Contact

**GitHub:** [TAN-UJ05](https://github.com/TAN-UJ05?utm_source=chatgpt.com)

**Email:** [tanujjoshi669@gmail.com](mailto:tanujjoshi669@gmail.com)

---

## ⚖️ License

MIT License

---

**Made with ❤️ using Python & Matplotlib**
