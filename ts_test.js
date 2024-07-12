"use strict";
const addOrConcat = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return "" + a + b;
    }
};
const result = addOrConcat(1, 2, "concat");
console.log(result);
// 上記の型エイリアスはどちらも引数と戻り値のみを定義したもの、
// 型Funcは、第一引数が、funcという名前の関数を受け取るということ、戻り値はない。
const func1 = (a, b) => { };
// 通常のアロー関数の型定義は上記のようになるが、型エイリアスにより、引数のみを定義する場合は以下のようなる
// ↓typeを使用した書き方。
const hello = (name) => `Hello, ${name}`;
console.log(hello("World")); // Hello, World
const obj = {
    id: 1,
    name: "hiro",
};
const post = {
    id: 1,
    title: "First Post",
    content: "hello",
    comments: [
        { userId: 1, comments: "Hi!" },
        { userId: 2, comments: "Hello!" },
    ],
};
