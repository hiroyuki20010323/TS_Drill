"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    const nums = [1, null, "Hello"];
}
{
}
{
    // 33
    // Promise型要復習
    const func = () => {
        return new Promise((resolve) => {
            resolve(true);
        });
    };
}
{
    // インターセクション型要復習
    const postWithComments = {
        id: "aaa",
        title: "testPost",
        index: 1,
        comments: [
            {
                id: "aaa",
                title: "hoge",
                content: "fuga",
                wordCount: 4,
            },
            {
                id: "bbb",
                title: "hoge2",
                content: "fuga2",
                wordCount: 4,
            },
        ],
    };
}
{
    // Readonly<T>という書き方もあった。https://typescriptbook.jp/reference/type-reuse/utility-types/readonly
    // as const との使い分け。
}
{
    const userWithPosts = {
        id: "aaa",
        name: "bob",
        posts: [
            {
                id: "aaa",
                title: "hoge",
                content: "fuga",
            },
            {
                id: "bbb",
                title: "hoge2",
                content: "fuga2",
            },
        ],
    };
}
{
    // 48
    const user = { id: 3, name: "bob" };
}
{
    // 49
    const user = { id: 3, name: "bob" };
    // keyof~ はオブジェクト型のすべてのプロパティをユニオン型に直す。
    // typeof~ は~の部分にはオブジェクト名が入るが、そのオブジェクトのプロパティなどを取得する。
}
{
    // 50
    const fruits = ["apple", "orange", "lemon"];
}
{
    const printLearningLanguage = (lang) => {
        switch (lang) {
            case "JavaScript":
                console.log(`I'm learnig ${lang}`);
                break;
            case "TypeScript":
                console.log(`I'm learnig ${lang}`);
                break;
            case "React":
                console.log(`I'm learnig ${lang}`);
                break;
            default:
                // const neverValue: never = lang;
                // neverは値を持たないのに、goが引数langに代入されたら、上から処理されて、default内のneverValueに入るからエラーが起きる
                throw new Error(`${lang}はカリキュラムにない言語です`);
        }
    };
}
{
    // 53
    class ExhaustiveError extends Error {
        constructor(value, message = `${value}はカリキュラムにない言語です`) {
            super(message);
        }
    }
    const printLearningLanguage = (lang) => {
        switch (lang) {
            case "JavaScript":
                console.log(`I'm learnig ${lang}`);
                break;
            case "TypeScript":
                console.log(`I'm learnig ${lang}`);
                break;
            case "React":
                console.log(`I'm learnig ${lang}`);
                break;
            default:
            // throw new ExhaustiveError(lang);
        }
    };
    // classを作って型を確認する方法もあるよう。
}
{
    // 64
    const func1 = (x) => {
        if (typeof x === "string") {
            console.log(x.length);
        }
        if (typeof x === "number") {
            console.log(x.toString());
        }
    };
    const func2 = (x) => {
        if (typeof x === "number") {
            console.log(x.toString());
        }
        if (typeof x === "object") {
            // 配列はオブジェクトだから
            console.log(x.map((x) => x * 2));
        }
    };
}
{
    const getEmail = (person) => {
        if ("email" in person) {
            return person.email;
        }
        else {
            return undefined;
        }
    };
    // 後で復習する。
}
{
    const res = (res) => {
        if ("isSuccess" in res) {
            if (res.isSuccess === true) {
                console.log(res.message);
            }
            else {
                console.log(res.error);
            }
        }
    };
}
{
    const res = (res) => {
        if (res.isSuccess === true) {
            console.log(res.message);
        }
        else {
            console.log(res.error);
        }
    };
}
{
    // 69
    const func = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield fetch("http://a.com");
        }
        catch (error) {
            if (typeof error === "object") {
                console.log(error);
            }
        }
    });
}
{
    // 70
    const func = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield fetch("http://a.com");
        }
        catch (error) {
            if (error instanceof Error) {
                // instanceofとtypeofの使い分け
                console.log(error.message);
            }
        }
    });
}
{
    // 72
    class HttpError extends Error {
    }
    const func = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield fetch("http://a.com");
        }
        catch (error) {
            if (error instanceof HttpError) {
                if ("status" in error) {
                    console.log(error.status);
                }
            }
        }
    });
}
{
    // 73
    // isの使い方を確認する
    const getString = (x) => {
        return typeof x === "string";
    };
    const func = (x) => {
        if (getString(x)) {
            return x;
        }
        else {
            return "";
        }
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
    // 102 なにがなんだか全くわからない。
    let stringNumberObject;
    stringNumberObject = { age: 36 }; //ok
    stringNumberObject.age = 36; //ok
    stringNumberObject["age"] = 36; //ok
    // stringNumberObject["age"] = "36"; //error
}
{
    let stringNumberObject;
    stringNumberObject = { age: 36 }; //ok
    stringNumberObject.age = 36; //ok
    stringNumberObject["age"] = 36; //ok
    // stringNumberObject["age"] = "36"; //error
}
{
}
{
    const data1 = {
        id: 1,
        payload: 2,
    };
    const data2 = {
        id: 1,
        payload: "hoge",
    };
    const data3 = {
        id: 1,
        payload: {
            name: "bob",
        },
    };
}
// 113~116まではまだやっていない。
{
    const data1 = {
        id: 1,
        message: "hoge",
    };
    const data2 = {
        id: 2,
        message: ["foo", "bar"],
    };
}
{
    // 115
    function func(x) {
        return x;
    }
    const str = func("a");
    const number = func(1);
}
{
    const getAge = (person) => {
        return person.age;
    };
    const age = getAge({ name: "taro", age: 25 });
}
