import tkinter as tk
from tkinter import ttk, messagebox
import matplotlib.pyplot as plt

# Import your sorting functions
from algos import (
    selection_sort,
    insertion_sort,
    bubble_sort,
    quick_sort,
    merge_sort
)

# Visualization
def visualize_sorting(steps, title):
    plt.figure()
    for step in steps:
        plt.clf()
        plt.bar(range(len(step)), step)
        plt.title(title)
        plt.pause(0.3)
    plt.show()

# Main GUI
class SortingGUI:
    def __init__(self, root):
        self.root = root
        self.root.title("Sorting Visualizer 🔥")
        self.root.geometry("600x400")
        self.root.config(bg="#1e1e2f")

        # Title
        tk.Label(root, text="Sorting Visualizer",
                 font=("Helvetica", 20, "bold"),
                 bg="#1e1e2f", fg="white").pack(pady=10)

        # Input field
        self.entry = tk.Entry(root, font=("Arial", 14), width=30)
        self.entry.pack(pady=10)
        self.entry.insert(0, "Enter numbers e.g. 5 3 8 1")

        # Dropdown
        self.algorithms = [
            "Selection Sort",
            "Insertion Sort",
            "Bubble Sort",
            "Quick Sort",
            "Merge Sort"
        ]

        self.selected_algo = tk.StringVar()
        self.selected_algo.set(self.algorithms[0])

        ttk.Combobox(root, textvariable=self.selected_algo,
                     values=self.algorithms,
                     font=("Arial", 12),
                     state="readonly").pack(pady=10)

        # Buttons
        tk.Button(root, text="Start Sorting 🚀",
                  font=("Arial", 12, "bold"),
                  bg="#4CAF50", fg="white",
                  command=self.start_sorting).pack(pady=10)

        tk.Button(root, text="Clear",
                  font=("Arial", 12),
                  bg="#f44336", fg="white",
                  command=self.clear_input).pack(pady=5)

    # Functions
    def get_data(self):
        try:
            data = list(map(int, self.entry.get().split()))
            return data
        except:
            messagebox.showerror("Error", "Please enter valid numbers!")
            return None

    def clear_input(self):
        self.entry.delete(0, tk.END)

    def start_sorting(self):
        data = self.get_data()
        if not data:
            return

        algo = self.selected_algo.get()

        if algo == "Selection Sort":
            steps = selection_sort(data.copy())
            visualize_sorting(steps, "Selection Sort")

        elif algo == "Insertion Sort":
            steps = insertion_sort(data.copy())
            visualize_sorting(steps, "Insertion Sort")

        elif algo == "Bubble Sort":
            steps = bubble_sort(data.copy())
            visualize_sorting(steps, "Bubble Sort")

        elif algo == "Quick Sort":
            steps = quick_sort(data.copy())
            visualize_sorting(steps, "Quick Sort")

        elif algo == "Merge Sort":
            steps = merge_sort(data.copy())
            visualize_sorting(steps, "Merge Sort")

        messagebox.showinfo("Done ✅", f"{algo} Completed!")

# Run
if __name__ == "__main__":
    root = tk.Tk()
    app = SortingGUI(root)
    root.mainloop()
