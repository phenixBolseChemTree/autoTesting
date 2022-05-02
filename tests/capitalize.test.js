// нажмите кнопку run чтобы запустить тесты
// попробуйте изменять код функции / тестов, запуская проверки заново
import {strict as assert } from 'assert';
import capitalize from '../src/capitalize.js';

// assert.equal(capitalize('hello') === 'Hello');
assert.strictEqual(capitalize(''),'');
assert.strictEqual(capitalize('hello'), 'Hello');
// assert.strictEqual(capitalize('hello'), 'hello');
// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает неверно!');
// }
// if (capitalize('') !== '') {
//   throw new Error('Функция работает неверно!');
// }

console.log('Все тесты пройдены!');
