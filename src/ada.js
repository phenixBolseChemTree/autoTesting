import _ from 'lodash'
// Общие уникальные элементы: 1, 3, 2
// getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5]); // 3

const getSameCount = (arr1,arr2) => {
  let counter = 0;
  const arrUniq1 = _.uniq(arr1);
  const arrUniq2 = _.uniq(arr2);
for(const arrFirst of arrUniq1) {
  for(const arrLast of arrUniq2) {
    if (arrFirst === arrLast) {
      counter += 1;
    }
  }
}
  return counter;
}

console.log(getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5]));