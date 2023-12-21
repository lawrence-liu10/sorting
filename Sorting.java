import java.util.Arrays;

public class Sorting {
    public static void main(String[] args) {
        

    }

    public void bubbleSort(int[] arr) {

    }



    public static int[] selectionSort(int[] arr) {
        boolean swapped = false;

        int temp = 0;
        int ind = 0;

        for (int i = 0; i < arr.length; i++) {
            int min = arr[i];
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < min) {
                    min = arr[j];
                    ind = j;
                    swapped = true;
                }
            }
            if (swapped) {
                temp = arr[i];
                arr[i] = min;
                arr[ind] = temp;
                swapped = false;
                return arr;
            }

        }

        return null;
    }


}
