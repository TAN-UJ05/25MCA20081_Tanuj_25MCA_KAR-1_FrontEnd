import matplotlib.pyplot as plt

def selection_sort(arr):
    n = len(arr)
    steps = []
    for i in range(n):
        min_idx = i
        for j in range(i+1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j

        arr[i], arr[min_idx] = arr[min_idx], arr[i]
        steps.append(arr.copy())
    return steps

def insertion_sort(arr):
    steps = []
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        while j >= 0 and arr[j] > key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
        steps.append(arr.copy())
    return steps

def bubble_sort(arr):
    n = len(arr)
    steps = []
    for i in range(n):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                steps.append(arr.copy())
    return steps


def quick_sort(arr):
    steps = []
    def _quick_sort(a, low, high):
        if low < high:
            pi = partition(a, low, high)
            steps.append(a.copy())
            _quick_sort(a, low, pi - 1)
            _quick_sort(a, pi + 1, high)
    def partition(a, low, high):
        pivot = a[high]
        i = low - 1
        for j in range(low, high):
            if a[j] < pivot:
                i += 1
                a[i], a[j] = a[j], a[i]
        a[i + 1], a[high] = a[high], a[i + 1]
        return i + 1
    _quick_sort(arr, 0, len(arr) - 1)
    return steps

def merge_sort(arr):
    steps = []
    def _merge_sort(a):
        if len(a) > 1:
            mid = len(a) // 2
            left = a[:mid]
            right = a[mid:]
            _merge_sort(left)
            _merge_sort(right)
            i = j = k = 0
            while i < len(left) and j < len(right):
                if left[i] < right[j]:
                    a[k] = left[i]
                    i += 1
                else:
                    a[k] = right[j]
                    j += 1
                k += 1
            while i < len(left):
                a[k] = left[i]
                i += 1
                k += 1
            while j < len(right):
                a[k] = right[j]
                j += 1
                k += 1
            steps.append(a.copy())
    _merge_sort(arr)
    return steps

def visualize_sorting(steps, title="Sorting Visualization"):
    plt.figure()
    for step in steps:
        plt.clf()
        plt.bar(range(len(step)), step)
        plt.title(title)
        plt.pause(0.3)
    plt.show()

if __name__ == "__main__":
    data = list(map(int,input("Enter Values: ").split()))
    print("Original Data:", data)
    while True:
        choice = input("Enter Choice: ").lower()
        if choice == "exit":
            print("Exiting...")
            break
        elif choice == "selection sort":
            steps = selection_sort(data.copy())
            visualize_sorting(steps, "Selection Sort")
            print("sorted values:",steps[-1])
        elif choice == "insertion sort":
            steps = insertion_sort(data.copy())
            visualize_sorting(steps, "Insertion Sort")
            print("sorted values:",steps[-1])
        elif choice == "bubble sort":
            steps = bubble_sort(data.copy())
            visualize_sorting(steps, "Bubble Sort")
            print("sorted values:",steps[-1])
        elif choice == "quick sort":
            steps = quick_sort(data.copy())
            visualize_sorting(steps, "Quick Sort")
            print("sorted values:",steps[-1])
        elif choice == "merge sort":
            steps = merge_sort(data.copy())
            visualize_sorting(steps, "Merge Sort")
            print("sorted values:",steps[-1])
        else:
            print("Invalid Choice!")
        
