const findIntegersForUniqueSum = function(arrayOfIntegers, uniqueSum) {
  if (!arrayOfIntegers
    || typeof(arrayOfIntegers) != typeof([])
    || arrayOfIntegers.length < 2) {
    return [];
  }

  let result;
  let diffMap = new Map();
  arrayOfIntegers.some((num, index) => {
    if (diffMap.has(num)) {
      result = [diffMap.get(num), index];
    }

    const diff = uniqueSum - num;
    diffMap.set(diff, index);
  });

  return result;
}

module.exports = findIntegersForUniqueSum;
