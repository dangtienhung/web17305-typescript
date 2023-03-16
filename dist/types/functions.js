// type function
function func1() { } // => decleration function
var func2 = function func2() { }; // => expression function
var func3 = function () { }; // => arrow function
// function return && function parameter
var sum = function (a, b) {
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
var web17305generic = function (arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var arrItem = callback(arr[i], i);
        temp.push(arrItem);
    }
    return temp;
};
console.log(web17305generic(['dang', 'tien', 'hung'], function (item, index) {
    return item + index;
}));
/* viết hàm sort sử dụng generic cho number & string */
