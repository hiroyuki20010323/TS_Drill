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
// 型推論で推論されている型とは別の型を定義したいときに使用する。
// ＊別の定義を推論するなという議論もあるよう
// htmlはそれぞれのタグに固有の型があるよう。divタグの場合、HTMLDivElementなど
