const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  } else {
    return "" + a + b;
  }
};

const result: string = addOrConcat(1, 2, "concat") as string;
console.log(result);

// 型推論で推論されている型とは別の型を定義したいときに使用する。型推論よりも自分のほうが型に詳しいというようなもの。
// ＊型推論以外の型を強制するのは良くないという議論もあり、なるべく使わない。
// htmlはそれぞれのタグに固有の型があるよう。divタグの場合、HTMLDivElementなど

type Greeting = (name: string) => string;
type Func = (func: () => void, name: string) => string;
// 上記の型エイリアスはどちらも引数と戻り値のみを定義したもの、
// 型Funcは、第一引数が、funcという名前の関数を受け取るということ、戻り値はない。

const func1 = (a: string, b: number): void => {};
// 通常のアロー関数の型定義は上記のようになるが、型エイリアスにより、引数のみを定義する場合は以下のようなる
// ↓typeを使用した書き方。
const hello: Greeting = (name) => `Hello, ${name}`;

console.log(hello("World")); // Hello, World
// 型エイリアスとアロー関数。
// https://commte.net/nextjs-type-alias

// インターセクション型[]
// ユニオン型の場合は、どちらかであったが、インターセクションはどちらもという意味がある。
// つまり、型Cは、AとBどちらのプロパティも使用しなければならない。
type A = { id: number };
type B = { name: string };
type C = A & B;

const obj: C = {
  id: 1,
  name: "hiro",
};

// 別の使用方法
type Post = {
  id: number;
  title: string;
  content: string;
};

type Comments = {
  userId: number;
  comments: string;
};

type PostWithComments = Post & { comments: Comments[] };

const post: PostWithComments = {
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
} as const;

const user = { id: 3, name: "bob" } as const;
type UserValue = keyof typeof user;
// keyof~ はオブジェクト型のすべてのプロパティをユニオン型に直す。
// typeof~ は~の部分にはオブジェクト名が入るが、そのオブジェクトのプロパティを取得する。
// javaScriptにおけるtypeofは、変数の型を判定するために使用される。stringやobjectなど
typeof Literal.message === "string";
// as constをしようすることで、UserValueは3と'bob'のリテラル型しか許可されなくなった。

// isは型ガードの役割として機能する。その関数の引数として受け取る値が、どの型エイリアスかを明示的に決定する機能をもつ
// 主に、ユニオン型で定義されている場合、どの型が入っているのかというのを明示的に指定する時に使用する。
//
{
  type A = {
    name: string;
  };

  type B = {
    age: number;
  };

  const isProfile = (arg: A | B): arg is A => {
    return (arg as A).name! == undefined;
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

  // 下は、isで型を明示的に指定しているのでエラーが出ない

  const isPerson2 = (person: A | B) => {
    if (isProfile(person)) {
      console.log(person.name);
    } else {
      console.log(person.age);
    }
  };
}

{
  type Red = {
    color: "red";
  };

  type Blue = {
    color2: "blue";
  };

  // const Color = (arg: Red | Blue) => {
  //   if (color2 !== undefined) {
  //     console.log(arg.color2);
  //   } else {
  //     console.log(arg.color);
  //   }
  // };

  const Color = (arg: Red | Blue) => {
    if ("color2" in arg) {
      console.log(arg.color2);
    } else {
      console.log(arg.color);
    }
  };
}
