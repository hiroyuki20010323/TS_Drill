"use strict";
{
    // 3
    let isShow = true;
    let isEditing = false;
}
{
    // 4
    let count = 15;
    let num = 2;
    let float = 2.33;
}
{
    // 5
    let firstName = "tarou";
    let lastName = "Yamada";
    let englishName = "mad";
}
{
    // 6
    let isShow = true;
    let count = 15;
    let firstName = "tarou";
}
{
    // 7
    let x = null;
}
{
    // 8
    let y = undefined;
}
{
    // 9
    let x = "hello";
    x = 1;
    x = undefined;
    x = [];
}
{
    // 10
    let x;
    // 値を持たないという意味。変数xには何も代入できない。
    // x = 1;
}
{
    let isShow = true;
    let count = 15;
    let firstName = "tarou";
    let lastName = "suzuki";
}
{
    // 13
    let isShow = true;
    let count = 15;
    let firstName = "tarou";
    // 推論された型に合う値を入れてください
    isShow = true;
    count = 20;
    firstName = "aaa";
}
{
    const taro = { name: "tarou", age: 30 };
    const jiro = { name: "jiro", age: 22 };
}
{
    const taro = {
        name: "tarou",
        age: 30,
        email: undefined,
    };
    const jiro = {
        name: "jiro",
        age: 22,
        email: "jiro@code-lesson.com",
    };
}
{
    const taro = { name: "tarou", age: 30 };
    const jiro = { name: "jiro", age: 22, email: "jiro@code-lesson.com" };
}
{
    const person = {
        name: "taro",
        age: 20,
        email: "taro@taro.com",
    };
}
{
    const fruits = ["apple", "orange", "lemon"];
    const nums = [1, 2, 3];
}
{
    // 24
    const main = (num) => {
        return num + num;
    };
    console.log(main(15)); //30
}
{
    // 25
    const func1 = (str) => "hello" + str;
    const func2 = (str) => ["hello"].push(str);
    // pushメソッドは、配列の要素数を返す関数だから。
    const func3 = (str) => console.log("hello" + str);
    // console.logは副作用として扱われ、関数の戻り値とみなされない。すなわち、返り値がないのでvoid
}
{
    // 26
    const func1 = (num) => num * 2;
    const func2 = (num) => num + "px";
}
{
    const hello = "hello";
}
{
    const num = 1;
    const str = "1";
}
{
    const fruit1 = "apple";
    const fruit2 = "orange";
    const fruit3 = "lemon";
}
{
}
// readonlyは特定のプロパティに対して、as constはオブジェクトや配列全体に対して。
{
    // 35
    const LANGUAGE = {
        ENGLISH: "ENGLISH",
        JAPANESE: "JAPANESE",
        CHINESE: "CHINESE",
    };
    console.log(LANGUAGE.JAPANESE);
}
{
    // 47
    let isShow = true;
    let count = 15;
    const firstName = "tarou";
    const sports = ["tennis", "soccer"];
    const user = { id: 1, name: "jiro" };
}
{
    // 58
    // 型アサーションは自信ないので後で見直す。
    const func = (x) => {
        const str = x;
        const num = x;
        const bool = x;
    };
}
{
    // 59
    const func1 = (x) => {
        const str = x;
    };
    const func2 = (x) => {
        const num = x;
    };
}
{
    // 60
    const func1 = (x) => {
        const str = x;
    };
    const func2 = (x) => {
        const num = x;
    };
    // ！を使用することで、絶対にnullやundefinedではないことを保証する。
}
{
    const func1 = (x) => {
        if (x !== null) {
            console.log(x.length);
        }
    };
    const func2 = (x) => {
        if (x !== undefined) {
            console.log(x.toString());
        }
    };
}
{
}
{
    // ユーティリティ型として全て必須にする場合は、
    // Requiredで＜＞は当てはめたいオブジェクト型を書く。
    const person = {
        name: "taro",
        age: 20,
        email: "hiroyuki293@icloud.com",
    };
}
{
}
{
}
{
}
{
}
{
}
{
}
{
    const func = (a, b) => {
        return a + b;
    };
}
{
    const func = () => {
        return {
            name: "taro",
            age: 25,
            email: "taro@example.com",
        };
    };
}
