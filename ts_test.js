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
// javaScriptにおけるtypeofは、変数の型を判定するために使用される。stringやobjectなど
typeof Literal.message === "string";
// as constをしようすることで、UserValueは3と'bob'のリテラル型しか許可されなくなった。
// isは型ガードの役割として機能する。その関数の引数として受け取る値が、どの型エイリアスかを明示的に決定する機能をもつ
// 主に、ユニオン型で定義されている場合、どの型が入っているのかというのを明示的に指定する時に使用する。
//
{
    const isProfile = (arg) => {
        return arg.name !== undefined;
    };
    // const getProfile = (person: A | B) => {
    //   if (!!person.age) {
    //     console.log(person.age);
    //   } else {
    //     console.log(person.name);
    //   }
    // };
    // !! は値の有無を真偽値で返す
    // 上記式は、isProfileという型を明示的にしていた定数を使用していないので、エラーがでる。
    // どちらの型エイリアスを参照しているのかわからない。
    // 下は、isProfileでperosnがどの型であるかをを明示的に指定しているのでエラーが出ない
    const isPerson2 = (person) => {
        if (isProfile(person)) {
            console.log(person.name);
        }
        else {
            console.log(person.age);
        }
    };
    // const getProfile = (person: A | B) => {
    //   if (!!person.age ) {
    //     console.log(person.age);
    //   } else {
    //     console.log(person.name);
    //   }
    // };
}
// 以下はinで型ガードするときの構文
{
    // const Color = (arg: Red | Blue) => {
    //   if (color2 !== undefined) {
    //     console.log(arg.color2);
    //   } else {
    //     console.log(arg.color);
    //   }
    // };
    // 上記の場合、argに指定されているユニオン型は、どちらのエイリアスが入るか不明なので、エラーが発生する。
    // 下記は。条件分岐内でinを使用してプロパティを指定しているため、どの型エイリアスのプロパティが入ってくるのかわかる。
    const Color = (arg) => {
        if ("color2" in arg) {
            console.log(arg.color2);
        }
        else {
            console.log(arg.color);
        }
    };
}
// * isとinの違いは、isは、関数の返り値で型を特定しているのに対して、inは、条件分岐内で型を特定している。
{
    const Profile = {
        firstName: "Ymada",
        lastName: "Tarou",
        address: "Tokyo",
    };
    // type Person = Record<string,number>
    // 上記のような書き方もある。これはプロパティキーの値を明記せず、単にstringのキーと、numberの値が入ることが示されている。
}
{
    // index型
    let telephoneNumber;
    // TELというキーがstring型で、キーの値もstring型であるという意味
    // 電話番号をnumber型として先頭を0から始めると8進数と認識されエラーが出るからstringとして定義する。
    telephoneNumber = { TEL: "010-1111-1111" };
}
{
    const fruit1 = {
        name: "Pineapple",
        color: "yellow",
        origin: "South America",
    };
    const fruit2 = {
        name: "Olive",
        color: "green",
        origin: undefined,
    };
}
{
    function getPerosn(obj, key) {
        return obj[key];
    }
    const person = {
        name: "Yamada Tarou",
        age: 23,
        homeTown: "Tokyo",
    };
    const name = getPerosn(person, "name");
    console.log(name);
}
// *アロー関数を使用する際、<T>を使用すると、JSXとして認識されエラ―が発生するので、functionを使用する。
