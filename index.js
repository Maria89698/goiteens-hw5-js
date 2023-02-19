// #1
const arr1 = [1, 5, '4', 'hello'];
const arr2 = [true, 2, {}, ['a'], 222];

console.log(arr1[1]);
console.log(arr2[1]);
console.log(arr1[1] + arr2[1]);

// #2
arr1[4] = 22;

console.log(arr1[0, 1, 2, 3, 4]);

// #3
for (const element of arr2) {
    console.log(typeof element);
    console.log(element);
}
// #4
const message = ['W', 'e', 'l', 'c', 'o', 'm', 'e', 't', 'o', 'U', 'k', 'r', 'a', 'i', 'n', 'e', '!'];
console.log(message);
console.log(message.indexOf ('l'));


// #5
const styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');

console.log(styles);

styles.splice(1, 1, 'Класика');
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift('Реп', 'Реггі');
console.log(styles);
