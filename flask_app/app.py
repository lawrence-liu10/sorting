from flask import Flask, jsonify, request
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route('/api/submit', methods=['POST'])
def receive_data():
    try:
        data = request.get_json()
        received_data = data.get('data')
        length = int(received_data)

        unsorted = random.sample(range(1, length + 1), length)

        my_dict = {}

        for i in range (length):
            key = f'{i}'

            arr = selection_sort(unsorted)
            string_arr = to_string(arr)
            value = f''

        return jsonify({'string_arr': string_arr}), 200
    except Exception as e:
        print('Error:', str(e))
        return jsonify({'error': 'Failed to process data'}), 500
    
@app.route('/api/hello', methods=['GET'])
def get_hello():
    data = {'message': 'Hello from Flask API!'}
    return jsonify(data)

@app.route('/api/selection', methods=['GET'])
def get_array():
    data = [1,2,3,4,5]
    return jsonify(data)

def to_string(arr):
    arr_string = ""
    for i in range (len(arr)):
        arr_string += str(arr[i]) + " "
    return arr_string


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

    choice = "selection"
    unsorted = [1,2,3]

    if choice.lower() == "selection":
        while(True):
            step = selection_sort(unsorted)
            if step != None:
                print(step)
            else:
                break
    elif choice.lower() == "bubble":
        while(True):
            step = bubble_sort(unsorted)
            if step != None:
                print(step)
            else:
                break
    elif choice.lower() == "insertion":
        while(True):
            step = insertion_sort(unsorted)
            if step != None:
                print(step)
            else:
                break

if __name__ == '__main__':
    app.run(debug=True, port = 8000)