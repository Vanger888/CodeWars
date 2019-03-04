/*Implement the function unique_in_order which takes as argument 
a sequence and returns a list of items without any elements with 
the same value next to each other and preserving the original order 
of elements.*/

function uniqueInOrder(iterable) {
  return typeof iterable === 'string' ? 
    iterable.split('').filter((item, i, arr) => item !== arr[i - 1]) :
    iterable.filter((item, i, arr) => item !== arr[i - 1]);
}