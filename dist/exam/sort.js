var sort = function (arr, callback) {
    for (var i = 0; i < arr.length - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (callback && callback(arr[j], arr[minIndex]) < 0) {
                minIndex = j;
            }
        }
        var temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    console.log(arr);
};
sort([1000, 5, 7, 2, 10, 300, 56], function (a, b) { return a - b; });
sort([1000, 5, 7, 2, 10, 300, 56]);
sort(['bac', 'abc', 'ghe'], function (a, b) { return b.localeCompare(a); });
sort(['d', 'c', 'e', 'a', 'b']);
