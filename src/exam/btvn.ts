const numberArray: number[] = [1, 2, 3, 4, 5];

const web17317 = (
	array: number[],
	callback: (item: number, index: number) => number
): number[] => {
	const temp = [];
	const result = array.forEach((item: number, index: number) => {
		const numberNew = callback(item, index);
		temp.push(numberNew);
	});
	return temp;
};

const result: number[] = web17317(numberArray, (item, index) => item * index);
console.log('🚀 ~ file: btvn.ts:16 ~ result:', result);
