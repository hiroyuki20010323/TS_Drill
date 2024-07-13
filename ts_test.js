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
// readonlyは特定のプロパティを読み取り専用にして、再代入などを不可能にする
// Readonly<T>は、Tに対象のオブジェクト記述し、そのオブジェクト全体が読み取り専用になる。
// as const は、リテラル型のオブジェクトや配列を作成することが可能になる。読み取り専用
// リテラル型というのは、name:stirngなどではなく、具体的な値をすでに持たせてしまうこと
const Literal = {
    message: "Literal型です",
};
const user = { id: 3, name: "bob" };
// keyof~ はオブジェクト型のすべてのプロパティをユニオン型に直す。
// typeof~ は~の部分にはオブジェクト名が入るが、そのオブジェクトのプロパティを取得する。
// as constをしようすることで、UserValueは3と'bob'のリテラル型しか許可されなくなった。
