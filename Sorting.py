def selection_sort(arr):
    swapped = False

    for i in range(len(arr)):
        minimum = arr[i]
        index = i
        for j in range(i + 1, len(arr)):
            if arr[j] < minimum:
                minimum = arr[j]
                index = j
                swapped = True

        if swapped:
            arr[i], arr[index] = arr[index], arr[i]
            swapped = False
            return arr

    return None

def bubble_sort(arr):

    for i in range(len(arr) - 1):
        if arr[i] > arr[i + 1]:
            arr[i], arr[i + 1] = arr[i + 1], arr[i]
            return arr

    return None

def insertion_sort(arr):
    for i in range(0, len(arr)):
        for j in range(i, 0, -1):
            if arr[j] < arr[j - 1]:
                arr[j], arr[j - 1] = arr[j - 1], arr[j]
                return arr

    return None


def main():
    arr = [64, 34, 25, 12, 22, 11, 90]
    print(insertion_sort(arr))

if __name__ == "__main__":
    main()
