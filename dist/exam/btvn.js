var numberArray = [1, 2, 3, 4, 5];
var web17317 = function (array, callback) {
    var temp = [];
    var result = array.forEach(function (item, index) {
        var numberNew = callback(item, index);
        temp.push(numberNew);
    });
    return temp;
};
var result = web17317(numberArray, function (item, index) { return item * index; });
console.log('🚀 ~ file: btvn.ts:16 ~ result:', result);
