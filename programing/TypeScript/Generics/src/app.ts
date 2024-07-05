// ジェネリック型：他の特定の型と結合された型
// const names: Array<string> = []; // string[]と書くのと変わらない

// // 型の返す値を指定できる<string> typescriptのサポートを得ることができる
// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve("終わりました!");
//   }, 2000);
// });

// // promiseがstringを返すことを指定しているのでsplitメソッドが使用できる
// promise.then(data => {
//     data.split(' ');
// })

// 異なるオブジェクト型を返すことを指定
function merge<T, U>(objA: T, objB: U) {
  return <T & U>Object.assign({}, objA, objB);
}

// TとUのオブジェクトを指定することができるが型推論してくれるので明示的に書かなくていい
const mergedObj = merge({ name: "max" , hobbies: ['sports']}, { age: 30 });
console.log(mergedObj.age);