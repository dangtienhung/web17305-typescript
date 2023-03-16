// type function
function func1() {} // => decleration function
const func2 = function func2() {}; // => expression function
const func3 = () => {}; // => arrow function

// function return && function parameter
const sum = (a: number, b: number): number => {
	return 10;
};

// callback
// const numArr = [5, 10, 15, 20];
// const web17305 = (arr: number[], callback: (item: number) => number[]) => {
// 	const temp: number[] = [];
// 	arr.forEach((item) => {
// 		const newArray = callback(item);
// 		temp.push();
// 	});
// };
// const result = web17305(numArr, callback());

// const callback = (item: number): number => {
// 	return item * 2;
// };

/* btvn: thêm index vào callback */
const web17305generic = <T>(
	arr: T[],
	callback: (item: T, index: number) => T
): T[] => {
	const temp = [];
	for (let i = 0; i < arr.length; i++) {
		const arrItem = callback(arr[i], i);
		temp.push(arrItem);
	}
	return temp;
};
console.log(
	web17305generic(['dang', 'tien', 'hung'], (item, index) => {
		return item + index;
	})
);

/* viết hàm sort sử dụng generic cho number & string */
