const sort = <T>(arr: T[], callback?: (a: T, b: T) => number): void => {
	for (let i: number = 0; i < arr.length - 1; i++) {
		let minIndex: number = i;
		for (let j: number = i + 1; j < arr.length; j++) {
			if (callback && callback(arr[j], arr[minIndex]) < 0) {
				minIndex = j;
			}
		}
		let temp: T = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	console.log(arr);
};
sort([1000, 5, 7, 2, 10, 300, 56], (a, b) => a - b);
sort([1000, 5, 7, 2, 10, 300, 56]);
sort(['bac', 'abc', 'ghe'], (a, b) => b.localeCompare(a));
sort(['d', 'c', 'e', 'a', 'b']);
